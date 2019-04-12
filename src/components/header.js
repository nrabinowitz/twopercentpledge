import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle}) => (
  <header
    style={{
      marginTop: `2.2rem`,
      marginBottom: `1.45rem`,
      textAlign: 'center'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'black',
            fontFamily: 'Trebuchet MS, Helvetica, Sans-Serif',
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
