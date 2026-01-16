import type { IconProps } from '../Icons.types';

const SignupIcon = ({ className, height = 200, width = 220 }: IconProps) => {
  return (
    <svg
      className={className}
      fill='none'
      height={height}
      viewBox='0 0 220 200'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Background circles - consistent with pricing */}
      <circle
        cx='110'
        cy='100'
        fill='url(#signupGradient1)'
        opacity='0.1'
        r='90'
      />
      <circle
        cx='110'
        cy='100'
        fill='url(#signupGradient2)'
        opacity='0.15'
        r='70'
      />
      <circle
        cx='110'
        cy='100'
        fill='url(#signupGradient3)'
        opacity='0.2'
        r='50'
      />

      {/* Contact/signup representation */}
      <path
        d='M70 80L110 110L150 80V140H70V80Z'
        fill='url(#signupGradient4)'
      />
      <path
        d='M70 80L110 110L150 80'
        fill='none'
        stroke='url(#signupGradient4)'
        strokeWidth='3'
      />
      <circle
        cx='110'
        cy='60'
        fill='url(#signupGradient4)'
        r='15'
      />
      <path
        d='M95 45C95 37 102 30 110 30C118 30 125 37 125 45'
        fill='none'
        stroke='url(#signupGradient4)'
        strokeWidth='3'
      />

      {/* Decorative stars */}
      <path
        d='M50 50L52 56L58 56L53 60L55 66L50 62L45 66L47 60L42 56L48 56Z'
        fill='url(#signupGradient5)'
        opacity='0.6'
      />
      <path
        d='M170 40L172 46L178 46L173 50L175 56L170 52L165 56L167 50L162 46L168 46Z'
        fill='url(#signupGradient5)'
        opacity='0.6'
      />
      <path
        d='M180 120L182 126L188 126L183 130L185 136L180 132L175 136L177 130L172 126L178 126Z'
        fill='url(#signupGradient5)'
        opacity='0.6'
      />

      <defs>
        <linearGradient
          id='signupGradient1'
          x1='0%'
          x2='100%'
          y1='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='#FF6B6B'
          />
          <stop
            offset='100%'
            stopColor='#4ECDC4'
          />
        </linearGradient>
        <linearGradient
          id='signupGradient2'
          x1='0%'
          x2='100%'
          y1='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='#FF9500'
          />
          <stop
            offset='100%'
            stopColor='#FF6B6B'
          />
        </linearGradient>
        <linearGradient
          id='signupGradient3'
          x1='0%'
          x2='100%'
          y1='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='#4ECDC4'
          />
          <stop
            offset='100%'
            stopColor='#FF9500'
          />
        </linearGradient>
        <linearGradient
          id='signupGradient4'
          x1='0%'
          x2='100%'
          y1='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='#FF6B6B'
          />
          <stop
            offset='100%'
            stopColor='#4ECDC4'
          />
        </linearGradient>
        <linearGradient
          id='signupGradient5'
          x1='0%'
          x2='100%'
          y1='0%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='#FFD700'
          />
          <stop
            offset='100%'
            stopColor='#FF9500'
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SignupIcon;
