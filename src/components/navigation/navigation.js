import React from 'react'
import Button from '../button'
import Logo from '../logo'
import { Section, Navbar, Menu, MenuItem } from './elements'


const Navigation = () => {
  return (
    <Section>
      <Navbar>
        <Logo/>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>

        </Menu>
       <Button text="Connect Wallet" link="https://google.com" />
      </Navbar>
      </Section>
  )
}

export default Navigation