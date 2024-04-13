import {
    NavbarAdmin, SidebarAdmin,
} from '../components';

import { useEffect } from 'react';

const AdminHome = () => {

    useEffect(() => {
        document.title = 'Admin- Dashboard | Elite Press Journals';
    }, []); 

    return (
        <div className='font-instrument-sans'>
            <NavbarAdmin />

            <div className='hero'>
                <SidebarAdmin />
            </div>
        </div>
    )
};

export default AdminHome;