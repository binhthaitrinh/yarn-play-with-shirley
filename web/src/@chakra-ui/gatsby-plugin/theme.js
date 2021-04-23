import { theme as defaultTheme } from '@chakra-ui/react'

const theme = {
  ...defaultTheme,
  textStyles: {
    h1: {
      fontSize: ['48px', '64px'],
      lineHeight: 1,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: ['24', '48'],
      lineHeight: 1,
      fontWeight: 'bold'
    }
  },
  styles: {
    global: {
      blockquote: {
        borderLeft: '5px solid var(--chakra-colors-blue-400)',
        fontStyle: 'italic',
        paddingLeft: '10px',
        my: '16px'
      },
      'ul, ol': {
        listStylePosition: 'inside'
      },
      a: {
        textDecoration: 'none'
      },
      'p > a > code': {
        color: 'var(--chakra-colors-blue-600)'
      },
      'p code': {
        backgroundColor: 'gray.100',
        padding: '2px 2px',
        borderRadius: '4px'
      }
    }
  }
}

export default theme
