import React from 'react';
import styles from "./StatsRounded.module.scss";

const StatsRounded = () => {
    return (
        <div className={styles.stats__rounded}>
            <div className={styles.rounded__wrapper}>
                <div className={styles.progress__bar}>

                </div>
            </div>
            {/* <svg height="100" width="100">
             <circle cx="50" cy="50" r="40" stroke="#428bca" stroke-width="1" fill="transparent" />
            </svg>  */}
        </div>
    );
}

export default StatsRounded;
