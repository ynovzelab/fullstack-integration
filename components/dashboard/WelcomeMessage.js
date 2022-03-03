import React from 'react';
import styles from "./WelcomeMessage.module.scss";

const WelcomeMessage = (props) => {
    return (
        <div className={styles.welcomme__message}>
            <h1>Hello {props.user}</h1>
            <p>
                Welcome Back !
            </p>
        </div>
    );
}

export default WelcomeMessage;
