import { z } from 'zod';
import { nameRegEx, phoneRegEx } from './helpers';

//
//
// Enquiry form schema
//
//
export const schema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name exceeds the character limit')
    .regex(nameRegEx, 'Please enter a valid first name'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name exceeds the character limit')
    .regex(nameRegEx, 'Please enter a valid last name'),
  email: z
    .string({
      invalid_type_error: 'Please enter a valid email address',
      required_error: 'Please enter a valid email address',
    })
    .email({ message: 'Please enter a valid email address' }),
  phone: z.union([
    z
      .string()
      .max(12, 'Please enter a valid contact number')
      .min(10, 'Please enter a valid contact number')
      .regex(phoneRegEx, 'Please enter a valid contact number'),
    z.literal(''),
  ]),
  membershipType: z
    .string({
      invalid_type_error: 'Please select a membership type',
      required_error: 'Please select a membership type',
    })
    .min(1, 'Please select a membership type')
    .includes('membership-', {
      message: 'Please select a membership type',
    }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please read and accept the privacy policy',
  }),
  botCheck: z.string().optional(),
});

export type TSchema = z.infer<typeof schema>;

//
//
// Email schema
//
//
export const emailSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Please enter a valid email address',
      required_error: 'Please enter a valid email address',
    })
    .email({ message: 'Please enter a valid email address' }),
});

export type TEmailSchema = z.infer<typeof schema>;
