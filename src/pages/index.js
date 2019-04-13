import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const Col = styled.article`
  font-size: 1.1rem;
  max-width: 540px;
  margin: 0 auto 1rem auto;
`;
const ColHeader = styled.h2`
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  font-family: Trebuchet MS, Helvetica, Sans-Serif;
`;
const ColSubheader = styled.h3`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const P = styled.p`
  margin-bottom: 2rem;
`;
const UL = styled.ul``;
const LI = styled.li`
  list-style: none;
  margin-bottom: 0.35rem;
`;
const A = styled.a``;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BodyContainer>
      <Col>
        <P>
          {
            "The Two Percent Pledge is a bottom-up campaign for current and former Uber employees centered on a public pledge to donate at least 2% of their post-IPO equity to charity. While many Uber employees may be planning to donate some of their earnings from Uber's initial public offering to good causes, others may not have considered it, may not know where to start, or may need a nudge to follow through. Our goal is to take advantage of this unique moment to promote charitable giving as an important part of Uber’s culture."
          }
        </P>
        <P>
          {
            "This initiative is led by employees, and is not officially sponsored by Uber. We're not recommending any specific charities or collecting any donations, though we may offer a short guide with resources for responsible giving."
          }
        </P>
      </Col>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfne-M3nsCh0aNiYx_C5AOEXPlzD-64eK_pv7GZoZolFzRqqQ/viewform?embedded=true"
        width="640"
        height="915"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{
          marginBottom: 0
        }}
      >
        Loading...
      </iframe>

      <Col>
        <ColHeader>FAQs</ColHeader>

        <ColSubheader>
          {'Why two percent? That seems too small/too large!'}
        </ColSubheader>
        <P>
          {
            'Two percent is big enough to have a significant impact, but small enough that it doesn’t feel like an untenable ask for people who might be on the fence about donating. The pledge specifies at least 2%, and if you’d like to donate more, that’s wonderful - but our biggest goal is to get people who might not have donated at all to make charitable giving an important and rewarding part of the IPO process.'
          }
        </P>

        <ColSubheader>{'Two percent of what, exactly?'}</ColSubheader>
        <P>
          {
            'We’re asking signers of the pledge to donate 2% of their vested shares after a potential IPO, or 2% of the value of those shares. The pledge is a personal commitment, not a legal document, so the exact interpretation here is up to the signer - this may be a one-time donation, or an ongoing commitment as equity continues to vest. There may be tax advantages to donating actual shares, resulting in higher effective donations, but if it makes more sense to you to sell and donate 2% of the proceeds, that’s great too.'
          }
        </P>

        <ColSubheader>
          {'Is this just a branding exercise to make Uber look good?'}
        </ColSubheader>
        <P>
          {
            'No, our straightforward goal is to promote charitable donation among current and former Uber employees. However, if positive branding for Uber helps encourage more people to sign the pledge, that would be great as well.'
          }
        </P>

        <ColSubheader>{'What charities are you recommending?'}</ColSubheader>
        <P>
          {
            'We are not recommending any specific charities or organizations. Charitable donation is a personal choice, and we encourage people signing the pledge to make donations to organizations that matter to them personally. We intend to offer more resources on responsible giving (for example, how to find great non-profit organizations and evaluate their effectiveness), but the choice of recipient is up to the donor.'
          }
        </P>

        <ColSubheader>
          {
            'Uber isn’t the only tech company with a potential IPO this year - should we be extending this to employees from Lyft, AirBnB, etc?'
          }
        </ColSubheader>
        <P>
          {
            'While we’d love to see similar campaigns set up at other companies, this campaign is focused on Uber employees. A big part of the campaign is to establish a culture of giving at Uber, and extending to other companies might dilute this goal.'
          }
        </P>

        <ColHeader>Get Involved!</ColHeader>

        <P>
          {
            "We're still getting this initiative off the ground! If you want to get involved in organizing the campaign and collecting useful resources, please email us at "
          }
          <A href="mailto:info@twopercentpledge.org">
            {'info@twopercentpledge.org.'}
          </A>
        </P>
      </Col>

      <Col>
        <ColHeader>Signatories</ColHeader>
        <UL>
          <LI>Nicholas Rabinowitz, Sr. Software Engineer II</LI>
          <LI>Eric Socolofsky, Sr. Software Engineer</LI>
          <LI>Jon Sadka, Software Engineer II</LI>
          <LI>Todd Levin, Software Engineer II</LI>
          <LI>Andreas Saebjoernsen, Sr. Software Engineer</LI>
          <LI>Isaac Brodsky, Sr. Software Engineer II</LI>
          <LI>Jenny Heath, Software Engineer II (former)</LI>
        </UL>
      </Col>
    </BodyContainer>
  </Layout>
);

export default IndexPage;
