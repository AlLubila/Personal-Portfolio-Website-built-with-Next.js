import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {

  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Projects',
      href: '/project'
    },
    {
      title: 'Contact',
      href: '/contact'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
  ]

  return (
    <div className={styles.navbar}>
      <Link href='/'>
      <div>
        <Image src='/MainLogo.png' alt='logo' width={150} height={150}/>
      </div>
      </Link>
      
      <div className={styles.menu}>

      {
        links.map(link=> (
          <Link className={styles.link} href={link.href}>{link.title}</Link>
        ))
      }
      </div>
    </div>
  )
}
