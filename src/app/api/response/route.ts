import { schema } from '@/app/utils/types';
import { NextRequest, NextResponse } from 'next/server';

//
// Access Tokens
//
const b_PGXClientId = process.env.BTOGETHER_PERFECTGYM_X_CLIENT_ID;
const b_PGXClientSecret = process.env.BTOGETHER_PERFECTGYM_X_CLIENT_SECRET;
const b_ApiKey = process.env.BTOGETHER_FORM;

//
// POST Request
//
export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('b_secret');
  if (apiKey !== b_ApiKey) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  const body: unknown = await req.json();

  const response = schema.safeParse(body);

  let zodErrors = {};

  if (!response.success) {
    response.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  let responseData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    membershipType: '',
    consent: true,
  };

  if (response.success) {
    responseData = response?.data;
  }

  const { firstName, lastName, phone, email, membershipType, consent } =
    responseData;
  const url = 'https://btogetheruk.perfectgym.com/api/v2.1/Crm2/AddLead';
  const SJW = 1;
  const WebFormInquiry = 81;

  let membershipId: number;
  if (membershipType.includes('monthlyWeekday')) {
    membershipId = 145;
  } else if (membershipType.includes('monthlyFullTime')) {
    membershipId = 146;
  } else {
    membershipId = 147; // annualFulltime
  }

  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      email,
      clubId: SJW, // London
      campaignId: membershipId,
      inquiredViaId: WebFormInquiry, // Web form inquiry
      agreements: [
        {
          id: 2,
          hasAgreed: consent,
        },
      ],
    }),
    headers: {
      'Content-Type': 'application/json',
      'X-Client-id': b_PGXClientId,
      'X-Client-Secret': b_PGXClientSecret,
    } as HeadersInit,
  });

  const data = await result.json();

  if (Object.keys(zodErrors).length > 0) {
    return NextResponse.json({ error: zodErrors }, { status: result.status });
  }

  if (!result.ok) {
    return NextResponse.json(
      {
        error:
          data.errors[0].message ||
          result.statusText ||
          'Internal Server Error',
      },
      { status: result.status }
    );
  }

  return NextResponse.json({
    success: {
      success: true,
      status: 200,
      data,
    },
  });
}
