export const amiguitosList: amiguitos[] = [
  {
    id: 1,
    name: 'Coco',
    raza: 'Caniche',
    edad: '3 años aprox.',
    type: 'Perro',
    description: 'Rescatado, curado de sarna y garrapatas.',
    fullDescription:
      'Tiene un tratamiento contra sarna y garrapata de 3 meses de duración, la fecha de inicio del tratamiento es el 05/07/2024. Es un perrito muy cariñoso y compañero, le gusta jugar con niños.',
    imagen: '../assets/images/id-1.jpeg',
  },
  {
    id: 2,
    name: 'Pichu',
    raza: 'Galgo',
    edad: '6 años aprox.',
    type: 'Perro',
    description: 'Rescatado y curado garrapatas',
    fullDescription: 'Pichu es un hermoso galgo que necesita mucha actividad físca para gastar sus energias, es un buen compañero de entrenamiento. Está con todas las vacunas y goza de muy buena salud.',
    imagen: '../assets/images/id-2.jpg',
  },
  {
    id: 3,
    name: 'Laila',
    raza: 'PP',
    edad: '1 año aprox.',
    type: 'Perro',
    description: 'Rescatada y pata derecha trasera quebrada',
    fullDescription: 'Laila es una hermosa cachorra que fué muy maltratada, ya se recuperó de la lesión que sufrió pero le quedaron secuelas (renguea). Es un poco asustadiza, busca una familia que la mime',
    imagen: '../assets/images/id-3.jpg',
  },
  {
    id: 4,
    name: 'Pepa',
    raza: 'Munchkin',
    edad: '6 meses aprox.',
    type: 'Gato',
    description: 'Rescatada, estaba perdida en la plaza Victoria',
    fullDescription: 'Pepa es una hermosa gatita que fué encontrada en la plaza Victoria, se encontraba en buen estado al momento de ser rescatada.',
    imagen: '../assets/images/id-4.jpg',
  },
  {
    id: 5,
    name: 'Nina',
    raza: 'Developer',
    edad: '2 año aprox.',
    type: 'Gato',
    description: 'Rescatada en calle Jujuy al 1200',
    fullDescription: 'Nina es una gatita que fué abandonada, al parecer estaba a la caza de un mouse inalámbrico que la tenia loca',
    imagen: '../assets/images/id-5.jpg',
  },
];

export interface amiguitos {
  id: number;
  name: string;
  raza: string;
  edad: string;
  type: string;
  description: string;
  fullDescription: string;
  imagen: string;
}
