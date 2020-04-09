import * as t from './actionTypes';

import { DEFAULT_LOCALE } from '../../i18n';
const initialState = {
    locale: localStorage.getItem('languageLocale') || DEFAULT_LOCALE,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case t.CHANGE_LOCALE:
            return Object.assign({}, state, {
                locale: action.locale,
            });
        default:
            return state;
    }
};
