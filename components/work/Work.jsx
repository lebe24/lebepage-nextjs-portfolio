import React from 'react'
import Image from 'next/image'
import movie from '../../assets/movie.png'
import Link from 'next/link'


const style = {
  wrapper:`h-screen m-4 `,
  container_content:`flex items-center justify-center`,
  h1:`justify-items-center neon-button  text-center text-5xl text-white font-bold`,
  h2:`justify-items-center neon-button mt-8 text-center text-3xl text-white font-bold`,
  card:`flex-col m-8 h-90 lg:w-5/12 lg:h-80 card p-6 lg:ml-20 `,
  glass: `glass lg:w-[25rem] lg:h-64 lg:translate-x-[20rem] translate-y-[7rem] lg:translate-y-[-4rem] p-6  `,
  img:`img h-full`,
  content:`ml-5 flex flex-col  items-center justify-center lg:w-64 `,
  btn2:`translate-y-[2rem] btnCustom text-sm w-1/2 lg:w-full lg:translate-y-[5rem] items-center  `,
  h3:`justify-items-center uppercase lg:mt-8 p-4  mt-20 text-center text-xl text-white font-bold cursor-pointer hover:text-blue-500`,
}

const Work = ({ project }) => {
  return (
    <div className={style.wrapper} id='work' >
      <h1 className={style.h1}>Works</h1> 
      <h1 className={style.h2}>Latest work post :</h1> 

      <div  className={style.container_content}>
        <div className={style.card}>
          <div className={style.content}>
            {project.projectname}
            <a href={project.projecturl} className={style.btn2}> view </a>
          </div>
          <div className={style.glass}>
            <Image className={style.img} src={movie} width={300} height={200} />
          </div>
        </div>
      </div>
      <Link href='/project/project'>
        <h2 className={style.h3}>View More project</h2>
      </Link>
    </div>
  )
}



export default Work