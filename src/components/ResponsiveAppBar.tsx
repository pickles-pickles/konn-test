import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import { userSelector } from '../state-management/slices/appSlice'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

const pages = [
  { title: 'Home', url: '' },
  { title: 'Repos', url: 'repos' },
  { title: 'Followers', url: 'followers' }
]

const StyledLink = styled(Link)(() => ({
  fontWeight: 'bold',
  fontSize: '1.25rem',
  color: '#f5f5f6',
  textDecoration: 'none',
  marginLeft: 10,
  marginRight: 10,
  '&:hover': {
    textDecoration: 'underline'
  }
}))

function ResponsiveAppBar () {
  const user = useSelector(userSelector)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static' sx={{ background: '#05EE53' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Link to='/'>
              <img width={32} height={32} src='favicon-32x32.png' alt='logo' />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    {' '}
                    <Link to={`/${page.url}`}>{page.title}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Link to='/'>
              <img width={35} height={35} src='favicon-32x32.png' alt='logo' />
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {pages.map(page => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <StyledLink to={`/${page.url}`}>{page.title}</StyledLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user.login || 'no avatar'}>
              <Avatar
                alt='user avatar'
                src={`${user.login ? user.avatar_url : '#'}`}
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
