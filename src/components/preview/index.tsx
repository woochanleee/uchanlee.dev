import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { keyframes } from '@emotion/react';

export interface Preview {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    description: string;
    body: string;
    tags: string[];
    category: string;
  };
}

interface Props {
  post: Preview;
}

const PreviewItem: React.FC<Props> = ({ post }) => {
  const { fields, frontmatter } = post;
  const { slug } = fields;
  const { title, date, description, body, tags } = frontmatter;

  return (
    <Wrapper className="preview">
      <Link to={slug}>
        <div>
          <h3>{title}</h3>
          <small>{date}</small>
        </div>
        <p>{description}</p>
        <TagBox>
          {tags
            .filter((tag, i) => tags.indexOf(tag, i + 1) === -1)
            .map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
        </TagBox>
      </Link>
    </Wrapper>
  );
};

export default PreviewItem;

export const PreviewList = styled.ul`
  margin: 0 -19px 0;
  min-height: 80vh;
`;

const fadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
} 
`;

const Wrapper = styled.li`
  animation: ${fadeIn} 3s;
  list-style: none;
  transition: background-color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  border-radius: 8px;
  padding: 24px 26px;
  margin-top: 12px;

  > a {
    > div {
      > h3 {
        display: inline-block;
        margin-right: 8px;
      }
    }

    > p {
      font-size: 90%;
    }
  }

  h3 {
    margin-bottom: 13px;
  }

  small {
    font-style: italic;
  }
`;

const TagBox = styled.ul`
  > li {
    display: inline-block;
    font-size: 65%;

    &:not(:last-child) {
      margin-right: 4px;
    }
  }
`;
