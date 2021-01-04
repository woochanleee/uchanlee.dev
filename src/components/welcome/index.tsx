import React from 'react';
import { css, keyframes } from '@emotion/react';

const Welcome: React.FC = () => {
  return (
    <h1
      css={css`
        font-size: 48px;
      `}
      className="welcome"
    >
      Welcome{' '}
      <span
        css={css`
          display: inline-block;
          animation: ${flutter} 2s infinite linear;
        `}
      >
        👋
      </span>
    </h1>
  );
};

export default Welcome;

const flutter = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-15deg);
  }
  60% {
    transform: rotate(15deg);
  }
  65% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}`;
