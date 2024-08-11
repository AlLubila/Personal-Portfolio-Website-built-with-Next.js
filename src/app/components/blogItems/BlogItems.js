import React from "react";
import styles from "./BlogItems.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogItems({ blogs }) {

  // Truncate content function
  const truncateContent = (content, limit) => {
    return content.length > limit ? content.substring(0, limit) + "..." : content;
  };

  if (!blogs || blogs.length === 0) {
    return <p>There is no blog...</p>;
  }

  return (
    <div className={styles.container}>
      {blogs.length === 1 && (
        <div className={styles.oneBlog}>
          <Image
            className={styles.blogImg}
            src='/projectPic.jpg'
            alt="Blog Image"
            width={600}
            height={600}
          />
          <div className={styles.text}>
            <h1>{blogs[0].title}</h1>
            <p>{truncateContent(blogs[0].body, 200)}</p>
            <Link className={styles.link} href={`/blog/${blogs[0].id}`}>Read more</Link>
          </div>
        </div>
      )}

      {blogs.length > 1 && (
        <div className={styles.mainBlog}>
          <Image
            className={styles.blogImg}
            src='/projectPic.jpg'
            alt="Main Blog Image"
            width={400}
            height={400}
          />
          <div className={styles.text}>
            <h1>{blogs[0].title}</h1>
            <p>{truncateContent(blogs[0].body, 200)}</p>
            <Link className={styles.link} href={`/blog/${blogs[0].id}`}>Read more</Link>
          </div>
        </div>
      )}

      <div className={styles.blogs}>
        {blogs.slice(1).map((blog, index) => (
          <div className={styles.blog} key={index}>
            <Image
              className={styles.blogImg}
              src='/projectPic.jpg'
              alt={`Blog Image ${index}`}
              width={1000}
              height={1000}
            />
            <div className={styles.text}>
              <h1>{blog.title}</h1>
              <p>{truncateContent(blog.body, 200)}</p>
              <Link className={styles.link} href={`/blog/${blog.id}`}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
