import React, { useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts';
import Bio from '../components/bio';
import Welcome from '../components/welcome';
import Category from '../components/category';
import PreviewItem, { PreviewList, Preview } from '../components/preview';
import Head from '../components/head';
import useCategory from '../hooks/useCategory';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        configs: {
          countOfInitialPost: number;
        };
        thumbnail: string;
        keywords: string[];
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: Preview;
      }>;
    };
  };
}

const IndexPage: React.FC<Props> = ({
  data: {
    site: { siteMetadata },
    allMarkdownRemark: { edges },
  },
}) => {
  const [category, changeCategory] = useCategory();
  const [page, setPage] = useState(1);

  const posts = useMemo(() => {
    const posts = edges;
    return posts
      .filter(
        ({ node: { frontmatter } }) =>
          category === 'All' || frontmatter.category === category
      )
      .slice(0, page * siteMetadata.configs.countOfInitialPost);
  }, [category, page]);

  const categories = useMemo(() => {
    const categories = edges.map(({ node }) => node.frontmatter.category);
    return Array.from(new Set(categories)).map((category) => ({
      title: category,
      count: categories.filter((c) => c === category).length,
    }));
  }, [edges]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Head
        title="Home"
        keywords={siteMetadata.keywords}
        thumbnail={siteMetadata.thumbnail}
      />
      <Welcome />
      <Bio />
      <Category
        category={category}
        changeCategory={changeCategory}
        categories={categories}
      />
      <PreviewList>
        {posts.map(({ node }) => (
          <PreviewItem key={node.id} post={node} />
        ))}
      </PreviewList>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
        keywords
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            category
            tags
          }
        }
      }
    }
  }
`;
