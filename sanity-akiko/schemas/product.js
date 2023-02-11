export default {
    name: 'producto',
    title: 'Producto',
    type: 'document',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string'
        },
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'text'
        },
        {
            name: 'precio',
            title: 'Precio',
            type: 'number'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nombre',
                maxLength: 96
            }
        }
    ]
}