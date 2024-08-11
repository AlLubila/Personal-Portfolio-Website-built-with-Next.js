'use client'

import { useRouter } from 'next/navigation';
import styles from './Home.module.css'

export default function Home() {

  const router = useRouter()

  return (
   <>
    <div className={styles.container}>
      <h1>Hi, I'm Derek Luis</h1>
      <p>a web developer with a passion for creating sleek and functional web applications using React and Next.js. I enjoy tackling challenges and staying on top of tech trends.</p>
      <div className={styles.buttons}>
          <button onClick={()=> router.push('/about')}>Learn more</button>
          <button onClick={()=> router.push('/contact')}>Contact me</button>
      </div>
    </div>
   </>
  );
}
