import React from 'react'

const style ={ 
  wrapper: `h-screen mt-5`,
  h1:`justify-items-center text-center text-4xl text-white neon-button font-bold`,
  h2:`mt-10 justify-items-center font-cursive uppercase text-center text-4xl`,
  container:`flex mt-20 items-center justify-center`,
  contact_box:`m-4 border w-1/3 p-6 cursor-pointer custom-btn btn-16`,
  span:`m-4 font-bold span-text`

}

const Contact = () => {
  return (
    <div className={style.wrapper} id="contact">
      <h1 className={style.h1}>Contact</h1>

      <h2 className={style.h2}>Hire Me </h2>
      <div className={style.container}>
        
        <div className={style.contact_box}>
          <a href="mailto:Emmanuel.philipel@yahoo.com">Email Me : <span className={style.span}> Emmanuel.philipel@yahoo.com</span></a>
        </div>
        <div className={style.contact_box}>
          <a href="tel:+5531981213843">Phone: <span className={style.span}>07020096</span></a>
        </div>
      </div>
      
    </div>
  )
}

export default Contact