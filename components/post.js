import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}) {
    
    const {titulo, contenido, url, imagen, publishedAt} = post
    return (
    <article>
        <Image  
        src={imagen.data.attributes.formats.medium.url} 
        width={600}
        height={400}
        alt= {`Imagen de ${titulo}`}

        />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link legacyBehavior  href={`/posts/${url}`}>
            <a className={styles.enlace}>
                Leer Post
            </a>
            </Link>
        </div>
      
       
    </article>
  )
}
