import React from 'react'
import movie from '../../assets/movie.png'
import Image from 'next/image' 
import Link from 'next/link'


const style ={
  wrapper:`m-5`,
  h1:`justify-items-center text-center text-4xl text-white neon-button font-bold`,
  blog:`flex flex-col lg:flex-row items-center justify-center  m-2 `,
  glass:`glass flex flex-col m-4 p-6 h-64  lg:w-1/4 cursor-pointer`,
  btn:`flex m-6 items-center  justify-center`,
  btn2:`mt-15 btnCustom text-sm `,
  img:`img m-2`
}

const Blog = ({ post }) => {
  console.log(post[0])
  return (
    <div id='blog' className={style.wrapper}>
      <h1 className={style.h1}>Blog</h1>

      <div className={style.blog}>
          {
            post.map((item, index) =>{
              while(index < 3){
                return(
                  <div className={style.glass}>
                    <div className='-mt-3'>logo</div>
                    <Image  className={style.img} src={item.imageuri} width={350} height={200} />
                    <div className='text-center uppercase font-bold'>{item.title.length > 20 ? item.title.substr(0, 40-2) + '...' : item.title}</div>
                  </div>
                ) 
              }
            })
          }
       
      </div>
      <div className={style.btn}><a href='/blog/blogsection' className={style.btn2}> Read more</a></div>
    </div>
  )
}

export default Blog