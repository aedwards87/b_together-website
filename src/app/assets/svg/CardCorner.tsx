const CardCorner = ({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) => {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M76.5 38.5H78.5C56.41 38.5 38.5 56.41 38.5 78.5V76.5C38.5 76.5 38.5 115 0 115H115V0C115 0 115 38.5 76.5 38.5Z"
        fill="white"
      />
    </svg>
  );
};

export default CardCorner;
