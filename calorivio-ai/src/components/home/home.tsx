import { useState } from 'react';
import './home.css';

const Home_Comp = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {

        setCollapsed(!collapsed);
    }
    return(
        
        <>

            <div className="layout">
                <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                    
                </div>
                <div className="main_dashboard">

                </div>
            </div>
        </>
    )

}

export default Home_Comp;