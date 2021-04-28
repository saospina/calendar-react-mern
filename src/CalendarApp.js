import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
