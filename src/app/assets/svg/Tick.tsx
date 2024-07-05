const Tick = ({ className, ...props }: { className?: string; props?: any }) => {
  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="136" height="136" rx="68" fill="#FFE1BE" />
      <path
        d="M38.7539 68.2233L59.2551 88.7246L97.9797 50"
        stroke="url(#paint0_linear_838_340)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_838_340"
          x1="105.418"
          y1="78.309"
          x2="29.4456"
          y2="76.3243"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#005548" />
          <stop offset="0.505" stopColor="#00967F" />
          <stop offset="1" stopColor="#005548" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Tick;
