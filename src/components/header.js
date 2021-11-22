import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import headerLogo from "../images/popcorn.svg"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="site-header">
    <h1>
      <Link to="/" className="site-logo">
        <img src={headerLogo} alt="A bucket of popcorn" className="site-logo" />
        {siteTitle}
      </Link>
    </h1>
    <h2>{siteDescription}</h2>
    <nav className="nav-main">
      <Link to="/">Home</Link>
      <Link to="/support/about">About</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
