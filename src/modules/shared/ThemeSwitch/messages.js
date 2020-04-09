import { defineMessages } from 'react-intl';

export const scope = 'Theme';

export default defineMessages({
    dark: {
        id: `${scope}.dark`,
        defaultMessage: 'Dark mode',
    },
    light: {
        id: `${scope}.light`,
        defaultMessage: 'Light mode',
    },
});
