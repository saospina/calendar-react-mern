
import React from 'react';

import './loading.css'

export const Loading = () => {

    const loadingStyle = {
        width: '3rem',
        height: '3rem'
    };

    return (
        <div className="loading text-center text-info">
            <div className="spinner-border" style={loadingStyle} role="status">
            </div>
            <div className="spinner-grow" style={loadingStyle} role="status">
            </div>
        </div>
    )
}
