import React from 'react';
import styled from 'styled-components';
import signers from '../data/signers.json';

const UL = styled.ul``;
const LI = styled.li`
  list-style: none;
  margin-bottom: 0.35rem;
`;

export default function Signatories() {
  return (
    <UL>
      {signers.map(({name, jobtitle}, index) => (
        <LI key={`${name}_${index}`}>
          {[name, jobtitle].filter(Boolean).join(', ')}
        </LI>
      ))}
    </UL>
  );
}
