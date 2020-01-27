import { rol } from '../classes/rol';

export const ROL: rol[]=[
    {
        id: 1,
        name: 'Lobo',
        description: 'Tu eres el Lobo alfa, el origen del miedo, el cazador de cazadores. Cada noche, podras escoger si quieres o no comerte a alguien en el pueblo.',
        class: 'Maldad',
        img: '../assets/img/lobo.png'
    },
    {
        id: 2,
        name: 'Angel',
        description: 'Tu eres el angel guardian, cada noche, podras decidir a quien quieres proteger, si esta persona esta destinada a morir en la mañana, tu divina providencia lo evitará.',
        class: 'Aldea',
        img: '../assets/img/angel.png'
    },
    {
        id: 3,
        name: 'Cazador',
        description: 'Tu eres el cazador, con tus ultimos alientos luego de morir de cualquier forma, podrás escoger a quien asesinar.',
        class: 'Aldea',
        img: '../assets/img/cazador.png'
    },
    {
        id: 4,
        name: 'Prostituta',
        description: 'Tu eres la prostituta, cada noche, haras tu trabajo con alguna persona, no podras saber su rol, si escoges al lobo, mueres en la mañana.',
        class: 'Aldea',
        img: '../assets/img/prostituta.png'
    },
    {
        id: 5,
        name: 'Aldeano',
        description: 'Tu eres un humilde aldeano, tu papel no es mas que participar en la discusion y en las votaciones.',
        class: 'Aldea',
        img: '../assets/img/aldeano.png'
    },
    {
        id: 6,
        name: 'Doble',
        description: 'Tu eres el doble, en la primera noche escogerás a alguien para tomar su rol durante el resto de la partida.',
        class: 'Otro',
        img: '../assets/img/doble.png'
    },
    {
        id: 7,
        name: 'Minion',
        description: 'Tu eres el minion, sabrás quien es el lobo y tendras que defenderlo a capa y espada, si el lobo gana, tu ganas.',
        class: 'Maldad',
        img: '../assets/img/minion.png'
    },
    {
        id: 8,
        name: 'Cupido',
        description: 'Tu eres cupido, con el poder de juntar dos almas hasta la muerte, si uno muere, el otro morirá de amor.',
        class: 'Aldea',
        img: '../assets/img/cupido.png'
    },
    {
        id: 9,
        name: 'Vidente',
        description: 'Tu eres el vidente, cada noche, podra conocer el rol de algun jugador.',
        class: 'Aldea',
        img: '../assets/img/vidente.png'
    },
    {
        id: 10,
        name: 'Mentiroso',
        description: 'Tu eres el mentiroso, tu papel es hacer de todo para que el pueblo te mate, si eso pasa, tu ganas, y el resto pierde.',
        class: 'Maldad',
        img: '../assets/img/mentiroso.png'
    },
  ];

/*
export class Cliente {
    id: number;
    name: string;
    description: string;
    class: string;
}
Cupido
Vidente
Mentiroso
*/