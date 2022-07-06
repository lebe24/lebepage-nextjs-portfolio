import {useEffect, useState} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import icon from '../../assets/icon.svg'
import Image from 'next/image'
import logo from '../../assets/LEBEPAGE.svg'
import { Link } from "react-scroll";
 
 

const navitem = [
  {
      name: 'Home',
      path: 'home'
  },
  {
      name: 'About',
      path: 'about'
  
  },
  {
      name: 'Work',
      path: 'work'
  },
  {
      name: 'Blog',
      path: 'blog'
  },
  {
      name:'Contact',
      path:'contact'
  },
]

const style = {
 nav :`z-20 justify-between flex fixed p-2 w-screen  bg-bgblue/60   `,
 nav_item:`text-white  mx-6 flex text-md    text-white font-bold cursor-pointer md:flex hidden`,
 list:`p-3 neon-button text-xl hover:text-blue-500 `,
 menu:`flex relative mx-5 z-30`,
 menu_nav:`z-60 fixed -top-3 -right-2  p-3 w-[40vw] h-1/2 shadow-6xl md:hidden list-none
 flex flex-col justify-start items-end rounded blue-glassmorphism text-white ease-in duration-300`
}

 
const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false);
 const [handleShow, sethandleShow] = useState(false)

 useEffect(() =>{
   const listener = () =>{
     if(window.scrollY > 80){
       sethandleShow(true)
     }else sethandleShow(false)
   };
   window.addEventListener('scroll',listener)

   return()=>{
     window.removeEventListener('scroll',listener)
   }
 },[])
 
 return (
   <nav
    className= {`z-20 justify-between flex fixed p-2 w-screen  ${handleShow ? " backdrop-filter white-glassmorphism  bg-opacity-60  border-y border-gray-200 " : ""}`}>
     <div className='ml-2 -mt-2 flex'>
       <Image src={icon} alt="" />
       <div className='mt-5'>
       <Image className='-mt-5 border hidden' src={logo} alt="" />
       </div>
     </div>
     <div className={style.menu}>
       {!toggleMenu && (
         <HiMenuAlt4 fontSize={48} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
       )}
       {toggleMenu && (
         <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
       )}
       {toggleMenu && (
         <ul
           className={style.menu_nav}
         >
          <li className="text-xl w-full my-2 cursor-pointer"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
          {
                navitem.map((item, index) => {
                    return (
                        
                        <li className={style.list} key={index}>
                            <Link
                                href={item.path}
                                to={item.path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >{item.name}</Link>
                        </li>
                    )
                })

          }
         </ul>
       )}
     </div>
     <ul className={style.nav_item}>
            {
                navitem.map((item, index) => {
                    return (
                        
                        <li className={style.list} key={index}>
                            <Link
                                href={item.path}
                                to={item.path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >{item.name}</Link>
                        </li>
                    )
                })
            }
      </ul>
     
   </nav>
 );
};
 
export default Navbar;