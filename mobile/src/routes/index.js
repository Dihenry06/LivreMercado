import * as React from 'react';

import AuthRoutes from './auth.routes';
import DrawerRoutes from './drawer.routes.js'

export default function Routes() {
    const user = true;

    return user ? <DrawerRoutes /> : <AuthRoutes />

};