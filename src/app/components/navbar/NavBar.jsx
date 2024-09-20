"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css"
import DarkModetogle from '../DarkModetogle/DarkModetogle'
import { signOut, useSession } from 'next-auth/react'

const links = [
    {
        id:0,
        title: "Home",
        url: "/"
    },
    {
        id:1,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id:2,
        title: "Blog",
        url: "/blog"
    },
    
    {
        id:4,
        title: "About",
        url: "/about"
    },
    {
        id:5,
        title: "Contact",
        url: "/contact"
    },
    {
        id:6,
        title: "Dashboard",
        url: "/dashboard"
    },
]


const NavBar = () => {
    const session = useSession()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Cheikh</Link>
      <div className={styles.links}>
        <DarkModetogle />
        {links.map((item)  => 
            <Link  href={item.url} key={item.id} className={styles.link} >{item.title}</Link>) }

          {

          session.status == "authenticated" &&
           <button onClick={signOut} className={styles.logout}>Logout</button>
          }
      </div>
    </div>
  )
}

export default NavBar
