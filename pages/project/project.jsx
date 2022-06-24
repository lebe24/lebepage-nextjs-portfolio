import React from 'react'
import { client } from '../../lib/Sanity';
import Link from 'next/link'
import { IoChevronBackOutline } from 'react-icons/io5'

const style ={
  h1:`justify-items w-1/2 border text-center text-2xl text-white font-bold`,
  i:`neon-button hover:text-red-400 hover:bg-white text-white border p-2 m-10 rounded-full cursor-pointer font-bold text-4xl`,

}

const project = ({
  work,
}) => {
  console.log(work[0].work[0].projectname);
  return (
    <div>
      <Link href="/"><IoChevronBackOutline className={style.i}/></Link> 
      <div class="main">
        <span class="webdev">COMING</span>
        <span class="socod">SOON...</span>
      </div>
    </div>
  )
}

export const getStaticProps = async( ) => {
  
  const query1 = `*[_type == "category"][]{
    work[] ->{
      title,
      projectname,
    }
  }`;

  const work  = await client.fetch(query1); 

  return {
    props:{
      work
    }
  };
}


export default project


{/* <div>
        <div className={style.h1}>
            <h1>Fontend</h1>
            <ul>
              {
                work[0].work.map((item, index) =>{
                  console.log(index)
                  return(
                    <li>{item.projectname}</li>
                  )
                })
              }
            </ul>
            <h1>Mobile</h1>
            <ul>
              {
                work[2].work.map((item, index) =>{
                  console.log(index)
                  return(
                    <li>{item.projectname}</li>
                  )
                })
              }
            </ul>
        </div>   
    </div> */}