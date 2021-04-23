import { Button } from '@chakra-ui/button'
import { Box, Grid, GridItem } from '@chakra-ui/layout'
import { Link } from 'gatsby'
import React from 'react'
import { getBlogUrl } from '../lib/helpers'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && (
        <Box as='h2' fontSize='32px' fontWeight='bold' color='orange.500' mb='32px'>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </Box>
      )}
      <Grid
        gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))'
        gridAutoRows='600px auto auto'
        gridGap='60px'
      >
        {props.nodes &&
          props.nodes.map(node => (
            <Grid
              as={Link}
              gridTemplateRows='1fr auto auto'
              padding='24px'
              gridGap='8px'
              // gridRow='span 3'
              to={getBlogUrl(node.publishedAt, node.slug.current)}
              border='1px solid var(--chakra-colors-gray-200)'
              key={node.id}
            >
              <BlogPostPreview {...node} />
            </Grid>
          ))}
      </Grid>
      <Box textAlign='center' mt='24px'>
        {props.browseMoreHref && (
          <Link to={props.browseMoreHref}>
            <Button colorScheme='orange' borderRadius='0px'>
              Browse more
            </Button>
          </Link>
        )}
      </Box>
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
