import React from 'react'
import styles from './Contact.module.css';
import { HiOutlineMail } from "react-icons/hi";


function Contact() {

  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                Quality-Driven Development: <br />
                We strive to create code that is user-friendly. <br />
                Easy to understand and maintainable structure Not only that to make the system work. <br />
                But it can also be scaled up efficiently. <br />
                We also emphasize rigorous testing throughout the development process to ensure your application is stable and performing at peak performance.
                </p>
                <p>
                    <address>
                    61/1 San Pu Loei No.8, <br />
                    Ang Thong, chiangkham, Phayao
                    </address>
                </p>
                <p><HiOutlineMail/> 65021071@up.ac.th</p>
                <p><HiOutlineMail/> day.dew.dream12@gmail.com</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Phattaraphon"></input>
                        </div>
                        
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Konggmongkhon"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder="eg. @gmail.com" />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact