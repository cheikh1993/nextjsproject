"use client"
import React from 'react'
import styles from "./page.module.css"
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from "next/image"

const Dashboard = () => {
  const fetcher =  (...args) => fetch(...args).then(res => res.json())
  const session = useSession()
  const router = useRouter()
  const username = session?.data?.user.name
  const {data, error,mutate, isLoading} = useSWR(`/api/posts?username=${username}`, fetcher)
  console.log(data);

if(session.status === "loading"){
  return <p>loading...</p>
}
if(session.status === "unauthenticated"){
  router.push("/dashboard/login")
}
const handsubmit = async (e) => {
  e.preventDefault()
  const title = e.target[0].value
  const desc = e.target[1].value
  const img = e.target[2].value
  const content = e.target[3].value
  try {
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        username
      })
    })
    mutate()
    e.target.reset()
  } catch (err) {
    console.log(err);
  }
  
}
const handlDelete = async (id) => {
  try {

    await fetch(`/api/posts/${id}`,{
      method: "DELETE",
    })
    mutate()
  } catch (error) {
    console.log(error)
  }
}
if(session.status === "authenticated"){
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading ? "Loading..." : data?.map(post => 
        <div className={styles.post} key={post._id}>
          <div className={styles.imgContainer}>
          <Image src={post.img} alt='' width={200} height={100}/>
           </div> 
        <div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p>{post.desc}</p>
        </div>
        <span className={styles.delete} onClick={() => handlDelete(post._id)}>X</span>
        </div>
        )}
      </div>
      <form className={styles.new} onSubmit={handsubmit}>
        <h1>Ajoutez une nouvelle poste</h1>
        <input type="text" placeholder='Titrez votre poste' className={styles.input}/>
        <input type="text" placeholder='Description....' className={styles.input}/>
        <input type="text" placeholder='Ajouter url de votre image' className={styles.input}/>
        <textarea placeholder="contenu de votre poste" className={styles.textArea}  cols="30" rows="10"></textarea>
        <button className={styles.button}>Envoyez</button>
      </form>
    </div>
  )
}
}
export default Dashboard
