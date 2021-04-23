import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import { Box, HStack, Icon, ListItem, UnorderedList } from '@chakra-ui/react'
import { RiInstagramFill } from 'react-icons/ri'
import { SiTiktok } from 'react-icons/si'
import styles from './header.module.css'
import ExternalLink from './ExternalLink'

const NavItem = ({ to, name }) => (
  <ListItem _hover={{ color: 'orange.400' }}>
    <Link to={to}>{name}</Link>
  </ListItem>
)

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <HStack
    justifyContent='space-between'
    px='60px'
    py='16px'
    borderTop='1px solid var(--chakra-colors-gray-200)'
    borderBottom='1px solid var(--chakra-colors-gray-200)'
  >
    <HStack spacing='12px' alignItems='center'>
      <ExternalLink href='/'>
        <Icon as={RiInstagramFill} height='20px' width='20px' color='gray.400' />
      </ExternalLink>
      <ExternalLink href='/'>
        <Icon as={SiTiktok} height='20px' width='20px' color='gray.400' />
      </ExternalLink>
    </HStack>
    <HStack
      as={UnorderedList}
      spacing='16px'
      listStyleType='none'
      justifyContent='center'
      alignItems='center'
      fontWeight='bold'
      color='gray.600'
    >
      <NavItem to='/' name='Home' />
      <NavItem to='/' name='About' />
      <NavItem to='/' name='Blog' />
      <NavItem to='/' name='Contact' />
    </HStack>
    <p>Hello, friend</p>
  </HStack>
  // <div className={styles.root}>
  //   <div className={styles.wrapper}>
  //     <h1 className={styles.branding}>
  //       <Link to='/'>{siteTitle}</Link>
  //     </h1>

  //     <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
  //       <Icon symbol='hamburger' />
  //     </button>

  //     <nav className={cn(styles.nav, showNav && styles.showNav)}>
  //       <ul>
  //         <li>
  //           <Link to='/about/'>About</Link>
  //         </li>
  //         <li>
  //           <Link to='/projects/'>Projects</Link>
  //         </li>
  //         <li>
  //           <Link to='/blog/'>Blog</Link>
  //         </li>
  //         <li>
  //           <Link to='/contact/'>Contact</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </div>
  // </div>
)

export default Header
