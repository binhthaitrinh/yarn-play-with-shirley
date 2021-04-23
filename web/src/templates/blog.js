import React from 'react'
import { graphql, Link } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import { responsiveTitle1 } from '../components/typography.module.css'
import { Box, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

export const query = graphql`
  query BlogPageQuery($skip: Int!, $limit: Int!) {
    posts: allSanityPost(limit: $limit, sort: { fields: [publishedAt], order: DESC }, skip: $skip) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = props => {
  const { data, errors, pageContext } = props
  console.log(props)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        <Box as='h1' fontSize='32px' fontWeight='bold' color='orange.500'>
          Blog
        </Box>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
        <HStack justifyContent='center'>
          <Link to={`/blog/${pageContext.currentPage === 2 ? '' : pageContext.currentPage - 1}`}>
            <Button colorScheme='orange' variant='outline' disabled={pageContext.currentPage === 1}>
              Prev
            </Button>
          </Link>
          <Link to={`/blog/${pageContext.currentPage + 1}`}>
            <Button
              colorScheme='orange'
              variant='outline'
              disabled={pageContext.currentPage === pageContext.numPages}
            >
              Next
            </Button>
          </Link>
        </HStack>
      </Container>
    </Layout>
  )
}

export default BlogPage
