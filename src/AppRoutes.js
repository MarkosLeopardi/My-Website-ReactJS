import React from 'react'
import CV from './components/CV/CV'
import Home  from './components/Home/Home'
import Contact  from './components/Contact/Contact'
import Biography from './components/Biography/Biography'

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/CV',
        element: <CV />
    },
    {
        path: '/Biography',
        element: <Biography />
    },
    {
        path: '/Contact',
        element: <Contact />
    }
];

export default AppRoutes;