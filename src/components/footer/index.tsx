import styled from '@emotion/styled';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Wrapper className="footer">
      ©
      <a href="https://github.com/woochanleee" target="_blank">
        uchanlee
      </a>
      , Inspired by{' '}
      <a href="https://jbee.io" target="_blank">
        Jbee
      </a>{' '}
      and{' '}
      <a href="https://junukim.dev" target="_blank">
        junukim
      </a>
      <RSS href="/feed.xml">RSS</RSS>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  text-align: center;
  font-size: 12px;
  margin-top: 52px;
`;

const RSS = styled.a`
  float: right;
  text-decoration: underline;
`;
