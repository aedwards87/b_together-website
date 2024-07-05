const TickIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M18.929 11.0713C18.2147 14.6427 15.5218 18.0056 11.7432 18.757C9.90038 19.124 7.98869 18.9002 6.2804 18.1176C4.5721 17.3349 3.15428 16.0332 2.22881 14.3978C1.30335 12.7625 0.917417 10.8768 1.12598 9.00939C1.33454 7.14194 2.12695 5.38789 3.39039 3.997C5.98182 1.14271 10.3575 0.356999 13.929 1.78557"
        stroke="#005549"
        strokeWidth="2.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.78564 9.643L10.3571 13.2144L18.9285 3.92871"
        stroke="#005549"
        strokeWidth="2.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TickIcon;
