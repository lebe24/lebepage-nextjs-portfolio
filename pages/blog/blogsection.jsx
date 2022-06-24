import React from 'react'
import movie from '../../assets/movie.png'
import Image from 'next/image' 
import { client } from '../../lib/Sanity';
import Link from 'next/link'
import { IoChevronBackOutline } from "react-icons/io5";




const style={
    wrapper:`m-7`,
    i:`neon-button hover:text-red-400 hover:bg-white text-white border p-2 mt-5 rounded-full cursor-pointer font-bold text-4xl`,
    h1:`justify-items-center text-center text-4xl text-white neon-button font-bold`,
    blog:`flex flex-col lg:flex-row items-center  lg:grid lg:grid-cols-4 lg:gap-4 justify-center  m-2 `,
    glass:`glass m-4 p-6 h-64 flex flex-col  cursor-pointer`,
    btn:`flex m-6 items-center  justify-center`,
    btn2:`mt-15 btnCustom text-sm `,
    img:`img m-2`
}
const blogsection = ({post}) => {
    console.log(post[3].url)
  return (
    <div className={style.wrapper}>
       <Link href="/"><IoChevronBackOutline className={style.i}/></Link> 
        <h1 className={style.h1}>Blog</h1>
        <div className={style.blog}>
        
        {
            post.map((item, index) =>{

                return(
                <a href={item.url}>
                    <div className={style.glass}>
                        <div className='-mt-3'>logo</div>
                        <Image objectFit='contain'  className={style.img} src={item.imageuri} width={350} height={200} />
                        <div className='text-center uppercase font-bold'>{item.title.length > 20 ? item.title.substr(0, 40-2) + '...' : item.title}</div>
                    </div>
                </a>
                )
            })
        }
        
        
        <div className={style.glass}>
            <div className='border -m-5'>logo</div>
            <Image className={style.img} src={movie} width={300} height={200} />
            <div className='text-center'>item.title</div>
        </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "post"]';
    const post = await client.fetch(query);

    return{
        props:{
            post
        }
    };
}

export default blogsection