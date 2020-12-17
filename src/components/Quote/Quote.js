import React from 'react'
import s from './QuoteStyles.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function Quote() {
  const { fragment, bkg } = useStaticQuery(graphql`
    {
      bkg: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fragment: googleSpreadsheetPage {
        ...PageFields
      }
    }
  `)
  const { fluid } = bkg.childImageSharp
  return (
    <section>
      <BackgroundImage fluid={fluid} className={s.container}>
        <div className={s.overlay}></div>
        <h1>{fragment.pageQuote}</h1>
      </BackgroundImage>
    </section>
  )
}
