import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import BlockText from '../components/block-text'
import { Box, Stack } from '@chakra-ui/layout'
import {
  PinterestIcon,
  PinterestShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import { format } from 'date-fns'

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
      <Box
        position='fixed'
        top={[undefined, '50%']}
        bottom={['8px', undefined]}
        transform={['translateX(50%)', 'translateY(-50%)']}
        zIndex='9999'
        right={['50%', '8px']}
      >
        <Stack alignItems='center' direction={['row', 'column']} color='white' spacing='8px'>
          <PinterestShareButton
            media={post.mainImage.asset.fluid.srcWebp}
            url={`https://www.yarnplaywithshirley.com/blog/${format(post.publishedAt, 'YYYY/MM')}/${
              post.slug.current
            }`}
            description={toPlainText(post._rawExcerpt) || 'No description'}
          >
            <PinterestIcon size={40} round />
          </PinterestShareButton>
          <EmailShareButton
            url={`https://www.yarnplaywithshirley.com/blog/${format(post.publishedAt, 'YYYY/MM')}/${
              post.slug.current
            }`}
            body={toPlainText(post._rawExcerpt) || 'No description'}
            subject={post.title || 'No title'}
          >
            <EmailIcon size={40} round />
          </EmailShareButton>
          <FacebookShareButton
            url={`https://www.yarnplaywithshirley.com/blog/${format(post.publishedAt, 'YYYY/MM')}/${
              post.slug.current
            }`}
            quote='OMG This is amazing!'
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <RedditShareButton
            url={`https://www.yarnplaywithshirley.com/blog/${format(post.publishedAt, 'YYYY/MM')}/${
              post.slug.current
            }`}
            title={post.title}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={40} round />
          </RedditShareButton>
          <TwitterShareButton
            url={`https://www.yarnplaywithshirley.com/blog/${format(post.publishedAt, 'YYYY/MM')}/${
              post.slug.current
            }`}
            title={post.title}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
        </Stack>
      </Box>
    </Layout>
  )
}

export default BlogPostTemplate
