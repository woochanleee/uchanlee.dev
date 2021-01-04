import React from 'react';
import styled from '@emotion/styled';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Responsive: React.FC<Props> = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Responsive;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 640px;
  box-sizing: border-box;
`;
