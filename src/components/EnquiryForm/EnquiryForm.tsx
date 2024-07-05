'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// Imported components
import Exclamation from '@/app/assets/svg/Exclamation';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { formAction } from '@/app/server-actions/formData';
// Imported styles
import styles from './enquiryForm.module.css';
// Imported types
import { schema, TSchema } from '@/app/utils/types';

//
//
// Component for "Enquire Form"
//
//
export default function EnquiryForm({ category }: { category: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<TSchema>({ mode: 'all', resolver: zodResolver(schema) });

  const clientAction = async (formData: TSchema) => {
    const result = await formAction(formData);
    const error = result?.error;

    if (error) {
      setIsSubmitting(false);
      if (error?.toLowerCase().includes('first')) {
        setError('firstName', {
          type: 'server',
          message: result.error,
        });
      } else if (error?.toLowerCase().includes('last')) {
        setError('lastName', {
          type: 'server',
          message: result.error,
        });
      } else if (error?.toLowerCase().includes('email')) {
        setError('email', {
          type: 'server',
          message: result.error,
        });
      } else if (error?.toLowerCase().includes('number')) {
        setError('phone', {
          type: 'server',
          message: result.error,
        });
      } else if (error?.toLowerCase().includes('membership')) {
        setError('membershipType', {
          type: 'server',
          message: result.error,
        });
      } else if (error?.toLowerCase().includes('consent')) {
        setError('consent', {
          type: 'server',
          message: result.error,
        });
      } else {
        setIsError(true);
      }
    } else {
      setIsSubmitting(false);
      setIsError(false);
      router.replace('/thank-you');
      reset();
    }
  };

  const onSubmit: SubmitHandler<TSchema> = (formData: TSchema) => {
    if (formData.botCheck !== '') {
      // Form submission is spam
      return;
    }
    setIsSubmitting(true);
    clientAction(formData);
  };

  return (
    <form
      name={category}
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Heading as="h2" size="sm">
            Contact information
          </Heading>
          <p>Let us know how to get in contact with you</p>
        </div>

        <div className={styles.fieldsContainer}>
          <div
            className={[styles.field, errors?.firstName && styles.error].join(' ')} // prettier-ignore
          >
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <input
              {...register('firstName')}
              className={styles.input}
              autoComplete="given-name"
              aria-invalid={errors?.firstName ? 'true' : 'false'}
              placeholder="Enter your first name"
            />
            {errors?.firstName && (
              <span role="alert" className={styles.errorMessage}>
                <Exclamation /> {errors?.firstName?.message}
              </span>
            )}
          </div>
          <div
            className={[styles.field, errors?.lastName && styles.error].join(' ')} // prettier-ignore
          >
            <label htmlFor="lastName" className={styles.label}>
              Last Name
            </label>
            <input
              {...register('lastName')}
              className={styles.input}
              autoComplete="family-name"
              aria-invalid={errors?.lastName ? 'true' : 'false'}
              placeholder="Enter your last name"
            />
            {errors?.lastName && (
              <span role="alert" className={styles.errorMessage}>
                <Exclamation /> {errors?.lastName?.message}
              </span>
            )}
          </div>
          <div
            className={[styles.field, errors?.email && styles.error].join(' ')}
          >
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              {...register('email')}
              className={styles.input}
              autoComplete="email"
              aria-invalid={errors?.email ? 'true' : 'false'}
              placeholder="Enter your email address"
            />
            {errors?.email && (
              <span role="alert" className={styles.errorMessage}>
                <Exclamation /> {errors?.email?.message}
              </span>
            )}
          </div>
          <div
            className={[styles.field, errors?.phone && styles.error].join(' ')} // prettier-ignore
          >
            <label htmlFor="phone" className={styles.label}>
              Contact number
            </label>
            <input
              {...register('phone')}
              className={styles.input}
              autoComplete="tel"
              aria-invalid={errors?.phone ? 'true' : 'false'}
              placeholder="Enter your contact number"
            />
            {errors?.phone && (
              <span role="alert" className={styles.errorMessage}>
                <Exclamation /> {errors?.phone?.message}
              </span>
            )}
          </div>
          {/* HoneyPot */}
          <div className={[styles.field, styles.visuallyHidden].join(' ')}>
            <label htmlFor="botCheck" className={styles.label}>
              &nbsp;
            </label>
            <input
              {...register('botCheck')}
              tabIndex={-1}
              type="text"
              className={styles.input}
              value=""
              autoComplete="off"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {category === 'membership' && (
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <Heading as="h2" size="sm">
              Type of membership
            </Heading>
            <p>Let us know what type of membership you are interested in</p>
          </div>

          <div
            className={[styles.radioContainer, errors?.membershipType && styles.error].join(' ')} // prettier-ignore
          >
            <label
              htmlFor="membership-monthlyWeekday"
              className={styles.radioLabel}
            >
              <input
                type="radio"
                id="membership-monthlyWeekday"
                value="membership-monthlyWeekday"
                className={styles.radioButton}
                {...register('membershipType')}
              />
              <span className={styles.radioMark}></span>
              Monthly Weekday
            </label>
            <label
              htmlFor="membership-monthlyFullTime"
              className={styles.radioLabel}
            >
              <input
                type="radio"
                id="membership-monthlyFullTime"
                value="membership-monthlyFullTime"
                className={styles.radioButton}
                {...register('membershipType')}
              />
              <span className={styles.radioMark}></span>
              Monthly Full Time
            </label>
            <label
              htmlFor="membership-annualFullTime"
              className={styles.radioLabel}
            >
              <input
                type="radio"
                id="membership-annualFullTime"
                value="membership-annualFullTime"
                className={styles.radioButton}
                {...register('membershipType')}
              />
              <span className={styles.radioMark}></span>
              Annual Full Time
            </label>
            {errors?.membershipType && (
              <span role="alert" className={styles.errorMessage}>
                <Exclamation /> {errors?.membershipType?.message}
              </span>
            )}
          </div>
        </div>
      )}

      <div className={styles.container}>
        <div
          className={[
            styles.consentContainer,
            errors?.consent && styles.error,
          ].join(' ')}
        >
          <label htmlFor="consent" className={styles.checkLabel}>
            <input
              type="checkbox"
              id="consent"
              className={styles.checkButton}
              {...register('consent')}
            />
            <span className={styles.checkMark}></span>
            <span>
              I consent to my details being used in line with{' '}
              <strong>
                <Link href="/privacy-policy">
                  b_together&apos;s privacy policy.
                </Link>
              </strong>
            </span>
          </label>
          {errors?.consent && (
            <span role="alert" className={styles.errorMessage}>
              <Exclamation /> {errors?.consent?.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <Button type="submit" aria-disabled={!isValid || isSubmitting}>
          {!isSubmitting ? ' Submit' : 'Submitting...'}
        </Button>
        {isError && (
          <span role="alert" className={styles.errorMessage}>
            <Exclamation /> Something went wrong, please try again.
          </span>
        )}
      </div>
    </form>
  );
}
