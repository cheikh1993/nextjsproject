"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value

    signIn("credentials", {name, email})
  }
const router = useRouter()
const session  = useSession()
if(session.status === "loading"){
  return <p>loading...</p>
}
if(session.status === "authenticated"){
  router.push("/dashboard")
}
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
      
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Connectez avec Google</button>
    </div>
  );
};
 export default Login;
