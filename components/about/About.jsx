import React from 'react'
import Cloud from './cloud/Cloud'
import Image from 'next/image'
import person from '../../assets/person.png'


const style ={
  wrapper: ` m-4 `,
  h1:`justify-items-center text-center text-4xl text-white neon-button font-bold`,
  card_container:`justify-item-center flex flex-col m-4 p-4 lg:flex-row`,
  card_content:`flex-col  h-90 lg:w-5/12 lg:h-80 card p-6 lg:ml-20`,
  p:`m-3 text-white text-xs`,
  btn2:`mt-15 btnCustom text-sm `
}

const About = () => {
  return (
    <div className={style.wrapper} id="about">
      <h1 className={style.h1}>About</h1>
      <div className={style.card_container}>
        <div className={style.card_content}>
        <p className={style.p}>Hi, I'm lebe,A tech lover and a software engineer, I been passionate about tech since my teenage years
            and i've scalar every resource on the web to make my dream a reality in building better tech,My first tech job was an  intern for a small e-learning startup "codeworks"
            and with small internship and jobs for various companies.currently i freelance and do small project for family and friend and also develop open sources code on github.
            My aim is to bring about better solution to problem and give better result to client jobs.
            better solution bring about client satifaction and with over 5 year in the tech niche i tend to find various way and research finding to bring about great solution  .
            I am <span> OPEN FOR WORK.. </span> and able to part take on your side project.
            Thans for reading and hope you get in <a href="#contact"> contact with me </a> and hope will build passionate app for the worlds. 
          <br/>
          </p>
          <a href=" " className={style.btn2}> Resume</a>
        </div>
        <div>
        <Cloud />
          <Image className='relative z-0' src={person} alt="about" width={400} height={600} />
        </div>
      </div>
    </div>
  )
}

export default About