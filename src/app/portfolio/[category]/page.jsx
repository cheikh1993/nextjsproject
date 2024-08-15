import React from 'react'
import styles from "./page.module.css"
import Button from '@/app/components/button/Button'
import Image from "next/image"

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vel nostrum saepe beatae, quos, accusantium vero autem maxime quidem sunt neque. Nesciunt similique perspiciatis incidunt, molestiae doloremque magnam mollitia laudantium quis rerum odio unde maiores debitis cumque enim dolorem quibusdam eius fugit! Quos, quaerat corrupti! Dolore architecto commodi porro a quibusdam nisi pariatur aliquam rem.</p>

          <Button url={"#"} text={"See more"}/>
        </div>
    
        <div className={styles.imgContainer}>
        <Image
        src="/apps.jpg"
        fill={true}
        alt=''
        className={styles.img} />
      </div> 
    </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vel nostrum saepe beatae, quos, accusantium vero autem maxime quidem sunt neque. Nesciunt similique perspiciatis incidunt, molestiae doloremque magnam mollitia laudantium quis rerum odio unde maiores debitis cumque enim dolorem quibusdam eius fugit! Quos, quaerat corrupti! Dolore architecto commodi porro a quibusdam nisi pariatur aliquam rem.</p>

          <Button url={"#"} text={"See more"}/>
        </div>
    
        <div className={styles.imgContainer}>
        <Image
        src="/apps.jpg"
        fill={true}
        alt=''
        className={styles.img} />
      </div> 
    </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vel nostrum saepe beatae, quos, accusantium vero autem maxime quidem sunt neque. Nesciunt similique perspiciatis incidunt, molestiae doloremque magnam mollitia laudantium quis rerum odio unde maiores debitis cumque enim dolorem quibusdam eius fugit! Quos, quaerat corrupti! Dolore architecto commodi porro a quibusdam nisi pariatur aliquam rem.</p>

          <Button url={"#"} text={"See more"}/>
        </div>
    
        <div className={styles.imgContainer}>
        <Image
        src="/apps.jpg"
        fill={true}
        alt=''
        className={styles.img} />
      </div> 
    </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos vel nostrum saepe beatae, quos, accusantium vero autem maxime quidem sunt neque. Nesciunt similique perspiciatis incidunt, molestiae doloremque magnam mollitia laudantium quis rerum odio unde maiores debitis cumque enim dolorem quibusdam eius fugit! Quos, quaerat corrupti! Dolore architecto commodi porro a quibusdam nisi pariatur aliquam rem.</p>

          <Button url={"#"} text={"See more"}/>
        </div>
    
        <div className={styles.imgContainer}>
        <Image
        src="/apps.jpg"
        fill={true}
        alt=''
        className={styles.img} />
      </div> 
    </div>
    </div>
  )
}

export default Category
