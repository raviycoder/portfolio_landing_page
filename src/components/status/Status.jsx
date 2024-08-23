import styles from './status.module.css';
const Status = ({percentage, skillName}) => {
    return (
        <div className={styles.main}>
            <h2>{skillName}</h2>
            <div className={styles.status}>
                <div style={{width:`${percentage}%`}} className={styles.progress}></div>
                <div style={{right:`${100-percentage}%`}} className={styles.circleBump}></div>
            </div>
        </div>
    );
}

export default Status;