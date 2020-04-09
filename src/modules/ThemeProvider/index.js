import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    // MUI typography elements use REMs, so you can scale the global
    // font size by setting the font-size on the <html> element.
    html: {
      minWidth:750,
      [theme.breakpoints.up('sm')]: {
        fontSize: 16,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 20,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 24,
      },
    },
  },
});

export function ThemeProvider({ theme, children }) {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      {React.Children.only(children)}
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    theme: state.theme,
  };
};

const ThemeProviderWithStyles = withStyles(styles)(ThemeProvider);
export default connect(mapStateToProps)(ThemeProviderWithStyles);
