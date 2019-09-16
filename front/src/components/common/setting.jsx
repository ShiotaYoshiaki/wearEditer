import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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

  sideList() {
    const { classes, closeSetting } = this.props;

    return (
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
  }

  render() {

    const { setting, closeSetting } = this.props;


    return (
      <div>
        <Drawer anchor="right" open={setting.isOpen} onClose={closeSetting}>
          {this.sideList('right')}
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(Setting);
