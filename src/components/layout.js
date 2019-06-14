import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/main.scss"

export default function Layout(props) {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
