import barcelona from "../assets/camisetas/barcelona-local.png";
import realMadrid from "../assets/camisetas/real-madrid-local.png";

const products = [
  {
    id: 1,
    slug: "fc-barcelona-local-26-27",

    nombre: "FC Barcelona",
    equipo: "Barcelona",

    liga: "LaLiga",
    categoria: "Adulto",

    temporada: "2026/27",

    precio: 25,

    imagen: barcelona,

    disponible: true,
    personalizable: true,
    parcheGratis: true,

    nuevo: true,
    oferta: false
  },

  {
    id: 2,
    slug: "real-madrid-local-26-27",

    nombre: "Real Madrid",
    equipo: "Real Madrid",

    liga: "LaLiga",
    categoria: "Adulto",

    temporada: "2026/27",

    precio: 25,

    imagen: realMadrid,

    disponible: true,
    personalizable: true,
    parcheGratis: true,

    nuevo: true,
    oferta: false
  }
];

export default products;