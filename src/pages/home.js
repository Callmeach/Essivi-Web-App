import Header from "../components/header"
import About from "../components/about"
import Services from "../components/services"
import Contact from "../components/contact"
import Footer from "../components/footer"
import React from "react"
import Main from "../components/main"

import "../styles/home.scss"
import "../styles/responsive.scss"

const Home = () => {
  return (
    <React.Fragment>
        <Header />
        <Main />
        <About />
        <Services />
        <Contact />
        <Footer />
        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" 
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
        crossorigin="anonymous" />
    </React.Fragment>
  )
}

export default Home