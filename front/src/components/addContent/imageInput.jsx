import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { DivModalImagePrev, ImgModalImagePrev } from '../../style/common/modal';

const useStyles = {
  input: {
    display: 'none',
  }
};


class ImageInput extends React.Component {

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

export default withStyles(useStyles)(ImageInput);
