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

            <div className=''>
                <div className='hero'>
                    <SidebarAdmin />
                </div>
            </div>
        </div>
    )
};

export default AdminHome;