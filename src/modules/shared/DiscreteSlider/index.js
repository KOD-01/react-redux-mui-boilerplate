import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { changeThemeFontSize } from '../../ThemeProvider/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: 150,
    textAlign:'center'
  },
});

function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        <FormattedMessage {...messages.fontSize} />
      </Typography>
      <Slider
        onChange={(e, value) => props.onThemeFontSizeChange(value)}
        value={props.fontSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={2}
        marks
        min={10}
        max={24}
      />
    </div>
  );
}
DiscreteSlider.propTypes = {
  onThemeFontSizeChange: PropTypes.func,
  fontSize: PropTypes.number,
};

const mapStateToProps = state => ({
  fontSize: state.theme.typography.fontSize,
});

const mapDispatchToProps = dispatch => {
  return {
    onThemeFontSizeChange: size => dispatch(changeThemeFontSize(size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscreteSlider);
