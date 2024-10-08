import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
import Button from '../components/button/Button'


export const metadata = {
  title: "Blog de Cheikh Faye contact page",
  description: "cheikh faye blog",
};
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let's keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png"
          alt=''
          fill={true}
          className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input}/>
          <input type="text" placeholder='email' className={styles.input}/>

          <textarea cols="30" rows="10" placeholder='Message' className={styles.textArea}></textarea>
        <Button  url="#" text={"submit"}/>
        </form>
      </div>
    </div>
  )
}

export default Contact
