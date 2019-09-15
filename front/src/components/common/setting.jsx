import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
  }

  render() {

    const { classes, setting, closeSetting } = this.props;

    const toggleDrawer = (side, open) => event => {
      console.log('==============');
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      this.setState({ ...this.state, [side]: open });
    };

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={closeSetting}
        onKeyDown={closeSetting}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
        <Drawer anchor="right" open={setting.isOpen} onClose={closeSetting}>
          {sideList('right')}q
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(Setting);
