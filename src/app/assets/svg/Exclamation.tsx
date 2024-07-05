import React from 'react';

const Exclamation = ({
  className,
  fill = '#B87277',
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_814_1930)">
        <path
          d="M3.05288 17.1929C2.09778 16.2704 1.33596 15.167 0.811868 13.9469C0.287778 12.7269 0.0119157 11.4147 0.000377568 10.0869C-0.0111606 8.7591 0.241856 7.44231 0.744665 6.21334C1.24747 4.98438 1.99001 3.86786 2.92893 2.92893C3.86786 1.99001 4.98438 1.24747 6.21334 0.744665C7.44231 0.241856 8.7591 -0.0111606 10.0869 0.000377568C11.4147 0.0119157 12.7269 0.287778 13.9469 0.811868C15.167 1.33596 16.2704 2.09778 17.1929 3.05288C19.0145 4.9389 20.0224 7.46493 19.9996 10.0869C19.9768 12.7089 18.9251 15.217 17.0711 17.0711C15.217 18.9251 12.7089 19.9768 10.0869 19.9996C7.46493 20.0224 4.9389 19.0145 3.05288 17.1929ZM15.7829 15.7829C17.284 14.2818 18.1273 12.2458 18.1273 10.1229C18.1273 7.99997 17.284 5.96401 15.7829 4.46288C14.2818 2.96176 12.2458 2.11843 10.1229 2.11843C7.99997 2.11843 5.96401 2.96176 4.46288 4.46288C2.96176 5.96401 2.11843 7.99997 2.11843 10.1229C2.11843 12.2458 2.96176 14.2818 4.46288 15.7829C5.96401 17.284 7.99997 18.1273 10.1229 18.1273C12.2458 18.1273 14.2818 17.284 15.7829 15.7829ZM9.12288 5.12288H11.1229V11.1229H9.12288V5.12288ZM9.12288 13.1229H11.1229V15.1229H9.12288V13.1229Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_814_1930">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Exclamation;