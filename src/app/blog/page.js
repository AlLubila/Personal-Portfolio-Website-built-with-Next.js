'use client'

import React, { useEffect, useState } from 'react';
import styles from './blog.module.css';
import BlogItems from '../components/blogItems/BlogItems';

const getPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return []; 
  }
};

export default function Blog() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setBlogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.blogContainer}>  
        <h1>The Blog</h1>
      </div>
      <div className={styles.container}>
        <BlogItems blogs={blogs} />
      </div>
    </>
  );
}
