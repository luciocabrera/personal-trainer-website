interface EmailIconProps {
  className?: string;
  height?: number;
  width?: number;
}

const EmailIcon = ({ className, height = 24, width = 24 }: EmailIconProps) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      height={height}
      viewBox="0 0 24 24"
      width={width}
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 8l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
};

export default EmailIcon;
