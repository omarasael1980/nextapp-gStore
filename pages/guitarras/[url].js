import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "@/components/layout"
import Link from "next/link"

export default function Producto({guitarra}) {
    const {nombre, imagen, precio, url, descripcion} = guitarra[0].attributes
    return (
    <Layout
        title={`guitarra ${nombre}`}
    >
          <div className={styles.guitarra}>
          <Image
              src={imagen.data.attributes.url} alt={`Imagen Guitarra ${nombre}`}
              width={600}
              height={400}
          />
          <div className={styles.contenido}>
              <h3> {nombre}</h3>
              <p className={styles.descripcion}>{descripcion}</p>
              <p className={styles.precio}> ${precio}</p>
              <Link legacyBehavior href={`/guitarras/${url}`}>
              <a className={styles.enlace}>Ver producto</a>
              </Link>
          </div>
       
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()
  
    const paths = data.map(guitarra=>({

        params : {
            url:guitarra.attributes.url
        }
    }))
   
    return{
        paths,
        fallback: false
    }
}
// http://localhost:1337/api/guitarras?filters[url]=vai&populate=imagen
export async function getStaticProps({params:{url}}){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()
     
     
    return{
        props:{
            guitarra
        }
    }

}


// export async function getServerSideProps({query:{url}}){
    
//     const respuesta  = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&
//     populate=imagen`)
//     const {data: guitarra} = await respuesta.json()
  
//    return { props: { guitarra  } }
// }
