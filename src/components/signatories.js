import React from 'react';
import styled from 'styled-components';
import signers from '../data/signers.json';

const UL = styled.ul``;
const LI = styled.li`
  list-style: none;
  margin-bottom: 0.35rem;
`;

export default function Signatories({Header}) {
  const lengthAnnotation = signers.length
    ? <span style={{fontSize: 'smaller'}}>{` (${signers.length})`}</span>
    : null;
  return (
    <React.Fragment>
      <Header>{'Signatories'}{lengthAnnotation}</Header>
      <UL>
        {signers.map(({name, jobtitle}, index) => (
          <LI key={`${name}_${index}`}>
            {[name, jobtitle]
              .map(s => s.trim())
              .filter(Boolean)
              .join(', ')}
          </LI>
        ))}
      </UL>
    </React.Fragment>
  );
}
