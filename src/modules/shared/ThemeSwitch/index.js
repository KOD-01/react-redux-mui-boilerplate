import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { changeThemeMode } from '../../ThemeProvider/actions';
import Switch from '@material-ui/core/Switch';

function ThemeSwitch(props) {
    let nextType = props.type == 'dark' ? 'light' : 'dark';
    return (
        <div>
            <Switch
                checked={props.type == 'dark'}
                onChange={() => props.onThemeToggle(nextType)}
                value={<FormattedMessage {...messages[props.type]} />}
                color="primary"
            />
            <FormattedMessage {...messages[props.type]} />
        </div>
    );
}

ThemeSwitch.propTypes = {
    onThemeToggle: PropTypes.func,
    type: PropTypes.string,
};

const mapStateToProps = (state) => ({
    type: state.theme.palette.type,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onThemeToggle: (mode) => dispatch(changeThemeMode(mode)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
