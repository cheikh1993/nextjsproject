import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
const Footer = () => {
  return (
    <div className={styles.container}>
     <div>2024 Cheikh. All rights reserved.</div>
     <div className={styles.social}>
<Image src="/1.png" width={16} height={16} alt='facebook' className={styles.icon}/>
<Image src="/2.png" width={16} height={16} alt='facebook' className={styles.icon}/>
<Image src="/3.png" width={16} height={16} alt='facebook' className={styles.icon}/>
<Image src="/4.png" width={16} height={16} alt='facebook' className={styles.icon}/>


     </div>
    </div>
  )
}

export default Footer
