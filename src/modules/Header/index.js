import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import history from '../../lib/history';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import DiscreteSlider from '../shared/DiscreteSlider';
import LocaleToggle from '../shared/LocaleToggle';
import ThemeSwitch from '../shared/ThemeSwitch';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <header>
            <AppBar color="default" position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.title}>
                        <Button color="inherit" onClick={() => history.push('/')}>
                            <FormattedMessage {...messages.homePage} />
                        </Button>
                    </div>
                    <div className={classes.title}>
                        <Button color="inherit" onClick={() => history.push('/auth')}>
                            <FormattedMessage {...messages.login} />
                        </Button>
                    </div>

                    <div className={classes.title}>
                        <DiscreteSlider />
                    </div>
                    <div className={classes.title}>
                        <LocaleToggle />
                    </div>
                    <div className={classes.title}>
                        <ThemeSwitch />
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
};
