import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import messages from './messages';
import { appLocales } from '../../../i18n';
import { changeLocale } from '../../LanguageProvider/actions';

import SelectBox from './components/selectBox';

function LocaleToggle({ locale, onLocaleToggle }) {
  return (
    <SelectBox
      value={locale}
      values={appLocales}
      messages={messages}
      onToggle={onLocaleToggle}
    />
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = (state) => ({
  locale: state.language.locale,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
