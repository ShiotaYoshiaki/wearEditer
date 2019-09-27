import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DivModalImagePrev, ImgModalImagePrev } from '../../style/common/modal';

const useStyles = {
  input: {
    display: 'none',
  }
};


class Setting extends React.Component {

  onFileSelect(file, set) {
    const reader = new FileReader();
    reader.onload = () => {
      set({ data: reader.result });
      return reader.result;
    };
    reader.readAsDataURL(file.target.files[0]);
  }

  render() {
    const {
      addContent, classes,
      set,
    } = this.props;
    const { data } = addContent;
    return (
      <DivModalImagePrev>
        {!data || data === '' ? (
          <div>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={file => this.onFileSelect(file, set)}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" className={classes.button}>
                Upload
             </Button>
            </label>
          </div>
        ) : (
            <ImgModalImagePrev alt='please select' src={data} />
          )}

      </DivModalImagePrev>

    );
  }
}

export default withStyles(useStyles)(Setting);
