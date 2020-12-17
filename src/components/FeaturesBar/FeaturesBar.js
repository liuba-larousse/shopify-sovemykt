import React from 'react'
import s from './FeaturesBarStyles.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function FeaturesBar({ num }) {
  const { barFeatures, bkg } = useStaticQuery(graphql`
    {
      bkg: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barFeatures: allGoogleSpreadsheetFeatures {
        features: nodes {
          id
          title
          googleSpreadsheetId
          png
        }
      }
    }
  `)
  const { features } = barFeatures
  const { fluid } = bkg.childImageSharp
  return (
    <section>
      <BackgroundImage fluid={fluid} className={s.container}>
        <div className={s.overlay}></div>
        {(num === 1 ? features.slice(0, 3) : features.slice(3, 6)).map(
          feature => (
            <div className={s.box} key={feature.id}>
              <img
                className={s.icon}
                src={feature.png}
                alt={feature.title}
                width="70px"
                height="70px"
              />
              <h3>{feature.title}</h3>
            </div>
          )
        )}
      </BackgroundImage>
    </section>
  )
}
