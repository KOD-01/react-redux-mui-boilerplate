import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Option from './option';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectBox(props) {
  const classes = useStyles();

  let content = <option>--</option>;

  if (props.values) {
    content = props.values.map((value) => (
      <Option key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select native value={props.value} onChange={props.onToggle}>
        {content}
      </Select>
    </FormControl>
  );
}

SelectBox.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default SelectBox;
