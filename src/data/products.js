// ======================================================
// ACTIVZONE25 - PRODUCTS
// ======================================================

// ======================================================
// IMPORTS
// ======================================================

// LALIGA
import barcaFront from "../assets/camisetas/barcelona/front.png";
import barcaBack from "../assets/camisetas/barcelona/back.png";

import madridFront from "../assets/camisetas/realmadrid/front.png";
import madridBack from "../assets/camisetas/realmadrid/back.png";

import betisFront from "../assets/camisetas/betis/front.png";
import betisBack from "../assets/camisetas/betis/back.png";

import valenciaFront from "../assets/camisetas/valencia/front.png";
import valenciaBack from "../assets/camisetas/valencia/back.png";

// PREMIER LEAGUE
import arsenalFront from "../assets/camisetas/arsenal/front.png";
import arsenalBack from "../assets/camisetas/arsenal/back.png";

import cityFront from "../assets/camisetas/city/front.png";
import cityBack from "../assets/camisetas/city/back.png";

// BUNDESLIGA
import bayernFront from "../assets/camisetas/bayern/front.png";
import bayernBack from "../assets/camisetas/bayern/back.png";

import dortmundFront from "../assets/camisetas/dortmund/front.png";
import dortmundBack from "../assets/camisetas/dortmund/back.png";

// LIGUE 1
import parisFront from "../assets/camisetas/paris/front.png";
import parisBack from "../assets/camisetas/paris/back.png";


// ======================================================
// POSICIONES GENERALES
// ======================================================

const defaultPositions = {

    patch: {
        top: "32%",
        left: "8%",
        width: "42px"
    },

    name: {
        top: "29%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },

    number: {
        top: "46%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

};


// ======================================================
// CONFIGURACIÓN COMÚN
// ======================================================

const baseProduct = {

    categoria: "Adulto",

    temporada: "2026/27",

    precio: 25,

    precioAnterior: 35,

    oferta: true,

    nuevo: true,

    disponible: true,

    stock: 20,

    rating: 4.9,

    opiniones: 100,

    personalizable: true,

    positions: defaultPositions

};


// ======================================================
// PRODUCTOS
// ======================================================

const products = [

    {
        ...baseProduct,

        id: 1,
        slug: "barcelona-26-27",

        nombre: "FC Barcelona",
        equipo: "Barcelona",
        liga: "LaLiga",

        front: barcaFront,
        back: barcaBack,

        parches: [
            "laliga",
            "champions"
        ]
    },


    {
        ...baseProduct,

        id: 2,
        slug: "real-madrid-26-27",

        nombre: "Real Madrid",
        equipo: "Real Madrid",
        liga: "LaLiga",

        rating: 5.0,
        opiniones: 214,

        front: madridFront,
        back: madridBack,

        parches: [
            "laliga",
            "champions"
        ]
    },


    {
        ...baseProduct,

        id: 3,
        slug: "betis-26-27",

        nombre: "Real Betis",
        equipo: "Betis",
        liga: "LaLiga",

        stock: 12,
        rating: 4.8,
        opiniones: 67,

        front: betisFront,
        back: betisBack,

        parches: [
            "laliga"
        ]
    },


    {
        ...baseProduct,

        id: 4,
        slug: "valencia-26-27",

        nombre: "Valencia CF",
        equipo: "Valencia",
        liga: "LaLiga",

        stock: 10,
        rating: 4.7,
        opiniones: 52,

        front: valenciaFront,
        back: valenciaBack,

        parches: [
            "laliga"
        ]
    },


    {
        ...baseProduct,

        id: 5,
        slug: "arsenal-26-27",

        nombre: "Arsenal FC",
        equipo: "Arsenal",
        liga: "Premier League",

        stock: 15,
        opiniones: 139,

        front: arsenalFront,
        back: arsenalBack,

        parches: [
            "champions"
        ]
    },


    {
        ...baseProduct,

        id: 6,
        slug: "manchester-city-26-27",

        nombre: "Manchester City",
        equipo: "Manchester City",
        liga: "Premier League",

        stock: 17,
        opiniones: 145,

        front: cityFront,
        back: cityBack,

        parches: [
            "champions"
        ]
    },


    {
        ...baseProduct,

        id: 7,
        slug: "bayern-26-27",

        nombre: "Bayern Munich",
        equipo: "Bayern",
        liga: "Bundesliga",

        stock: 14,
        rating: 4.8,
        opiniones: 96,

        front: bayernFront,
        back: bayernBack,

        parches: [
            "champions"
        ]
    },


    {
        ...baseProduct,

        id: 8,
        slug: "dortmund-26-27",

        nombre: "Borussia Dortmund",
        equipo: "Dortmund",
        liga: "Bundesliga",

        stock: 11,
        rating: 4.8,
        opiniones: 81,

        front: dortmundFront,
        back: dortmundBack,

        parches: [
            "champions"
        ]
    },


    {
        ...baseProduct,

        id: 9,
        slug: "psg-26-27",

        nombre: "Paris Saint-Germain",
        equipo: "PSG",
        liga: "Ligue 1",

        stock: 16,
        opiniones: 158,

        front: parisFront,
        back: parisBack,

        parches: [
            "champions"
        ]
    }

];


// ======================================================
// EXPORT
// ======================================================

export default products;