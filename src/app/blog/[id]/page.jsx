import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
import {notFound } from "next/navigation"

async function getData(id){
  const res  = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache: "no-cache"
  })
      if(!res.ok){
        return  notFound()
      }
  
      return res.json()
  }

  export async function generateMetadata({params}) {
    const post = await getData(params.id)
    return {
      title: post.title,
      description: post.desc
    }
  }

const PostBlog = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
     <div className={styles.top}>
        <div className={styles.info}>
        <h1 className={styles.title}>{data?.title}</h1>
        <p className={styles.desc}>{data.body}</p>
         <div className={styles.author}>
          <Image 
          src={data.img}
          width={40}
          height={40}
          className={styles.avatar}
          />
          <span className={styles.username}>{data.username}</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image 
       fill={true}
        src={data.img}
        alt=''
      
        className={styles.image}
        />
      </div>
     </div>
     <div className={styles.content}>
      <p className={styles.desc}>
        {data.content}
      </p>
     </div>
    </div>
  )
}

export default PostBlog
