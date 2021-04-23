import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

export default function LogoContainer() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `)
  console.log(data)
  return (
    <HStack justifyContent="center" py="30px">
      <Link to="/">
        <Box width="300px">
          <Img fluid={data.file.childImageSharp.fluid} alt={data.site.title} />
        </Box>
      </Link>
    </HStack>
  )
}
