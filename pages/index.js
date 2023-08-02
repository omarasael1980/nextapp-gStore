import Layout from "@/components/layout"
import Guitarras from "@/components/guitarras"
import Post from "@/components/post"
import Curso from "@/components/curso"
import styles from "../styles/grid.module.css"

export default function Home({guitarras, posts,curso}) {

  return (
    
    <Layout
    title = {'Inicio'}
    description={'React | NextJS| Inicio GuitarLA |Strapi'}
    >
      <main className="contenedor">
      <h1 className="heading">Nuestra Colección</h1>
     
       <div className={styles.grid}>
       {guitarras?.map(guitarra =>(
         <Guitarras 
          key={guitarra.id}
          guitarra={guitarra.attributes} 
        />
        ))}
       </div>
           
      
     </main>
     <Curso
     curso={curso}
     ></Curso>
     <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map(post=>(
            <Post 
              key={post.id}
              post={post.attributes}
            ></Post>
          ))}
        </div>
      </section>
     
     </Layout>
    
  )
}

//se tienen que hacer tres consultas

export async function getStaticProps(){
  const urlGuitarras= `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  const [resGuitarras, resPosts,resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  const [{data:guitarras}, {data:posts}, {data:curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])
 
  return{
    props:{
      guitarras, 
      posts,
      curso
    }
  }
}