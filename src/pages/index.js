import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfne-M3nsCh0aNiYx_C5AOEXPlzD-64eK_pv7GZoZolFzRqqQ/viewform?embedded=true"
      width="640"
      height="786"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Loading...
    </iframe>
  </Layout>
);

export default IndexPage;
