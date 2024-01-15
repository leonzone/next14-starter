import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.log}>ReiserDev</div>
            <div className={styles.text}>
                ReiserDev © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;