import React, { useState } from 'react';

import AuthRoutes from './auth.routes';
import TabsRoutes from './tabs.routes.js'

export default function Routes() {

    const [user, setUser] = useState(true);

    return user ? <TabsRoutes /> : <AuthRoutes setUser={setUser} />
};