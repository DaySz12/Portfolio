import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            He provides excellent after-sales service. He is always happy to help us whenever we have any questions or problems.
          </p>
          <img
            src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/287636502_1462312094198004_2615935801933715216_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZzx8Vks1tvDb1IrPSU9tB7gOG-ClVAdXuA4b4KVUB1QtAMWBtyfMrSE6BAP6BwHGk6L1TOXZDha_WTZOKMNK1&_nc_ohc=z7iSKgf1_t4AX_r9nID&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAjkKJ_5KruUP4cjgMirKDz7h_wCpCRqx-DD4fHTo02Sw&oe=65F08272"
            alt=""
          />
          <h4>Nanthapong</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          The service is excellent. They are able to answer questions on topics I'm not familiar with.
          </p>
          <img
            src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/294875168_1212922219500963_3351838576033579768_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGC4JaQQoC_3PD_CbiMO9zSBTXIj4FgX08FNciPgWBfT_2fvR3rjBjmIpsa9HdlAYhFaWNor9qpijO-PPa0YR__&_nc_ohc=Xe4uwubomukAX8_w4eR&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAATfF5iBazrr4xoIQrDeuomnSdB4-xKQBmPXIhCuRZqg&oe=65F11918"
            alt=""
          />
          <h4>Sorawit</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            He is a reliable and trustworthy Web Developer. I highly recommend him to anyone who needs a website developed.
          </p>
          <img
            src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/391517272_1406952746843481_4634240117674731777_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEXJKGkO4dcXMpT_peOi2dp9dEzX7_8Aiv10TNfv_wCK3JfJjd_kukdBEoVo76gVTtEn6SRW96pMbgypPokp3wd&_nc_ohc=oFul-G1iVKkAX-QTSQu&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAMSwAvgE6eTUQGF12Ocb_F7SU38-BGtCgEMbhSquR2_g&oe=65F08901"
            alt=""
          />
          <h4>Theansin</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;