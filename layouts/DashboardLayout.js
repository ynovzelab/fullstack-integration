import React from 'react';
import Sidebarleft from '../components/dashboard/SidebarLeft';
import SidebarRight from '../components/dashboard/SidebarRight';
import styles from "./DashboardLayout.module.scss";

const Dashboardlayout = ({children}) => {
    return (
        <div className={styles.dashboard__wrapper}>
            <div className={styles.sidebar__left}>
                <Sidebarleft/>
            </div>
            <div className={styles.dashboard__content}>
                <main>
                    {children}
                </main>
            </div>
            <div className={styles.sidebar__right}>
                <SidebarRight/>
            </div>
        </div>
    );
}

export default Dashboardlayout;
