import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodayIcon from '@material-ui/icons/Today';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import RoomService from '@material-ui/icons/Room';
import ChatIcon from '@material-ui/icons/Chat';
import './style.css';
import logo from './images/logo-next.png';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Divider,
  Drawer,
  List,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core';

import Item from '../../features/List/ListItem/Item';

import theme from '../../palette/themes.js';

const version = process.env.REACT_APP_VERSION;

const useStyles = makeStyles(() => ({
  paper: {
    background: theme.palette.primary.main,
    color: 'white',
  },
  card: {
    background: theme.palette.primary.main,
    color: 'white',
    textAlign: 'center',
  },
  divider: {
    background: 'white',
  },
}));

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

export default function App() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const styles = useStyles();

  const list = () => (
    <List>
      <Card className='cardVersion' classes={{ root: styles.card }}>
        <Typography>Versão: {version}</Typography>
      </Card>
      <Divider classes={{ root: styles.divider }} />
      <Item desc='Meus agendamentos' icon={TodayIcon} />
      <Divider classes={{ root: styles.divider }} />
      <Item desc='Serviços disponíveis' icon={RoomService} />
      <Divider classes={{ root: styles.divider }} />
      <Item desc='Atendimento Online' icon={ChatIcon} />
      <Divider classes={{ root: styles.divider }} />
    </List>
  );

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
                onClick={() => handlePages('login')}
              >
                <span className='font'>Login</span>
              </ColorButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className='content'>
        <Drawer
          classes={{ paper: styles.paper }}
          anchor='left'
          open={open}
          onClose={toggleDrawer(open)}
        >
          {list()}
        </Drawer>
        <Container className='container'></Container>
      </div>
    </React.Fragment>
  );
}
