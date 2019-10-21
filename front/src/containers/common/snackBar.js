import { connect } from 'react-redux';
import * as snackBarActon from '../../modules/common/snackBarActon';
import snackBar from '../../components/addContent/snackBars';


function mapStateToProps(state) {
  return {
    snackBar: (state.snackBar) ? state.snackBar : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    open: (type, message) => dispatch(snackBarActon.openSnackBar(type, message)),
    close: () => dispatch(snackBarActon.closeSnackBar()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(snackBar);