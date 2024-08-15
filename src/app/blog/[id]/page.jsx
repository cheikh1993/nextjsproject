import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
import {notFound } from "next/navigation"

async function getData(id){
  const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: "no-cache"
  })
      if(!res.ok){
        return  notFound()
      }
  
      return res.json()
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
          src="/apps.jpg"
          width={40}
          height={40}
          className={styles.avatar}
          />
          <span className={styles.username}>Cheikh Faye</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image 
       fill={true}
        src={"/apps.jpg"}
        alt=''
      
        className={styles.image}
        />
      </div>
     </div>
     <div className={styles.content}>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aliquid, commodi id perferendis nisi culpa mollitia voluptas ad voluptatibus, eaque deserunt, distinctio tenetur fugiat sint! Eos ad, repudiandae exercitationem, nihil nam quasi necessitatibus corporis asperiores possimus rem distinctio. Eos tempora odio ipsum iure consequatur consectetur nisi? Saepe accusantium quis laborum consequuntur distinctio possimus beatae sit libero molestiae. Delectus eius ipsum voluptates fuga fugiat magnam repellendus quae aut quam nulla facere, amet eaque ratione asperiores quia eum cumque odit mollitia id. Exercitationem, architecto veritatis, laboriosam aut soluta minima dolorum deserunt quaerat adipisci temporibus iusto neque voluptatem natus quae maiores doloribus! Harum?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit at voluptatum cumque minima in voluptatibus corporis, nisi suscipit ad! Minima ea iure commodi cupiditate maiores, tenetur voluptatum quas asperiores amet, laboriosam quasi necessitatibus facilis dolore autem quisquam perferendis alias architecto harum labore, repudiandae at doloribus molestias quae. Sit placeat nobis totam quibusdam in esse, eum officia recusandae libero! Pariatur dolor nisi minima nesciunt aspernatur iusto laudantium facere similique! Nesciunt dolorum itaque aperiam quo similique, repellat quae aliquam dolores nulla tenetur debitis fuga omnis voluptatibus rem vel exercitationem obcaecati delectus necessitatibus, cupiditate dolorem placeat nostrum facere velit tempora? Velit, incidunt?
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quas aspernatur fugit soluta animi consequuntur numquam porro, aliquid et unde quia odit, cupiditate ut magnam deserunt! Sint animi qui inventore repellendus, unde vitae. Impedit voluptates, accusantium error saepe perferendis voluptatem asperiores quis hic pariatur iure, nam numquam minima nobis commodi fuga aliquid consectetur laboriosam ab! Fuga ea nostrum vel omnis dignissimos maiores natus nisi incidunt nemo, eligendi magni exercitationem architecto repudiandae laborum consequatur error repellat sunt dolor possimus magnam! Cupiditate, expedita excepturi. Numquam dolorum rem magni corrupti aliquam. Exercitationem nobis quibusdam quod ipsum praesentium sint architecto dolorum repellendus atque iste.

      </p>
     </div>
    </div>
  )
}

export default PostBlog
