import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import SnackBar from './snackBars';

const useStyles = {
  input: {
    display: 'none',
  }
};


class PutTags extends React.Component {

  render() {
    const {
      addContent, classes, changeTagName,
      crateTag, deleteTag, recognition,
    } = this.props;
    const { tags, candidate } = addContent;
    return (
      <div>
      <Button
        variant="contained"
        color="primary"
        onClick={recognition}
      >
        Auto Recognition
      </Button>
      <br />
      <Input
        placeholder="Add Tag"
        // className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
        onChange={e => changeTagName(e.target.value)}
        value={candidate}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={crateTag}
      >
        Add
      </Button>
      <br />
      <div>
        {tags.map((tag) => (
          <Chip
            label={tag}
            className={classes.chip}
            color={'primary'}
            clickable={true}
            onDelete={() => deleteTag(tag)}
          />
        ))}
      </div>
      <SnackBar
        status='success'
        message='move success'
      />
    </div>
    );
  }
}

export default withStyles(useStyles)(PutTags);
