import Button from '../button/Button';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <section id='contact' className={styles.main}>
            <div className={styles.headingData}>
                <h1>Lets Design Together</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                    nibh lectus netus in. Aliquet donec morbi convallis pretium
                </p>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    {/* Removed inline style here */}
                    <input className={styles.input} type="email" placeholder='Enter Your Email' />
                    <Button customPadding={"10px 20px"}>Contact Me</Button>
                </div>
            </div>
        </section>
    );
}

export default Contact;