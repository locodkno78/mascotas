export const amiguitosList: amiguitos[] = [
    {id: 1, name: 'Coco', raza: 'Caniche', edad: '3 años aprox.', description: 'Rescatado y curado de sarna'},
    {id: 2, name: 'Pichu', raza: 'Galgo', edad: '6 años aprox.', description: 'Rescatado y curado garrapatas'},
    {id: 3, name: 'Laila', raza: 'PP', edad: '1 año aprox.', description: 'Rescatada y pata derecha trasera quebrada'}
]

export interface amiguitos {
    id: number
    name: string
    raza: string
    edad: string
    description: string
}