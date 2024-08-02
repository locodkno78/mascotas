export const amiguitosList: amiguitos[] = [
  {
    id: 1,
    name: 'Coco',
    raza: 'Caniche',
    edad: '3 años aprox.',
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
    description: 'Rescatado y curado garrapatas',
    fullDescription: 'Pichu es un hermoso galgo que necesita mucha actividad físca para gastar sus energias, es un buen compañero de entrenamiento. Está con todas las vacunas y goza de muy buena salud.',
    imagen: '../assets/images/id-2.jpg',
  },
  {
    id: 3,
    name: 'Laila',
    raza: 'PP',
    edad: '1 año aprox.',
    description: 'Rescatada y pata derecha trasera quebrada',
    fullDescription: 'Laila es una hermosa cachorra que fué muy maltratada, ya se recuperó de la lesión que sufrió pero le quedaron secuelas (renguea). Es un poco asustadiza, busca una familia que la mime',
    imagen: '../assets/images/id-3.jpg',
  },
];

export interface amiguitos {
  id: number;
  name: string;
  raza: string;
  edad: string;
  description: string;
  fullDescription: string;
  imagen: string;
}
