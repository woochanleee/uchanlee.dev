import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Preview } from '../preview';

interface Props {
  pageContext: {
    hasNext: boolean;
    hasPrevious: boolean;
    id: string;
    nextId: string | null;
    previousId: string | null;
    slug: string;
    previous: Preview;
    next: Preview;
  };
}

const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <Wrapper className="navigator">
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </Wrapper>
  );
};

export default PostNavigator;

const Wrapper = styled.ul`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
  }

  a {
    padding: 7px 16px 8px 16px;
    border-radius: 6px;
    font-size: 12px;
    opacity: 0.8;

    background-color: #fceff7;
    color: #cc007a;
  }
`;
