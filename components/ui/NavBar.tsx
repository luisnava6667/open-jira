import { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Link } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import NextLink from 'next/link'
import { UIContext } from '@/context/ui'
export const NavBar = () => {
  const { openSidemenu } = useContext(UIContext)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSidemenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink
          href='/'
          passHref
          style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant='h6'>OpenJira</Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
