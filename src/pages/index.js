import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Image from "../components/image"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Image />
    <Link to="/404">Go to page 2</Link>
  </Layout>
)

export default IndexPage
