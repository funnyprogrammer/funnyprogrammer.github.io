import React, { useEffect } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import theme from '../../../palette/themes';

export default function Item(props) {
  const [hover, setHover] = React.useState(false);
  const [desc, setDesc] = React.useState('');
  const IconButton = props.icon;

  useEffect(() => {
    setDesc(props.desc);
  }, []);

  return (
    <React.Fragment>
      <ListItem
        button
        key={desc}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? 'grey' : theme.palette.primary.main,
        }}
      >
        <ListItemIcon>
          <IconButton style={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary={desc} />
      </ListItem>
    </React.Fragment>
  );
}
