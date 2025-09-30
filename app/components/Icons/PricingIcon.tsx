interface PricingIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const PricingIcon = ({
  width = 220,
  height = 200,
  className,
}: PricingIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circles */}
      <circle
        cx="110"
        cy="100"
        r="90"
        fill="url(#pricingGradient1)"
        opacity="0.1"
      />
      <circle
        cx="110"
        cy="100"
        r="70"
        fill="url(#pricingGradient2)"
        opacity="0.15"
      />
      <circle
        cx="110"
        cy="100"
        r="50"
        fill="url(#pricingGradient3)"
        opacity="0.2"
      />

      {/* Membership card */}
      <rect
        x="70"
        y="60"
        width="80"
        height="50"
        rx="8"
        fill="url(#pricingGradient4)"
        stroke="url(#pricingGradient5)"
        strokeWidth="2"
      />
      <rect
        x="75"
        y="65"
        width="70"
        height="8"
        rx="4"
        fill="rgba(255,255,255,0.8)"
      />
      <rect
        x="75"
        y="78"
        width="45"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.6)"
      />
      <rect
        x="75"
        y="88"
        width="35"
        height="6"
        rx="3"
        fill="rgba(255,255,255,0.6)"
      />
      <circle cx="135" cy="85" r="8" fill="rgba(255,255,255,0.8)" />

      {/* Fitness elements - dumbbells */}
      <rect
        x="40"
        y="130"
        width="30"
        height="8"
        rx="4"
        fill="url(#pricingGradient6)"
      />
      <circle cx="35" cy="134" r="6" fill="url(#pricingGradient6)" />
      <circle cx="75" cy="134" r="6" fill="url(#pricingGradient6)" />

      <rect
        x="150"
        y="130"
        width="30"
        height="8"
        rx="4"
        fill="url(#pricingGradient6)"
      />
      <circle cx="145" cy="134" r="6" fill="url(#pricingGradient6)" />
      <circle cx="185" cy="134" r="6" fill="url(#pricingGradient6)" />

      {/* Trophy/achievement icon */}
      <path
        d="M95 40C95 35 100 30 110 30C120 30 125 35 125 40V45H95V40Z"
        fill="url(#pricingGradient7)"
      />
      <rect
        x="100"
        y="45"
        width="20"
        height="15"
        rx="2"
        fill="url(#pricingGradient7)"
      />
      <rect
        x="105"
        y="60"
        width="10"
        height="8"
        fill="url(#pricingGradient7)"
      />
      <rect
        x="102"
        y="68"
        width="16"
        height="4"
        rx="2"
        fill="url(#pricingGradient7)"
      />

      {/* Stars */}
      <path
        d="M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56L50 50Z"
        fill="url(#pricingGradient8)"
        opacity="0.8"
      />
      <path
        d="M170 50L172 56L178 56L173 60L175 66L170 62L165 66L167 60L162 56L168 56L170 50Z"
        fill="url(#pricingGradient8)"
        opacity="0.8"
      />

      <defs>
        <linearGradient
          id="pricingGradient1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>
        <linearGradient
          id="pricingGradient2"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
        <linearGradient
          id="pricingGradient3"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#FF9500" />
        </linearGradient>
        <linearGradient
          id="pricingGradient4"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>
        <linearGradient
          id="pricingGradient5"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
        <linearGradient
          id="pricingGradient6"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
        <linearGradient
          id="pricingGradient7"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF9500" />
        </linearGradient>
        <linearGradient
          id="pricingGradient8"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PricingIcon;
