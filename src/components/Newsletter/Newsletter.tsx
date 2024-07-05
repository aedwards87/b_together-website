'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import Heading from '../Heading/Heading';
import { zodResolver } from '@hookform/resolvers/zod';
import { TEmailSchema, emailSchema } from '@/app/utils/types';
import Exclamation from '@/app/assets/svg/Exclamation';
import Button from '../Button/Button';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import TickIcon from '@/app/assets/svg/TickIcon';

const Newsletter = ({ styles }: { styles: any }) => {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<TEmailSchema>({
    mode: 'onBlur',
    resolver: zodResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<TEmailSchema> = async (email: TEmailSchema) => {
    try {
      setIsSuccessful(false);
      const response = await axios.post('/api/subscribe', email);
      if (response.status == 201) {
        setIsSuccessful(true);
        reset();
      }
    } catch (error: any) {
      const err = error.response.data.error;
      if (err) {
        setIsSuccessful(false);
        if (err === 'This email is already subscribed') {
          setError('email', {
            type: 'server',
            message: err,
          });
        } else if (err.includes('Oops')) {
          setError('email', {
            type: 'server',
            message: 'Unable to subscribe. Please email ',
          });
        }
      }
    }
  };

  return (
    <div className={styles.newsletterContainer}>
      <Heading as="h2" size="lg" className={styles.heading}>
        <strong>Newsletter</strong> <br />
        Sign up
      </Heading>
      <p className={styles.body}>
        Subscribe to our newsletter to get the latest news and updates.
      </p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={[styles.field, errors?.email && styles.error].join(' ')}
        >
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            {...register('email')}
            id="email"
            className={styles.input}
            autoComplete="email"
            aria-invalid={errors?.email ? 'true' : 'false'}
            placeholder="Enter your email address"
          />
          <Button
            type="submit"
            className={styles.button}
            aria-disabled={!isValid}
          >
            <span>Subscribe</span>
          </Button>
        </div>
        {errors?.email && (
          <div role="alert" className={styles.errorMessage}>
            <Exclamation />
            <span>
              {errors?.email?.message}
              {errors?.email?.message ===
                'Unable to subscribe. Please email ' && (
                <Link href="mailto:hello@b-together.com">
                  hello@b-together.com
                </Link>
              )}
            </span>
          </div>
        )}
        {isSuccessful && (
          <div role="alert" className={styles.successMessage}>
            <TickIcon />
            <span>Welcome! Subscription successful.</span>
          </div>
        )}
        {/* HoneyPot */}
        <div className={[styles.field, styles.visuallyHidden].join(' ')}>
          <label htmlFor="botCheck" className={styles.label}>
            &nbsp;
          </label>
          <input
            {...register('botCheck')}
            id="botCheck"
            tabIndex={-1}
            type="text"
            className={styles.input}
            value=""
            autoComplete="off"
            aria-hidden="true"
          />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
