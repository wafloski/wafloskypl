import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const LogoStyles = ({
  padding: 10,
  display: 'block'
})

const Header = () => (
  <header>
    <Link style={LogoStyles} to="/">
      <Logo/>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
