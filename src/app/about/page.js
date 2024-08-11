import Image from "next/image";
import styles from "./About.module.css";

import { RiDribbbleFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FaPaintBrush } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/profile_pic.jpg" alt="" width={250} height={250} />
        <div className={styles.socialMedia}>
          <div>
            <RiDribbbleFill color="white" size="25" />
            <p>Dribble</p>
          </div>
          <div>
            <MdOutlineMailOutline color="white" size="25" />
            <p>Email me</p>
          </div>
          <div>
            <FaInstagram color="white" size="25" />
            <p>Instagram</p>
          </div>
          <div>
            <LuTwitter color="white" size="25" />
            <p>Twitter</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.text}>
        <h1>HELLO THERE!</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida
          penatibus mus; nostra mollis fermentum.
        </p> <br/>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida
          penatibus mus; nostra mollis fermentum.Lorem ipsum odor amet,
          consectetuer adipiscing elit. Vulputate gravida penatibus mus; nostra
          mollis fermentum.Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida
          penatibus mus; nostra mollis fermentum.Lorem ipsum odor amet,
          consectetuer adipiscing elit. Vulputate gravida penatibus mus; nostra
          mollis fermentum.</p> <br/>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate gravida
          penatibus mus; nostra mollis fermentum.Lorem ipsum odor amet,
          consectetuer adipiscing elit. Vulputate gravida penatibus mus; nostra
          mollis fermentum.
        </p> <br/> 
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate </p> <br/>
        </div>

        <div className={styles.icons_skills}>
          <div>
            <div className={styles.iconContainer}>
              <FaPaintBrush color="white" size={25} />
            </div>

            <p>GRAPHIC DESIGN</p>
          </div>
          <div>
            <div className={styles.iconContainer}>
              <FaLaptopCode color="white" size={25}/>
            </div>

            <p>WEB DESIGN</p>
          </div>
          <div>
            <div className={styles.iconContainer}>
              <FaPenNib color="white" size={25}/>
            </div>

            <p>ILLUSTRATION</p>
          </div>
        </div>
      </div>
    </div>
  );
}
