import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"
 
export default function Post({post}) {
 
  const {titulo, contenido,  publishedAt, imagen} =post[0].attributes
  
  return (
    <Layout
    title={`${titulo}`}
    >
      <article className={`${styles.post} ${styles['m-3']}`}>
        <Image  
        src={imagen.data.attributes.url} 
        width={1000}
        height={400}
        alt= {`Imagen de ${titulo}`}

        />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.text}>{contenido}</p>
         
        </div>
      
       
    </article>
    </Layout>
  )
}

export async function getServerSideProps({params:{url}}){
    
    const respuesta  = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
     console.log(`${process.env.API_URL}/posts?filters[url]=${url}&
     populate=imagen`)
      
    const {data:post} = await respuesta.json()
  
   return { props: {  post  } }
}