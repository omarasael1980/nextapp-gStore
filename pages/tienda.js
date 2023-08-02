import Layout from "@/components/layout";
import Guitarras from "@/components/guitarras";
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {

  return (
   
    <Layout
    title ={'Tienda'}
    description={'React | NextJS| Strapi | Tienda GuitarLA '}
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
     
    </Layout>
  )
}

// export async function getStaticProps() {
//    //se usa cuando casi no cambia la info || osea para info estatica
//    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//    const {data: guitarras} = await respuesta.json()
   
//    return {
//     props:{
//       guitarras
//     }
//    }
// }
export async function getServerSideProps() {
   //se usa cuando se requiere que sea dinamico la consulta porque la info cambia constantemente
   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
   const {data: guitarras} = await respuesta.json()
   
   return {
    props:{
      guitarras
    }
   }
}