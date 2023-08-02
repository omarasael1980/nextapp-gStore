import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from '../styles/grid.module.css'
export default function Blog({posts}) {
  
  return (
    <Layout
    title ={'Blog'}
    description={'React | NextJS| Strapi | Blog de Musica| Consejos| GuitarLA '}
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post=>(
            <Post 
              key={post.id}
              post={post.attributes}
            ></Post>
          ))}
        </div>
      </main>
     
    </Layout>
  )
}

export async function getStaticProps() {
   //se usa cuando casi no cambia la info || osea para info estatica
 
   const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
   const {data: posts} = await respuesta.json()
  console.log(posts)
   return {
    props:{
      posts
    }
   }
}