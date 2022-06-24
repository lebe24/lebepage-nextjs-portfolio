import React from 'react'
import { client } from '../../lib/Sanity';
import Image from 'next/image'
import Link from 'next/link'
import { IoChevronBackOutline } from 'react-icons/io5'
import img from  '../../assets/img/portfolio/portfolio-1.jpg'

const style ={
  wrapper:`m-2`,
  h1:`justify-items-center text-center text-4xl text-white neon-button font-bold`,
  arrow:`neon-button hover:text-red-400 hover:bg-white text-white border p-2 m-10 rounded-full cursor-pointer font-bold text-4xl`,
  ul:`flex m-3`,
  section:`flex items-center justify-center`,
  i:`cursor-pointer p-3 rounded-full font-semibold uppercase hover:text-blue-200`  
}

const project = ({
  work,
}) => {
  console.log(work[0].work[0].projectname);
  return (

    <div>
      <Link href="/"><IoChevronBackOutline className={style.arrow}/></Link> 

        <h1 className={style.h1}>Project work</h1>

        <div  data-aos="fade-up" data-aos-delay="100">
          <div className={style.section}>
            <ul className={style.ul} id="portfolio-flters">

              <li className={style.i} data-filter="*" >All</li>
              <li className={style.i} data-filter=".filter-card" >All</li>
              <li className={style.i} data-filter=".filter-web" >All</li>
              <li className={style.i} data-filter=".filter-app" >All</li>
          
            </ul>
          </div>
        </div>

        <div>
        <div >
            <Image src={img}  alt="" />
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="../../assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <Image src={img}  alt="" />
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="../../assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <Image src={img}  alt="" />
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="../../assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <Image src={img}  alt="" />
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="../../assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="../../assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="../../assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../../assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="../../assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
    </div>

    // <div>
    //   <Link href="/"><IoChevronBackOutline className={style.i}/></Link> 
    //   <div class="main">
    //     <span class="webdev">COMING</span>
    //     <span class="socod">SOON...</span>
    //   </div>
    // </div>
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