/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { CartContextProvider } from './src/context/CartContext'
import { StateContextProvider } from './src/context/StateContext'

export const wrapRootElement = ({ element }) => (
  <CartContextProvider>
    <StateContextProvider>{element}</StateContextProvider>
  </CartContextProvider>
)
