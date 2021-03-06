import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'
import { Box, Button, HStack, Icon, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import { RiInstagramFill } from 'react-icons/ri'
import { SiTiktok, SiPinterest, SiEtsy } from 'react-icons/si'
import { IoIosMail } from 'react-icons/io'
import styles from './header.module.css'
import ExternalLink from './ExternalLink'

const NavItem = ({ to, name, activeStyle, ...props }) => (
  <ListItem _hover={{ color: 'orange.400' }} {...props}>
    <Link to={to} activeStyle={activeStyle} style={{ color: 'var(--chakra-colors-gray-500)' }}>
      {name}
    </Link>
  </ListItem>
)

const Button2 = props => <Button variant='outline' px='12px' {...props} />

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, ...props }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <Box
      display='flex'
      justifyContent={['center', 'space-between']}
      alignItems='center'
      px='60px'
      py='16px'
      borderTop='1px solid var(--chakra-colors-gray-200)'
      borderBottom='1px solid var(--chakra-colors-gray-200)'
      position='sticky'
      top={0}
      bg='white'
      zIndex='999'
      flexDirection={['column', 'row']}
    >
      <HStack spacing='12px' alignItems='center' justifyContent='center'>
        <ExternalLink href='https://www.instagram.com/shirleyfreepatterns/'>
          <Icon as={RiInstagramFill} height='23px' width='23px' color='gray.400' />
        </ExternalLink>

        <ExternalLink href='https://www.pinterest.com/yarnplaywithShirley/'>
          <Icon as={SiPinterest} height='22px' width='22px' color='gray.400' />
        </ExternalLink>
        <ExternalLink href='mailto:shirleyyarnplay@gmail.com'>
          <Icon as={IoIosMail} height='25px' width='25px' color='gray.400' />
        </ExternalLink>
        <ExternalLink href='https://www.tiktok.com/@shirleyyarnplay?lang=en/'>
          <Icon as={SiTiktok} height='22px' width='22px' color='gray.400' />
        </ExternalLink>

        <ExternalLink href='https://www.etsy.com/people/xhhgtwgej6bqexpw?ref=hdr_user_menu-profile&expanded_profile=1/'>
          <Icon as={SiEtsy} height='22px' width='22px' color='gray.400' />
        </ExternalLink>
      </HStack>
      <VStack
        as={Button2}
        spacing='4px'
        display={['flex', 'none']}
        onClick={() => setShowMenu(show => !show)}
        marginInlineStart='0px !important'
        mt='8px !important'
      >
        <Box
          width='24px'
          height='3px'
          transform={!showMenu ? '' : 'rotate(-45deg) translate(-4px, 4px)'}
          bg='gray.500'
          transition='all 0.2s ease-out'
        />
        <Box width='24px' height='3px' bg='gray.500' visibility={showMenu ? 'hidden' : 'visible'} />
        <Box
          width='24px'
          height='3px'
          bg='gray.500'
          transform={showMenu ? 'rotate(45deg) translate(-5px, -6px)' : ''}
          transition='all 0.2s ease-out'
        />
      </VStack>
      <Box
        as={UnorderedList}
        spacing={['8px', '0px']}
        listStyleType='none'
        justifyContent='center'
        alignItems='center'
        fontWeight='bold'
        color='gray.600'
        display={[showMenu ? 'flex' : 'none', 'flex']}
        flexDirection={['column', 'row']}
        marginInlineStart='0px !important'
        mt={['8px', 0]}
      >
        <NavItem
          to='/'
          name='Home'
          mr={[0, '16px']}
          activeStyle={{ color: 'var(--chakra-colors-orange-500)' }}
          color='gray.400'
        />
        <NavItem
          to='/about'
          name='About'
          mr={[0, '16px']}
          activeStyle={{ color: 'var(--chakra-colors-orange-500)' }}
        />
        <NavItem
          to='/blog'
          name='Blog'
          mr={[0, '16px']}
          activeStyle={{ color: 'var(--chakra-colors-orange-500)' }}
        />
        <NavItem
          to='/contact'
          name='Contact'
          activeStyle={{ color: 'var(--chakra-colors-orange-500)' }}
        />
      </Box>
      <Box as='p' display={['none', 'block']}>
        Hello, friend
      </Box>
    </Box>
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
}

export default Header
