import Head from 'next/head'
import Main from '../components/main/Main'
import About from '../components/about/About'
import Work from '../components/work/Work'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import { client } from '../lib/Sanity';



const style = {
  wrapper: `font-popins text-white -z-10`,
}

const Home  =  ( {post , work} ) => {

  console.log(work)
  return (
    <>
    
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.wrapper}>
        <Main />
        <About />
        <Work project={work}/>
        <Blog 
          post= {post}
        />
        <Contact />
        <Footer />
      </div>
      </>
  )
}

export const getStaticProps = async () => {
  const query = '*[_type == "post"]';
  const post  = await client.fetch(query)

  const query1 = '*[_type == "works"][0]';
  const work  = await client.fetch(query1)

  return{
    props:{
      post,
      work 
    }
  };
}


export default Home
