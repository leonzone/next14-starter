import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";


const getData = async (slug) => {
  console.log(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const  res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  // const  res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if(!res.ok){
    console.log(res);
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({params}) => {
    const {slug} = params;

    const post = await getData(slug);
    console.log(post);

    // const post = await getPost(slug);

    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img} />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
              {post.createdAt?.toString().slice(4, 16)}
            </span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;