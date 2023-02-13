export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'titulo',
            title: 'Titulo',
            type: 'string'
        },
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'text'
        },
        {
            name: 'descuento',
            title: 'Descuento',
            type: 'number'
        }
    ]
}