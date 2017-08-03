import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, Button, FixedMenu, Icon, Image
} from 'semantic-ui-react';

const TopNav = () => (
  <Menu inverted pointing secondary size='large'>
    <Menu.Item as='a' active>Home</Menu.Item>
    <Menu.Item as='a'>Work</Menu.Item>
    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>
    <Link to='/users' className="item">Users</Link>
    <Menu.Item position='right'>
      <Button as='a' inverted>Log in</Button>
      <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
    </Menu.Item>
  </Menu>
);

export default TopNav;
