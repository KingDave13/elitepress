import {
    AdminJournals,
    NavbarAdmin, SidebarAdmin,
} from '../components';

import { useEffect } from 'react';

const AdminHome = () => {

    useEffect(() => {
        document.title = 'Admin- Dashboard | Elite Press Journals';
    }, []); 

    return (
        <div className='font-instrument-sans journal2'>
            <NavbarAdmin />

            <div className=''>
                <div className=''>
                    <SidebarAdmin />
                </div>

                <AdminJournals />
            </div>
        </div>
    )
};

export default AdminHome;