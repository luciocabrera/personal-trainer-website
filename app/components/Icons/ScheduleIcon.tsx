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
      className={className}
      height="300"
      style={style}
      viewBox="0 0 400 300"
      width="400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Calendar Background */}
      <rect
        fill="url(#scheduleGradient1)"
        height="180"
        opacity="0.9"
        rx="15"
        width="240"
        x="80"
        y="60"
      />

      {/* Calendar Header */}
      <rect
        fill="url(#scheduleGradient2)"
        height="40"
        rx="15"
        width="240"
        x="80"
        y="60"
      />

      {/* Calendar Spiral Bindings */}
      <circle
        cx="110"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />
      <circle
        cx="140"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />
      <circle
        cx="170"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />
      <circle
        cx="200"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />
      <circle
        cx="230"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />
      <circle
        cx="260"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />
      <circle
        cx="290"
        cy="50"
        fill="url(#scheduleGradient3)"
        opacity="0.8"
        r="8"
      />

      {/* Calendar Grid Lines */}
      <line
        opacity="0.3"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        x1="110"
        x2="290"
        y1="100"
        y2="100"
      />
      <line
        opacity="0.3"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        x1="140"
        x2="260"
        y1="120"
        y2="120"
      />
      <line
        opacity="0.3"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        x1="120"
        x2="280"
        y1="140"
        y2="140"
      />
      <line
        opacity="0.3"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        x1="100"
        x2="300"
        y1="160"
        y2="160"
      />
      <line
        opacity="0.3"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        x1="130"
        x2="270"
        y1="180"
        y2="180"
      />
      <line
        opacity="0.3"
        stroke="url(#scheduleGradient4)"
        strokeWidth="2"
        x1="110"
        x2="290"
        y1="200"
        y2="200"
      />

      {/* Schedule Time Blocks */}
      <rect
        fill="url(#scheduleGradient5)"
        height="20"
        opacity="0.7"
        rx="3"
        width="40"
        x="100"
        y="110"
      />
      <rect
        fill="url(#scheduleGradient6)"
        height="20"
        opacity="0.7"
        rx="3"
        width="60"
        x="160"
        y="130"
      />
      <rect
        fill="url(#scheduleGradient7)"
        height="20"
        opacity="0.7"
        rx="3"
        width="50"
        x="120"
        y="150"
      />
      <rect
        fill="url(#scheduleGradient8)"
        height="20"
        opacity="0.7"
        rx="3"
        width="70"
        x="200"
        y="170"
      />

      {/* Clock Icon */}
      <circle
        cx="340"
        cy="80"
        fill="url(#scheduleGradient9)"
        opacity="0.8"
        r="25"
      />
      <circle
        cx="340"
        cy="80"
        fill="none"
        r="20"
        stroke="white"
        strokeWidth="2"
      />
      <line
        stroke="white"
        strokeLinecap="round"
        strokeWidth="3"
        x1="340"
        x2="340"
        y1="80"
        y2="70"
      />
      <line
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
        x1="340"
        x2="348"
        y1="80"
        y2="88"
      />
      <circle cx="340" cy="80" fill="white" r="2" />

      {/* Location Pin */}
      <path
        d="M60 140 L60 120 Q60 110 70 110 Q80 110 80 120 L80 140 Q75 150 70 160 Q65 150 60 140 Z"
        fill="url(#scheduleGradient10)"
        opacity="0.8"
      />
      <circle cx="70" cy="125" fill="white" opacity="0.9" r="6" />

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
        fill="url(#scheduleGradient14)"
        opacity="0.5"
        r="8"
      />
      <circle
        cx="360"
        cy="160"
        fill="url(#scheduleGradient15)"
        opacity="0.5"
        r="6"
      />
      <rect
        fill="url(#scheduleGradient16)"
        height="12"
        opacity="0.4"
        rx="2"
        width="12"
        x="30"
        y="220"
      />
      <rect
        fill="url(#scheduleGradient17)"
        height="10"
        opacity="0.4"
        rx="2"
        width="10"
        x="350"
        y="220"
      />

      <defs>
        <linearGradient
          id="scheduleGradient1"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient2"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient3"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient4"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient5"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient6"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient7"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient8"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient9"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient10"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient11"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#ff9500" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient12"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient13"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff6b6b" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient14"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#4ECDC4" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient15"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff9500" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient16"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient
          id="scheduleGradient17"
          x1="0%"
          x2="100%"
          y1="0%"
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
