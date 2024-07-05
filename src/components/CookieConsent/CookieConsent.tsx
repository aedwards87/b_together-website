'use client';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
// Imported Components
import Cookie from '@/app/assets/svg/Cookie';
// Imported Styles
import styles from './cookieConsent.module.css';

//
// Constants
//
const USER_CONSENT_COOKIE_KEY_ACCEPTED = 'b_cookie_consent_is_accepted';
const USER_CONSENT_COOKIE_KEY_REJECTED = 'b_cookie_consent_is_rejected';
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

//
//
// CookieConsent Component
//
//
const CookieConsent = () => {
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(true);
  const [cookieConsentRejected, setCookieConsentRejected] = useState(true);

  useEffect(() => {
    const consentAccepted =
      Cookies.get(USER_CONSENT_COOKIE_KEY_ACCEPTED) === 'true';
    const consentRejected =
      Cookies.get(USER_CONSENT_COOKIE_KEY_REJECTED) === 'true';
    // console.log('consentIsTrue:', consentIsTrue)
    setCookieConsentAccepted(consentAccepted);
    setCookieConsentRejected(consentRejected);
  }, []);

  const onClickAccept = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentAccepted) {
      Cookies.set(USER_CONSENT_COOKIE_KEY_ACCEPTED, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentAccepted(true);
    }
  };

  const onClickReject = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!cookieConsentRejected) {
      Cookies.set(USER_CONSENT_COOKIE_KEY_REJECTED, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentRejected(true);
    }
  };

  if (cookieConsentAccepted || cookieConsentRejected) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.headingContainer}>
          <Cookie width="32" />
          <h2 className={styles.heading}>We use cookies</h2>
        </div>
        <p className={styles.body}>
          We use cookies to improve your browsing experience and for marketing
          purposes. To find out more, read our{' '}
          <Link href="/privacy-policy" className={styles.link}>
            privacy policy
          </Link>{' '}
          and{' '}
          <Link href="/cookie-policy" className={styles.link}>
            cookie policy
          </Link>
          .
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onClickReject}>
          Decline
        </button>
        <button className={styles.button} onClick={onClickAccept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
