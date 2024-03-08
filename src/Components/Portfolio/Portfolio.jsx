import React from 'react'
import styles from './Portfolio.module.css';
import Tilt from "react-parallax-tilt";

function Portfolio() {

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/250929173_3179576238942422_6492034145953428513_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHBNagwYGmWD2BibbWeGiMJLHk6YPemSr8seTpg96ZKv9i7I7xCKsK2213TWVcKvtXENMpBWbclmmDLhNcKewE8&_nc_ohc=1uhB03GCGEoAX_m23Q2&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBG64ZvnVaXRa550mwU9_60emeElnfGSkgzHOnFUTWheA&oe=65F04399" alt="" />  
          </Tilt>
            <p>Free Code Camp</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/348430109_105475622557763_2162585021861628347_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH7K-V4XZ-ZIVgBrVgUSFkw7HyVQZU_xw3sfJVBlT_HDW2XDPqKhooKNLhptUqHxL0r09pf_EtWwiH6o18NcDF9&_nc_ohc=UecQ6t-DBjIAX_UZ0o2&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfDuTtKgWwa4V9ZzBuq8a6MesCDL_uFoTH1dtZ1owYoVyQ&oe=65EFBDDC" alt="" />
          </Tilt>  
            <p>Thai Mooc</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://yt3.googleusercontent.com/exYm9eUqwXUf15Q69vqlqpju_jVkhalW8oouEUXrXVHWUz-9V4_JjgrIkv61olAnyz9os29e=s900-c-k-c0x00ffffff-no-rj" alt="" />
          </Tilt>
            <p>Oracle</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo.png" alt="" />
          </Tilt>
            <p>Coursera</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/358149121_678562134302307_3179745460758459830_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFcQM7O_dRtKveaO1HjuTaMoihUHO81AA6iKFQc7zUADpLqZNs6tE6HtrDkY7CM60oO2ePI07uvX6-JOq7V5XKh&_nc_ohc=rD9DHCtSBvoAX_UpCao&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBBjEQakkG1YLLOfqrnNYLFDAt-qilplKZ8aq7Vj8Ftog&oe=65EF73DF" alt="" />
          </Tilt>    
            <p>Codecademy</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/312978270_777021647086025_8407389807946134683_n.png?stp=dst-png_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE5nL3fPJxM1ccjo2dyJeCE0m1QcBYswuXSbVBwFizC5UjiaS6Lt1U9JGQWFJd8zLYOqkazhWQWqYNkTETW2kX_&_nc_ohc=hWUGsZ6UgkwAX8Sgmxf&_nc_oc=AQmU7jDYL00Br_9VrXMquM_CBstTWvArGuIsEmnvzWH-pj0yiyzTR8AxAGew74WvP2E&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfBWjmN1iXOpwbHbiEEeJ8GCEGiW9DxP8G4IY-yt4qatWQ&oe=65EF890F" alt="" />
          </Tilt>  
            <p>Code Avengers </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio