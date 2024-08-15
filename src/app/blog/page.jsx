"use client"

import React from 'react'
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"

  async function getData(){
const res  = await fetch("https://jsonplaceholder.typicode.com/posts",{
  cache: "no-cache"
})
    if(!res.ok){
      throw new Error("Failled to fetch data")
    }
    
    return res.json()
}





const Bloc  = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href='/blog/testId' className={styles.container} key={item.id}>
      <div className={styles.imgContainer}>
        <Image
        src="/apps.jpg"
        width={400}
        height={250}
        alt=''
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.body}</p>
      </div>
    </Link>
      ))}
     
    </div>
    
  )
}

export default Bloc
