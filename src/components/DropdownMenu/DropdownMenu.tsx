import styles from './DropdownMenu.module.css';

const DropdownMenu = ({ mobile, ...props }: { mobile?: boolean }) => {
  return (
    <div
      className={[styles.container, mobile && styles.mobile].join(' ')}
      {...props}
    >
      <ul className={styles.listContainer}>
        <li className={styles.list}>
          <a
            href="https://app.famly.co/#/customInquiryForm/3acbed61-2ca6-4dea-9c31-d9d9f85fe36f/to/2aa7d7ad-7021-47dd-80c0-198f1fe9cdcf/submit"
            rel="noreferrer"
            className={styles.link}
          >
            Nursery
          </a>
        </li>
        <li className={styles.list}>
          <a href="events-enquire" className={styles.link}>
            Events
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
