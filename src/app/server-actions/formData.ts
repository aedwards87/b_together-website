'use server';
import getErrorMessage from '../utils/getErrorMessage';
import { TSchema, schema } from '../utils/types';

const b_PGXClientId = process.env.BTOGETHER_PERFECTGYM_X_CLIENT_ID;
const b_PGXClientSecret = process.env.BTOGETHER_PERFECTGYM_X_CLIENT_SECRET;

export const formAction = async (formData: TSchema) => {
  const formResponse = schema.safeParse(formData);

  let zodErrors = {};
  if (!formResponse.success) {
    formResponse.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  let formResponseData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    membershipType: '',
    consent: false,
  };

  if (formResponse.success) {
    formResponseData = formResponse?.data;
  }

  const url = 'https://btogetheruk.perfectgym.com/api/v2.1/Crm2/AddLead';
  const { firstName, lastName, phone, email, membershipType, consent } =
    formResponseData;
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

  const response = await fetch(url, {
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

  const result = await response.json();

  if (Object.keys(zodErrors).length > 0) {
    if ((zodErrors as { email: string }).email) {
      throw new Error((zodErrors as { email: string }).email);
    } else if ((zodErrors as { phone: string }).phone) {
      throw new Error((zodErrors as { phone: string }).phone);
    } else if ((zodErrors as { firstName: string }).firstName) {
      throw new Error((zodErrors as { firstName: string }).firstName);
    } else if ((zodErrors as { lastName: string }).lastName) {
      throw new Error((zodErrors as { lastName: string }).lastName);
    } else if ((zodErrors as { membershipType: string }).membershipType) {
      throw new Error((zodErrors as { membershipType: string }).membershipType);
    } else if ((zodErrors as { consent: string }).consent) {
      throw new Error((zodErrors as { consent: string }).consent);
    } else {
      throw new Error('Something went wrong');
    }
  }

  if (!response.ok) {
    return {
      error: getErrorMessage(result.error || result.errors[0].message),
    };
  }

  return result;
};
