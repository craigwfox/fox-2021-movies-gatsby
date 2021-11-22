import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import headerLogo from "../images/popcorn.svg"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1 style={{ margin: 0 }}>
      <Link to="/" className="site-logo">
        <img src={headerLogo} alt="A bucket of popcorn" className="site-logo" />
        {siteTitle}
      </Link>
    </h1>
    <nav className="nav-main">
      <Link to="/">Home</Link>
      <Link to="/support/about">About</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
