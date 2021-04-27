import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockText from '../components/block-text'
import { Box, VStack } from '@chakra-ui/layout'
import { PinterestIcon, PinterestShareButton } from 'react-share'

function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map(block => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map(child => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  )
}

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      _rawExcerpt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          fluid(maxWidth: 600) {
            srcWebp
            ...GatsbySanityImageFluid
          }
        }
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      authors {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt) || 'No description'}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
      <Box position='fixed' top='50%' transform='translateY(-50%)'>
        <VStack alignItems='center' spacing={0} color='white'>
          <PinterestShareButton
            // href='https://www.pinterest.com/yarnplaywithShirley/'
            style={{ backgroundColor: 'E71B22', padding: '10px' }}
            media={post.mainImage.asset.fluid.srcWebp}
            url={post.mainImage.asset.fluid.srcWebp}
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </VStack>
      </Box>
    </Layout>
  )
}

export default BlogPostTemplate
