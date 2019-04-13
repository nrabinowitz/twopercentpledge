import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

const UL = styled.ul``;
const LI = styled.li`
  list-style: none;
  margin-bottom: 0.35rem;
`;

const SPREADSHEET_QUERY = graphql`
  query pledgeSigners {
    allGoogleSheetPledgeSignersRow(filter: {ok: {eq: "x"}}) {
      edges {
        node {
          name
          jobtitle
        }
      }
    }
  }
`;

export default function Signatories() {
  const data = useStaticQuery(SPREADSHEET_QUERY);
  const signers = data.allGoogleSheetPledgeSignersRow.edges;
  return (
    <UL>
      {signers.map(({node: {name, jobtitle}}) => (
        <LI>{`${name}, ${jobtitle}`}</LI>
      ))}
    </UL>
  );
}
