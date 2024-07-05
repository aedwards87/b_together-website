import React from 'react';

const Cross = ({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M9 2.5V17.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16.5 10L1.5 10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Cross;
