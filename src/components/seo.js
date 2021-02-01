import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ title }) {
  const { site, description } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = site.siteMetadata.image
  const metaUrl = site.siteMetadata.url

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaUrl} />

      <link rel="canonical" href={metaUrl} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
