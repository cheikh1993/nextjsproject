import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
import Button from '../components/button/Button'
const About = () => {
  return (
    <div className={styles.container}> 
      <div className={styles.imageContainer}>
        <Image src="/websites.jpg"fill={true}alt='' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Digital Storytellers</h1>
          <div className={styles.imgDesc}>Handcrafting award winning digital experiences.</div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We ?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi inventore impedit vero maiores molestias delectus eveniet iste. Nihil, nesciunt. Laboriosam maxime animi sint recusandae dolores cupiditate natus, sapiente vitae praesentium ut ipsa itaque velit delectus harum. Accusamus, doloremque numquam! Libero sunt rerum autem a aspernatur suscipit dicta, pariatur consequuntur maiores praesentium distinctio facere laborum expedita totam eum nihil cupiditate minus incidunt quod iure repellendus eligendi officia. <br /> <br /> Illo ex amet voluptates, doloribus nesciunt sunt natus facere nulla nobis accusamus dignissimos porro. Libero, atque? Iste, possimus sunt! Rerum ipsa maxime beatae odit error dolorem libero totam deleniti eaque expedita? Magnam, consequuntur expedita.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do ?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima accusamus, officiis ducimus totam rerum nisi tenetur asperiores,
             eos nihil earum eius, ipsam corporis repellendus perspiciatis! Quasi 
             earum incidunt animi totam hic nulla dolores, aperiam dolore soluta rem,
              quae molestias odit dicta sunt quaerat repellendus consectetur fugit tenetur.
               Corrupti quo provident voluptatem illo officiis adipisci reiciendis.
               <br />
          <br />-Dynamic websites 
          <br />
          <br />-Faster and Handy Mobile Apps
          <br />
          <br />-Mobile Apps
               </p>
          
          <Button url={"/contact"}  text={"Contact"}/>
        </div>
      </div>
    </div>
  )
}

export default About
