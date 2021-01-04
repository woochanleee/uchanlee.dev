import React from 'react';
import { css } from '@emotion/react';

import Layout from '../layouts';
import Head from '../components/head';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="404: Not Found" />
        <h1
          css={css`
            margin-top: 70px;
            margin-bottom: 24px;
          `}
        >
          Not Found
        </h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
