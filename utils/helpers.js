export const formatearFecha = fecha=>{
    const fechaNueva= new Date(fecha)
    const opciones = {
        year:'numeric',
        month: 'long',
        day: 'numeric'
    }
    return fechaNueva.toLocaleDateString('es-Es', opciones)
}