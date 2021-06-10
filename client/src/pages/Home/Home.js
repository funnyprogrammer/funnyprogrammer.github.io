import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';
import logo from './images/logo-next.png';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';

const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: '#bf0411',
    color: 'white',
    '&:hover': {
      backgroundColor: '#bf0411',
    },
    borderRadius: '10%',
  },
}))(Button);

const list = () => (
  <List>
    {['All mail', 'Trash', 'Spam'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>Teste</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);

export default function App() {
  const history = useHistory();
  const [open, setOpen] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(!open);
  };

  function handlePages(pagina) {
    history.push('/' + pagina);
  }

  return (
    <React.Fragment>
      <div className='menu'>
        <AppBar position='static'>
          <Toolbar className='toolbar'>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer(open)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} className='logo'></img>
            <span className='font title'>CENTRAL DE ACOMPANHAMENTO</span>
            <div className='loginButton'>
              <ColorButton
                variant='contained'
                color='inherit'
                disabled={disabled}
                onClick={() => handlePages('login')}
              >
                <span className='font'>Login</span>
              </ColorButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className='content'>
        <Drawer anchor='left' open={open} onClose={toggleDrawer(open)}>
          {list()}
        </Drawer>
        <Container className='container'>
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>Teste</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    </React.Fragment>
  );
}
