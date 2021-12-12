import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
`;

const Svg = styled.svg`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  animation: ${spin} 500ms linear infinite;
`;

const SparkleInstanceWrapper = styled.div`
  position: absolute;
  pointer-events: none;
`;

const Wrapper = styled.span`
  position: relative;
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = useRef(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
  const cancel = useCallback(function() {
    window.clearTimeout(timeoutId.current);
  }, []);
  return cancel;
};

const DEFAULT_COLOR = '#def3f6';

const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    opacity: random(0, 1),
    size: random(10, 20),
    style: {
      top: random(0, 80),
      left: random(0, 80),
      zIndex: 2
    }
  };
};

const SparkleInstance = ({ color, size, style }) => {
  return (
    <SparkleInstanceWrapper>
      <Svg width={size} height={size} viewBox="0 0 160 160" fill="none" style={style}>
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </Svg>
    </SparkleInstanceWrapper>
  );
};

function Sparkles({ children }) {
  const [sparkles, setSparkles] = useState([]);
  useRandomInterval(
    () => {
      const now = Date.now();
      const sparkle = generateSparkle();
      const nextSparkles = sparkles.filter(spark => {
        const delta = now - spark.createdAt;
        return delta < 1000;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    50,
    500
  );

  const sparkle = generateSparkle();

  return (
    <Wrapper>
      <SparkleInstance color={sparkle.color} size={sparkle.size} style={sparkle.style} />
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
}

export default Sparkles;
