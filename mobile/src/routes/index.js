import * as React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes.js'

export default function Routes() {
    const user = true;

    return user ? <AuthRoutes /> : <AppRoutes />
};