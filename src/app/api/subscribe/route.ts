import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Email validation schema
const EmailSchema = z
  .string()
  .email({ message: 'Please enter a valid email address' });

// Subscription POST function
export async function POST(req: NextRequest) {
  // 1. Validate email address
  const body: { email: string } = await req.json();

  const emailValidation = EmailSchema.safeParse(body.email);

  if (!emailValidation.success) {
    return NextResponse.json(
      { error: 'Please enter a valid email address' },
      { status: 400 }
    );
  }

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 4. Prepare request data
  const data = {
    email_address: emailValidation.data,
    status: 'subscribed',
  };

  // 5. Set request headers
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `apiKey ${API_KEY}`,
    },
  };

  // 6. Send POST request to Mailchimp API
  try {
    const response = await axios.post(url, data, options);
    if (response.status == 200) {
      return NextResponse.json({ success: true }, { status: 201 });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `a: ${error.response?.status}`,
        `b: ${error.response?.data.title}`,
        `c: ${error.response?.data.detail}`
      );

      if (error.response?.data.title == 'Member Exists') {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        );
      }

      if (error.response?.data.title.includes('Not Subscribed')) {
        return NextResponse.json(
          {
            error:
              "Oops! There was an error subscribing you to the newsletter. Please email me at hello@b-together.com and we'll add you to the list.",
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        error:
          "Oops! There was an error subscribing you to the newsletter. Please email me at hello@b-together.com and we'll add you to the list.",
      },
      { status: 500 }
    );
  }
}
