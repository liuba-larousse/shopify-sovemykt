const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sovemykt`,
    description: `Best sleep mask in the world`,
    url: `https://sovemykt.me/`,
    author: `@liuba.larousse`,
    image: `https://sovemykt.me/static/289f9b66a5714b0c270a4252e86bd8ab/fa8c4/prod1.jpg`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `@bumped-inc/gatsby-plugin-optional-chaining`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },

    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: process.env.GATSBY_SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        apiVersion: '2020-07',
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134421805-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        spreadsheetId: '1_msuzOCuoxcv211ivo1JtTtomT0c-Bk64Pp3QRqXQ6g',
        // apiKey: process.env.GOOGLE_API_KEY,
        credentials: {
          type: 'service_account',
          project_id: 'sovemykt',
          private_key_id: '64c6d0edb5e07cec107c478d18203acec21b0ebc',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCroloZ6iokSriu\nGu7cbq1RCwtUJGTi/2W/WYqyzAw9ub7tDntRt2EH47um64OwTzXVlbIgYy/6UaSQ\nF7cObcvXRaFTXYiiCi3Q6pL4CwEac/wRN0xYSUiYyqgpykYSe4k9esV3I+v76pRn\nId1np9n1jAh/pkva8PVHzAfstj5kv+PDJHqXAWTPDiu0EDqPjjKfMMvn+mu1B4y+\nfJ0SNc4r3X00QV6ObznNwWXRy1kWiyknbfahZ7j0ZtdnZmbCjDdns3gyjj+d57KI\ng8/jsNcV7h6RswYwB0//Wnx8tdnqES32w4Rq9JJ61szb+wbpxMqTNiAE2g6TlJ4j\noeNeFiAxAgMBAAECgf8YU8YoeHYS9/IQu3do67TJx+uKAZ6URQy5NxxxqQylafel\n60L9LZMliyHpYlPaYIRleIk0oEgsoIppmPLrqu2CulvaUIwx2T+AplFTIDwsXx+k\ndZ/KUXRB6sDGmVLDAr+VrhpPEezzNbpldh403CgIpdCOkHFUlxvj7L5XYTRSN8k2\njCYZlPFX2x7dFh6/bkOzwqvygDAEGxuju1hK/e4HRyzjG2tuXCrQpZZw3qS89elL\nc7r2IaFu/4pUU+adEDytc9ZV/NRd8+CgAoti2bzf+DkRn4oeWEcWqK0YxBdSiuPV\nb0jpnHQxW75b0GWMVg4UY//a+cVGEZNb+C6dOQkCgYEA8NGWk9ZBfiXijFtPxSBl\n+lipbROCnqEwfVm1/kAkyqkGBdSQHsLFX01C48oq9kW6TTjobHnCX+iK8fmuOctA\nf7t31wqOElpKFA2yI9vQUm1n85bwQDP5RJno93lBHkH36T1xhcEII4PSnqJtN5xM\niF6gFZaVcS3dmcQ/WnVZQ68CgYEAtnQ9vebu+FLn2MIgUlIS99d8q3mNBedwY9XH\nvOHU/E/9VfThenyWg5j8rL/dRVSd6kGgk1T32ReMdUJNu32YXMacyPLPo7UGuqf1\nxHLyyyGEeFCCAkNsAUipmuUfwRSCmsMfxcnm0x6j35diLoLBm/8MaXN7qb+Kuctp\nzVvNch8CgYEApxPykZ08ESZ9uH19qbmhpwAuhCPeIuqYds9wCfc8z3JXYGIqn3zo\nbQdwmhPgnL6h1APglaogZmQzSlC9RRG0LSrGqWaETU1hSep6ppBSR23qikE1bIXi\nsmrKDDCPMkv4kVT01ySm3eUOkssEVWnWW2KzVGcGReDZd16Fyd/Sz7cCgYB8ghi8\nJgK/3TuwNNF/u9iL3zaJgfpVpBmTV4jlgaspv6Be7yyLvMet6FHNxWTHcjYNbVma\nESrNr/8+6c9H+i5maXcGvoQp8Fg2OnZB6Dt9mVLgE/iUeNQUkDSFqoQf69IwsKVX\nATAOtGMaKyFqIfrjbIpYz+D89uRBY+nApTwu+wKBgQCSsmt5cixuMXfPC1n52pAB\n316EZAzxmfWV+bXCw6hob8NVT5NKM5zRgBlfQyIRH3i6mVAzFMBiFYGD3CF53/Eq\neLaGdvAUuPEqUB+8qBy32Fbx+gnLS+z/0hxVwZVuon/Fj92Ue0uv4ZvL1Tu1a7X/\nwImbW1OAR81d1c3QkmQwtA==\n-----END PRIVATE KEY-----\n',
          client_email: 'content@sovemykt.iam.gserviceaccount.com',
          client_id: '116759792254885430704',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url:
            'https://www.googleapis.com/robot/v1/metadata/x509/content%40sovemykt.iam.gserviceaccount.com',
        },
        filterNode: () => true,
        mapNode: node => node,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
  ],
}
