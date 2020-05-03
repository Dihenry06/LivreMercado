import * as React from 'react';

import AuthRoutes from './auth.routes';
import TabsRoutes from './tabs.routes.js'

export default function Routes() {
    const user = true;

    return user ? <TabsRoutes /> : <AuthRoutes />
};