import React from 'react';
import styles from "./DashBoardCard.module.scss";

const DashBoardCard = ({children, color}) => {
    return (
        <div className={`${styles.dashboard__card} bg__${color}`}>
            {children}
        </div>
    );
}

export default DashBoardCard;
