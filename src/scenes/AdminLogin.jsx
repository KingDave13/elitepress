import {
    NavbarAdmin, Login,
} from '../components';

import { useEffect } from 'react';

const AdminLogin = () => {

    useEffect(() => {
        document.title = 'Admin- Login | Elite Press Journals';
    }, []); 

    return (
        <div className='font-instrument-sans'>
            <NavbarAdmin />

            <div className='hero'>
                <Login />
            </div>

        </div>
    )
};

export default AdminLogin;