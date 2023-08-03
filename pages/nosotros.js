import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
    title ={'Nosotros'}
    description={'React | NextJS| Strapi | Nosotros GuitarLA '}
    >
    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>
      <div className={styles.contenido}>

          <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre Nosotros' />
          <div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. 
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. 
            </p>
          </div>
      </div>
    </main>
    </Layout>
  )
}

