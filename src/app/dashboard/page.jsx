"use client"

import React from 'react'
import styles from "./page.module.css"
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const fetcher =  (...args) => fetch(...args).then(res => res.json())

  const {data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
const session = useSession()
console.log(session);
  return (
    <div className={styles.container}>
      Dashboard
    </div>
  )
}

export default Dashboard
