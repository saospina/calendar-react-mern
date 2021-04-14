import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { AppRouter } from './routers/AppRouter';

export const CalendarApp = () => {
    return (
        <div className="container">
            <AppRouter />
        </div>
    )
}
