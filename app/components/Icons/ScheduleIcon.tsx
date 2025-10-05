import * as React from "react";

interface ScheduleIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ScheduleIcon: React.FC<ScheduleIconProps> = ({
  className,
  style,
}) => {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Calendar Background */}
      <rect
        x="80"
        y="60"
        width="240"
        height="180"
        rx="15"
        fill="url(#scheduleGradient1)"
        opacity="0.9"
      />

      {/* Calendar Header */}
      <rect
        x="80"
        y="60"
        width="240"
        height="40"
        rx="15"
        fill="url(#scheduleGradient2)"
      />

      {/* Calendar Spiral Bindings */}
      <circle
        cx="110"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />
      <circle
        cx="140"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />
      <circle
        cx="170"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />
      <circle
        cx="200"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />
      <circle
        cx="230"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />
      <circle
        cx="260"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />
      <circle
        cx="290"
        cy="50"
        r="8"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
      />

      {/* Calendar Grid Lines */}
      <line
        x1="110"
        y1="100"
        x2="290"
        y2="100"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="140"
        y1="120"
        x2="260"
        y2="120"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="120"
        y1="140"
        x2="280"
        y2="140"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="160"
        x2="300"
        y2="160"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="130"
        y1="180"
        x2="270"
        y2="180"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="110"
        y1="200"
        x2="290"
        y2="200"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Schedule Time Blocks */}
      <rect
        x="100"
        y="110"
        width="40"
        height="20"
        rx="3"
        fill="url(#scheduleGradient5)"
        opacity="0.7"
      />
      <rect
        x="160"
        y="130"
        width="60"
        height="20"
        rx="3"
        fill="url(#scheduleGradient6)"
        opacity="0.7"
      />
      <rect
        x="120"
        y="150"
        width="50"
        height="20"
        rx="3"
        fill="url(#scheduleGradient7)"
        opacity="0.7"
      />
      <rect
        x="200"
        y="170"
        width="70"
        height="20"
        rx="3"
        fill="url(#scheduleGradient8)"
        opacity="0.7"
      />

      {/* Clock Icon */}
      <circle
        cx="340"
        cy="80"
        r="25"
        fill="url(#scheduleGradient9)"
        opacity="0.8"
      />
      <circle
        cx="340"
        cy="80"
        r="20"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="340"
        y1="80"
        x2="340"
        y2="70"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="340"
        y1="80"
        x2="348"
        y2="88"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="340" cy="80" r="2" fill="white" />

      {/* Location Pin */}
      <path
        d="M60 140 L60 120 Q60 110 70 110 Q80 110 80 120 L80 140 Q75 150 70 160 Q65 150 60 140 Z"
        fill="url(#scheduleGradient10)"
        opacity="0.8"
      />
      <circle cx="70" cy="125" r="6" fill="white" opacity="0.9" />

      {/* Decorative Stars */}
      <path
        d="M350 140L352 146L358 146L353 150L355 156L350 152L345 156L347 150L342 146L348 146L350 140Z"
        fill="url(#scheduleGradient11)"
        opacity="0.6"
      />
      <path
        d="M40 100L41 103L44 103L42 105L43 108L40 106L37 108L38 105L36 103L39 103L40 100Z"
        fill="url(#scheduleGradient12)"
        opacity="0.6"
      />
      <path
        d="M330 200L331 203L334 203L332 205L333 208L330 206L327 208L328 205L326 203L329 203L330 200Z"
        fill="url(#scheduleGradient13)"
        opacity="0.6"
      />

      {/* Floating Elements */}
      <circle
        cx="50"
        cy="180"
        r="8"
        fill="url(#scheduleGradient14)"
        opacity="0.5"
      />
      <circle
        cx="360"
        cy="160"
        r="6"
        fill="url(#scheduleGradient15)"
        opacity="0.5"
      />
      <rect
        x="30"
        y="220"
        width="12"
        height="12"
        rx="2"
        fill="url(#scheduleGradient16)"
        opacity="0.4"
      />
      <rect
        x="350"
        y="220"
        width="10"
        height="10"
        rx="2"
        fill="url(#scheduleGradient17)"
        opacity="0.4"
      />

      <defs>
        <linearGradient
          id="scheduleGradient1"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient2"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient3"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient4"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient5"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient6"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient7"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient8"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient9"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient10"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient11"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient12"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient13"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient14"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient15"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient16"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient17"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ScheduleIcon;
