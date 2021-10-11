import React from 'react';
import styled from '@emotion/styled';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';

interface BioMeta {
  site: {
    siteMetadata: {
      author: string;
      social: {
        instagram: string;
        github: string;
        facebook: string;
        email: string;
        twitter: string;
      };
    };
  };
}

const Bio: React.FC = () => {
  const data = useStaticQuery<BioMeta>(bioQuery);
  const { author, social } = data.site.siteMetadata;
  return (
    <Wrapper>
      <Profile>
        <img src="/images/profile.jpg" alt="프로필 사진" />
      </Profile>
      <Content>
        <AuthorPrefix>Written by</AuthorPrefix>
        <Author className="author-name">{author}</Author>
        <Introduction className="introduction">
          "늦게 시작하는 것을 두려워 하기보단{' '}
          <strong>하다가 중단 하는 것</strong>을 두려워 하자."
          <br />
          <strong>🚂 급행열차</strong>가 되고싶은 웹 개발자 이우찬 입니다. 🤗
        </Introduction>
        <p>
          <Social href={social.github} target="_blank" className="social-link">
            GitHub
          </Social>
          <Social
            href={social.facebook}
            target="_blank"
            className="social-link"
          >
            Facebook
          </Social>
          <Social
            href={social.instagram}
            target="_blank"
            className="social-link"
          >
            Instagram
          </Social>
           <Social
            href={social.twitter}
            target="_blank"
            className="social-link"
          >
            Twitter
          </Social>
          <Social
            href={`mailto:${social.email}`}
            target="_blank"
            className="social-link"
          >
            Contact
          </Social>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Bio;

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          github
          facebook
          instagram
          email
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  margin-right: 12px;

  &::before {
    position: absolute;
    z-index: 999;
    background: url('/images/crown.png');
    display: inline-block;
    width: 39px;
    background-size: contain;
    height: 39px;
    content: '';
    transform: rotate(-37deg);
    top: -21px;
    left: -13px;
  }

  > img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    object-position: center center;
    border-radius: 100%;
  }
`;

const Content = styled.section`
  width: calc(100% - 84px);

  > p {
    width: 100%;
  }
`;

const AuthorPrefix = styled.span`
  font-size: 90%;
  margin-right: 4px;
`;

const Author = styled.span`
  font-size: 95%;
  font-family: 'Catamaran';
  font-weight: bolder;
  padding: 3px 6px 0;
  border-radius: 8px;
`;

const Introduction = styled.p`
  margin: 6px 0 4px;
  font-size: 80%;
`;

const Social = styled.a`
  margin-right: 8px;
  font-size: 80%;
`;
