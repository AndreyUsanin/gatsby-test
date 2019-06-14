import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata


  return (
    <header>
      <h1>
        <Link className="branding" to="/">
          {title}
        </Link>
      </h1>
      <ul className="nav">
        <li>
          <Link
            to="/"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            activeClassName="nav__link--active"
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            activeClassName="nav__link--active"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            activeClassName="nav__link--active"
            to="/contact"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </header>
  )
}
