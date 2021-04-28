import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Responsive from '../responsive';

const Header: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Me>
            <Link to="/">🚆 uchanlee.dev</Link>
          </Me>
          <h2>
            <Account onClick={(_) => alert('제작중 입니다.')}>RÉSUMÉ</Account>
            <small> AND </small>
            <Account onClick={(_) => alert('제작중 입니다.')}>
              PORTFOLIO
            </Account>
          </h2>
        </Content>
      </Wrapper>
      <HorizontalBar />
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  background: linear-gradient(
    90deg,
    #7f1459,
    #bb23cd 25%,
    #dc0d8e 46%,
    #cd0c86 69%,
    #fc71c9
  );
`;

const Content = styled(Responsive)`
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 0;

  > h2 {
    width: 52%;
    max-width: 180px;
    text-align: right;
    font-size: 15px;

    > small {
      color: #ffffff;
      opacity: 0.7;
    }
  }
`;

const Me = styled.p`
  width: 46%;
  max-width: 130px;
  margin: 0;

  > a {
    width: 100%;
    display: inline-block;
    color: #fff;
    opacity: 0.7;
    font-family: Catamaran;
    font-weight: 800;
  }
`;

const Account = styled.a`
  max-width: 100%;
  display: inline-block;
  font-size: 15px;
  font-family: Catamaran;
  font-weight: 800;
  color: #ffffff;
  text-decoration: underline;
`;

const HorizontalBar = styled.div`
  position: sticky;
  top: 0;
  height: 8px;
  background: linear-gradient(
    90deg,
    #7f1459,
    #bb23cd 25%,
    #dc0d8e 46%,
    #cd0c86 69%,
    #fc71c9
  );
  z-index: 2;
`;
