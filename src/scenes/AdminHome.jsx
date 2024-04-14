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
        <div className='font-instrument-sans journal2 flex'>
            
            
            <div className='flex-1'>
                <NavbarAdmin />
                <SidebarAdmin />
            </div>
            
            <AdminJournals />
        </div>
    )
};

export default AdminHome;