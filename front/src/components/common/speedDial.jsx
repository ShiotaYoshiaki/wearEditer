import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PublishIcon from '@material-ui/icons/Publish';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import { withStyles } from '@material-ui/styles';

const useStyles = {
  root: {},
  speedDial: {
    position: 'fixed',
    display: 'flex',
    bottom: '55px',
    right: 0,
  },
};

const actions = [
  { icon: <AccessibilityNewIcon />, name: 'Coordinate' },
  { icon: <PublishIcon />, name: 'Item' },
];

class speedDial extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    const { open: openState } = this.state;
    this.setState({open : !openState});
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={this.handleOpen}
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    );
  };
}

export default withStyles(useStyles)(speedDial);