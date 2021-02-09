import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../layouts';
import Head from '../components/head';

import * as ScrollManager from '../utils/scroll';
import { css } from '@emotion/react';
import Bio from '../components/bio';
import PostNavigator from '../components/post-navigator';
import { Preview } from '../components/preview';
import { Utterances } from '../components/utterances';
import ThemeContext from '../context/ThemeContext';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        comment: {
          utterances: string;
        };
        siteUrl: string;
        author: string;
      };
    };
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
        tags: string[];
        category: string;
        thumbnail: {
          childImageSharp: {
            fixed: {
              src: string;
            };
          };
        };
      };
      html: string;
    };
  };
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

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const metaData = data.site.siteMetadata;
  const { comment, siteUrl } = metaData;
  const { utterances } = comment;
  const { frontmatter, html } = markdownRemark;
  const { thumbnail } = frontmatter;

  const thumbnailSrc = thumbnail
    ? `${siteUrl}${thumbnail.childImageSharp.fixed.src}`
    : undefined;

  useEffect(() => {
    ScrollManager.init();
    return () => ScrollManager.destroy();
  }, []);

  return (
    <Layout>
      <Head
        title={frontmatter.title}
        thumbnail={thumbnailSrc}
        keywords={[frontmatter.category].concat(frontmatter.tags)}
        description={frontmatter.description}
        author={metaData.author}
      />
      <Wrapper className="post-container">
        <h1>{frontmatter.title}</h1>
        <p className="post-date">{frontmatter.date}</p>
        <p>{frontmatter.description}</p>
        <ul>
          {frontmatter.tags &&
            frontmatter.tags.map((tag) => <li key={tag}>#{tag}</li>)}
        </ul>
      </Wrapper>
      <Content
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <hr
        css={css`
          margin: 64px;
          background: linear-gradient(
            90deg,
            #7f1459,
            #bb23cd 25%,
            #dc0d8e 46%,
            #cd0c86 69%,
            #fc71c9
          );
          border: none;
          height: 2px;
        `}
      />
      <Bio />
      <PostNavigator pageContext={pageContext} />
      <ThemeContext.Consumer>
        {({ dark }) => <Utterances repo={utterances} dark={dark} />}
      </ThemeContext.Consumer>
    </Layout>
  );
};

export default BlogPostTemplate;

const Wrapper = styled.div`
  margin-bottom: 48px;

  > h1 {
    margin-top: 16px;
  }

  > ul {
    > li {
      display: inline-block;
      font-size: 70%;

      &:not(:last-child) {
        margin-right: 4px;
      }
    }
  }

  > p:first-of-type {
    text-align: right;
    font-size: 75%;
    font-style: italic;
  }

  > p:nth-of-type(2) {
    font-size: 90%;
  }
`;

const Content = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  p,
  blockquote {
    word-break: keep-all;
    margin-bottom: 16px;
  }

  h1 {
    margin-top: 46px;
  }

  h2 {
    margin-top: 36px;
  }

  h3 {
    margin-top: 26px;
  }

  ul,
  ol {
    margin-left: 32px;
  }

  li {
    > code[class*='language-'] {
      padding: 0.11em 0.3em;
      margin: 0em 0.1em;
      border-radius: 0.3em;
      white-space: normal;
      background: #fffbfe;
      color: #da3a6a;
      border: 1.2px solid #da3a6a;
    }

    > ul {
      margin-top: 4px;
    }
    *:last-child {
      margin-bottom: 0;
    }

    > p {
      margin-bottom: 8px;
    }
  }

  li + li {
    margin-top: 4px;
  }

  a {
    color: #0687f0;
    text-decoration: none;
    box-shadow: none;
  }

  hr {
    margin: 8px 0;
  }

  blockquote {
    padding: 0 16px;
    border-left: 0.25em solid #dfe2e5;
  }

  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 0.8125rem;
    font-size: 1rem;
    line-height: 1.625rem;
    border-collapse: collapse;
    width: 100%;

    .left {
      text-align: left !important;
    }

    .center {
      text-align: center !important;
    }

    .right {
      text-align: right !important;
    }

    code[class*='language-'] {
      padding: 0.11em 0.3em;
      margin: 0em 0.1em;
      border-radius: 0.3em;
      white-space: normal;
      background: #fffbfe;
      color: #da3a6a;
      border: 1.2px solid #da3a6a;
    }
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 1.08333rem;
    padding-right: 1.08333rem;
    padding-top: 0.8125rem;
    padding-bottom: calc(0.8125rem - 1px);
  }

  td:first-of-type {
    text-align: right;
    font-weight: bolder;
  }

  /**
  * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
  * Based on https://github.com/chriskempson/tomorrow-theme
  * @author Rose Pritchard
  * @custoimized by Jbee
  */

  .gatsby-highlight-code-line {
    background-color: hsla(207, 95%, 15%, 1);
    display: block;
    margin-right: -1.2em;
    margin-left: -1.2em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.35em solid #0687f0;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #e0e0e0;
    background: none;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
      monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    font-size: 13px;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    -ms-overflow-style: none; // IE 10+
    overflow: -moz-scrollbars-none; // Firefox
  }

  pre[class*='language-']::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1.2em;
    margin: 1.5em 0;
    overflow: auto;
    border-radius: 0.6em;
  }

  code {
    font-weight: 500 !important;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #212121;
  }

  p {
    /* Inline code */
    :not(pre) > code[class*='language-'] {
      padding: 0.11em 0.3em;
      margin: 0em 0.1em;
      border-radius: 0.3em;
      white-space: normal;
      background: #fffbfe;
      color: #da3a6a;
      border: 1.2px solid #da3a6a;
    }
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #616161;
  }

  .token.punctuation {
    color: #e0e0e0;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #ff9100;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #ffff00;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #b388ff;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #00e676;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }

  @font-face {
    font-family: 'Fira Code';
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Light.eot');
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Light.eot')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff2/FiraCode-Light.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff/FiraCode-Light.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/ttf/FiraCode-Light.ttf')
        format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Code';
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Regular.eot')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff2/FiraCode-Regular.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff/FiraCode-Regular.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/ttf/FiraCode-Regular.ttf')
        format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Code';
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Medium.eot');
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Medium.eot')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff2/FiraCode-Medium.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff/FiraCode-Medium.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/ttf/FiraCode-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Fira Code';
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Bold.eot');
    src: url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/eot/FiraCode-Bold.eot')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff2/FiraCode-Bold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/woff/FiraCode-Bold.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/ttf/FiraCode-Bold.ttf')
        format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousId: String
    $hasPrevious: Boolean!
    $nextId: String
    $hasNext: Boolean!
  ) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        comment {
          utterances
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        category
        thumbnail {
          childImageSharp {
            fixed(width: 800) {
              src
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousId })
      @include(if: $hasPrevious) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextId }) @include(if: $hasNext) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
