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
            <div className='grid grid-cols-4'>
                <div className='sticky'>
                    <SidebarAdmin />
                </div>
                <div className='col-span-3'>
                    <AdminJournals />
                </div>
            </div>
        </div>
    )
};

export default AdminHome;