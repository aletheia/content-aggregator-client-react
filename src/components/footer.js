import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './emoji'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            amplify
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-12 has-text-dark'>
            by Luca Bianchi (@bianchiluca) using{' '}
            <a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{' '}
            <a href={data.site.siteMetadata.bulma}>Bulma</a> and {' '}
            <a href={data.site.siteMetadata.amplify}>AWS Amplify</a> 
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
