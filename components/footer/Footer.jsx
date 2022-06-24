import icon from '../../assets/lebepage.svg'
import Image from 'next/image'

const style ={
    wrapper:` p-5 w-full`,
    h1:`text-white text-center font-bold uppercase`,
    span:`text-yellow-600 border-y-2 border-yellow-600`,
}
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.h1}> 
      DESIGN BY <span className={style.span}> LebePage </span>   </div>
      
    </div>
  )
}

export default Footer