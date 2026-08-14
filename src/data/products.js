// ======================================================
// ACTIVZONE25
// PRODUCTS
// ======================================================


// ======================================================
// ADULT IMAGES
// ======================================================

// LaLiga
import barcaFront from "../assets/camisetas/barcelona/front.png";
import barcaBack from "../assets/camisetas/barcelona/back.png";

import madridFront from "../assets/camisetas/realmadrid/front.png";
import madridBack from "../assets/camisetas/realmadrid/back.png";

import betisFront from "../assets/camisetas/betis/front.png";
import betisBack from "../assets/camisetas/betis/back.png";

import valenciaFront from "../assets/camisetas/valencia/front.png";
import valenciaBack from "../assets/camisetas/valencia/back.png";

// Premier League
import arsenalFront from "../assets/camisetas/arsenal/front.png";
import arsenalBack from "../assets/camisetas/arsenal/back.png";

import cityFront from "../assets/camisetas/city/front.png";
import cityBack from "../assets/camisetas/city/back.png";

// Bundesliga
import bayernFront from "../assets/camisetas/bayern/front.png";
import bayernBack from "../assets/camisetas/bayern/back.png";

import dortmundFront from "../assets/camisetas/dortmund/front.png";
import dortmundBack from "../assets/camisetas/dortmund/back.png";

// Ligue 1
import parisFront from "../assets/camisetas/paris/front.png";
import parisBack from "../assets/camisetas/paris/back.png";


// ======================================================
// KIDS IMAGES
// ======================================================

import arsenalKidFront from "../assets/camisetas/nino/arsenal/front.png";
import arsenalKidBack from "../assets/camisetas/nino/arsenal/back.png";

import barcaKidFront from "../assets/camisetas/nino/barcelona/front.png";
import barcaKidBack from "../assets/camisetas/nino/barcelona/back.png";

import betisKidFront from "../assets/camisetas/nino/betis/front.png";
import betisKidBack from "../assets/camisetas/nino/betis/back.png";

import cityKidFront from "../assets/camisetas/nino/city/front.png";
import cityKidBack from "../assets/camisetas/nino/city/back.png";

import parisKidFront from "../assets/camisetas/nino/paris/front.png";
import parisKidBack from "../assets/camisetas/nino/paris/back.png";

import madridKidFront from "../assets/camisetas/nino/realmadrid/front.png";
import madridKidBack from "../assets/camisetas/nino/realmadrid/back.png";


// ======================================================
// CUSTOMIZATION POSITIONS
// ======================================================

const defaultPositions = {
    patch: {
        top: "34%",
        left: "22%",
        width: "54px",
        transform: "translate(-50%, -50%)",
        zIndex: 3
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
// BASE CONFIGURATION
// ======================================================

const baseProduct = {
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

const adultProduct = {
    ...baseProduct,
    categoria: "Adulto"
};

const kidProduct = {
    ...baseProduct,
    categoria: "Niño"
};


// ======================================================
// PRODUCTS
// ======================================================

const products = [
    // Adulto — LaLiga
    {
        ...adultProduct,

        id: 1,
        slug: "barcelona-26-27",

        nombre: "FC Barcelona",
        equipo: "Barcelona",
        liga: "LaLiga",

        front: barcaFront,
        back: barcaBack,

        parches: ["laliga", "champions"]
    },

    {
        ...adultProduct,

        id: 2,
        slug: "real-madrid-26-27",

        nombre: "Real Madrid",
        equipo: "Real Madrid",
        liga: "LaLiga",

        rating: 5,
        opiniones: 214,

        front: madridFront,
        back: madridBack,

        parches: ["laliga", "champions"]
    },

    {
        ...adultProduct,

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

        parches: ["laliga"]
    },

    {
        ...adultProduct,

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

        parches: ["laliga"]
    },

    // Adulto — Premier League
    {
        ...adultProduct,

        id: 5,
        slug: "arsenal-26-27",

        nombre: "Arsenal FC",
        equipo: "Arsenal",
        liga: "Premier League",

        stock: 15,
        opiniones: 139,

        front: arsenalFront,
        back: arsenalBack,

        parches: ["champions"]
    },

    {
        ...adultProduct,

        id: 6,
        slug: "manchester-city-26-27",

        nombre: "Manchester City",
        equipo: "Manchester City",
        liga: "Premier League",

        stock: 17,
        opiniones: 145,

        front: cityFront,
        back: cityBack,

        parches: ["champions"]
    },

    // Adulto — Bundesliga
    {
        ...adultProduct,

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

        parches: ["champions"]
    },

    {
        ...adultProduct,

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

        parches: ["champions"]
    },

    // Adulto — Ligue 1
    {
        ...adultProduct,

        id: 9,
        slug: "psg-26-27",

        nombre: "Paris Saint-Germain",
        equipo: "PSG",
        liga: "Ligue 1",

        stock: 16,
        opiniones: 158,

        front: parisFront,
        back: parisBack,

        parches: ["champions"]
    },

    // Niño — LaLiga
    {
        ...kidProduct,

        id: 10,
        slug: "barcelona-nino-26-27",

        nombre: "FC Barcelona Niño",
        equipo: "Barcelona",
        liga: "LaLiga",

        front: barcaKidFront,
        back: barcaKidBack,

        parches: ["laliga", "champions"]
    },

    {
        ...kidProduct,

        id: 11,
        slug: "real-madrid-nino-26-27",

        nombre: "Real Madrid Niño",
        equipo: "Real Madrid",
        liga: "LaLiga",

        front: madridKidFront,
        back: madridKidBack,

        parches: ["laliga", "champions"]
    },

    {
        ...kidProduct,

        id: 12,
        slug: "betis-nino-26-27",

        nombre: "Real Betis Niño",
        equipo: "Betis",
        liga: "LaLiga",

        stock: 12,
        rating: 4.8,
        opiniones: 67,

        front: betisKidFront,
        back: betisKidBack,

        parches: ["laliga"]
    },

    // Niño — Premier League
    {
        ...kidProduct,

        id: 13,
        slug: "arsenal-nino-26-27",

        nombre: "Arsenal FC Niño",
        equipo: "Arsenal",
        liga: "Premier League",

        stock: 15,
        opiniones: 139,

        front: arsenalKidFront,
        back: arsenalKidBack,

        parches: ["champions"]
    },

    {
        ...kidProduct,

        id: 14,
        slug: "manchester-city-nino-26-27",

        nombre: "Manchester City Niño",
        equipo: "Manchester City",
        liga: "Premier League",

        stock: 17,
        opiniones: 145,

        front: cityKidFront,
        back: cityKidBack,

        parches: ["champions"]
    },

    // Niño — Ligue 1
    {
        ...kidProduct,

        id: 15,
        slug: "psg-nino-26-27",

        nombre: "Paris Saint-Germain Niño",
        equipo: "PSG",
        liga: "Ligue 1",

        stock: 16,
        opiniones: 158,

        front: parisKidFront,
        back: parisKidBack,

        parches: ["champions"]
    }
];


export default products;