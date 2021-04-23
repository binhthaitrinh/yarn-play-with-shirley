import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import Img from 'gatsby-image'
import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'
import { Box, Grid } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

function BlogPostPreview(props) {
  return (
    <>
      {props.mainImage && props.mainImage.asset && <Img fluid={props.mainImage.asset.fluid} />}
      <Box as='h3' fontSize='24px' fontWeight='bold' color='gray.600'>
        {props.title}
      </Box>
      <Box>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
        <Button mt='8px' variant='outline' borderRadius='0px' colorScheme='orange'>
          Read more
        </Button>
      </Box>
    </>
  )
}

export default BlogPostPreview
