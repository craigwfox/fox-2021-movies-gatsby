import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import headerLogo from "../images/popcorn.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "grid",
      placeContent: "center",
      padding: "1.5rem",
      marginBottom: `1.45rem`,
      background: `hsl(var(--clr-bg))`,
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `var(--clr-t-title)`,
          textDecoration: `none`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <img
          src={headerLogo}
          alt="A bucket of popcorn"
          style={{
            width: `3rem`,
            margin: `0 1.5rem 0 0`,
            flex: `0 0 auto`,
          }}
        />
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
