'use client'

import React, { useState, useEffect } from 'react'
import styles from './singleBlog.module.css'
import Image from 'next/image'

const getPosts = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; 
  }
};


export default function SingleBlog({params}) {

  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = params

  useEffect(() => {

       const fetchData = async () => {
      const data = await getPosts(id);
      setBlog(data);
      setLoading(false);
    }
    fetchData();
   
  }, [id]);

  return (
       <div className={styles.mainBlog}>
          <Image
            className={styles.blogImg}
            src='/projectPic.jpg'
            alt="Main Blog Image"
            width={400}
            height={400}
          />
          <div className={styles.text}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        </div>
  )
}
