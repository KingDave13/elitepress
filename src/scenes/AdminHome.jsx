import {
    NavbarAdmin,
} from '../components';

import { useEffect } from 'react';

const AdminHome = () => {

    useEffect(() => {
        document.title = 'Admin- Dashboard | Elite Press Journals';
    }, []); 

    return (
        <div className='font-instrument-sans'>
            <NavbarAdmin />

        </div>
    )
};

export default AdminHome;