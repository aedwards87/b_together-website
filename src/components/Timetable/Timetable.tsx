import { PrismicRichText } from '@prismicio/react';
import Button from '../Button/Button';

const TimetableButtons = ({
  slice,
  styles,
  component,
}: {
  slice: any;
  styles: any;
  component: any;
}) => {
  const generateMonths = (f: string) =>
    Array.from(Array(12), (e, i) =>
      new Date(25e8 * ++i).toLocaleString('en-GB', { month: f as 'long' })
    );
  const monthsArray = generateMonths('long');
  const currentMonth = new Date().getMonth();
  const pastMonths = monthsArray.slice(0, currentMonth + 1);

  return (
    <div id="timetable" className={styles.timetableContainer}>
      <div className={styles.timetableContentContainer}>
        <PrismicRichText
          field={slice.primary.timetableHeading}
          components={component}
        />
        <PrismicRichText
          field={slice.primary.timetableBody}
          components={component}
        />
      </div>
      <div className={styles.timetableButtonContainer}>
        {pastMonths.map((month) => {
          return (
            <Button
              key={month}
              field={slice.primary[`timetable${month}Link`]}
              direction="down"
              bgColor="purple800"
            >
              {month}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TimetableButtons;
