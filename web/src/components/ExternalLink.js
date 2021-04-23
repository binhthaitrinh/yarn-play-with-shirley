import React from 'react'

export default function ExternalLink({ href, ...props }) {
  return <a rel="noopener noreferrer" target="_blank" href={href} {...props} />
}
