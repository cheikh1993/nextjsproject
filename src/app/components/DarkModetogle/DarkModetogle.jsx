"use client"

import React, { useContext } from 'react'
import styles from "./DarkModetogle.module.css"
import { ThemeContext } from '../../../context/ThemeContext'
const DarkModetogle = () => {
   const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container}
    onClick={toggle}
    >
   <div>l</div>
      <div>d</div>
      <div className={styles.bull} 
      
      style={mode === "light" ? {left: "2px"} : {right: "2px"}}
      />
    </div>
  )
}

export default DarkModetogle
