import Nav from './Nav'
import Typed from 'typed.js';
import { useEffect } from 'react';
import Link from 'next/link';
import Particle from './particle/Particle';
import {links} from './link.js'
import { IoChevronForwardOutline } from "react-icons/io5";



const options = {
    strings: ["software engineer","fullstack developer", "web designer", "Mobile developer", "lover of Algorithms"],
    typeSpeed: 40,
    backSpeed: 25,
    loop: true,
    backDelay: 500
};

const style ={
    wrapper: `h-screen z-40`,
    container: `flex m-5  p-5 flex-col`,
    text_container: `z-10 ml-4 m-12 p-4 lg:w-1/2 w-full`,
    h1: `text-3xl my-2  font-bold  lg:text-7xl md:text-5xl`,
    name: `text-orange-500 font-bold`,
    p:`py-3  sm:text-2xl text-xl font-bold lg:text-4xl`,
    p_span: `text-yellow-500 sm:text-2xl  neon-button typing-text`,
    h2: ` my-2 mb-8 text-xl text-white-500 font-bold md:text-2xl lg:text-3xl`,
    botton :`z-20 flex justify-items-center my-3 px-12 py-4 font-bold Btn rounded-full hover:bg-blue-700`,
    link:`container flex mt-7 p-4 text-xl  text-white-500 hover:text-blue-500 lg:text-2xl`,
    div_list:`flex z-20 mr-2 rounded-full p-2 bg-[#09011b] `,
    link_list:`text-[#00d9ff] cursor-pointer `,
    i:`text-2xl trans ml-4 `,
}


const Main = () => {

useEffect(() => {
        const typed = new Typed(".typing-text", options);
        return () => {
            typed.destroy();
        }
    },[]);

  return (
  
    <div className={style.wrapper} id="home">
        <Nav />
        <div className={style.container}>
            <div className={style.text_container}>
            <h3 className={style.h1}>Hi <span className="wave">👋🏾</span> Over here,<br/> Emmanuel <span className={style.name}>Lebe</span></h3>
            <p className={style.p}>i am a <span className={style.p_span}></span></p>
            <h2 className={style.h2}>Building codes to make a better world ...</h2>
           <button ><Link href="#about" ><span className={style.botton}>About Me <IoChevronForwardOutline className={style.i}/></span></Link></button> 
           <div>
           <ul className={style.link}>
            
            {
                links.map((item, index) => {
                    return (
                        <div className={style.div_list} id={item.name}>
                        <li className={style.link_list} key={index}>
                            <Link
                                href={item.link} 
                            ><i className={item.name}>{item.icon}</i></Link>
                        </li>
                        </div>
                    )
                })
            }
        
        </ul>
        </div>
        </div>
        
        </div>
        <Particle />
    </div>
    
  )
}

export default Main