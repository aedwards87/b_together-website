// import { useState } from 'react';

const Arrow = ({ className, ...props }: { className?: string }) => {
  // const [hidden, setHidden] = useState(true);
  return (
    // <svg
    //   width="15"
    //   height="16"
    //   viewBox="0 0 15 16"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    //   {...props}
    // >
    //   <path
    //     d="M0 8H13.4821M13.4821 8L6.98206 1.5M13.4821 8L6.98206 14.5"
    //     stroke="#005548"
    //     strokeWidth="2"
    //   />
    // </svg>
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      // onMouseEnter={() => setHidden(false)}
      // onMouseLeave={() => setHidden(true)}
      {...props}
    >
      {/* <path
          d="M2.33038 1.5L7.63373 7L2.33038 12.5"
          stroke="#005548"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        /> */}
      <path
        d="M2.48206 7H13.4821M13.4821 7L8.17871 1.5M13.4821 7L8.17871 12.5"
        stroke="#005548"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
