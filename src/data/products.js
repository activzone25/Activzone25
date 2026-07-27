// ==========================================
// ACTIVZONE25 - PRODUCTS
// ==========================================


import barcaFront from "../assets/camisetas/barcelona/front.png";
import barcaBack from "../assets/camisetas/barcelona/back.png";

import madridFront from "../assets/camisetas/realmadrid/front.png";
import madridBack from "../assets/camisetas/realmadrid/back.png";




// ==========================================
// PRODUCTOS
// ==========================================


const products = [



// ==========================================
// FC BARCELONA
// ==========================================

{
id:1,
slug:"fc-barcelona-local-26-27",

nombre:"FC Barcelona",
equipo:"Barcelona",

liga:"LaLiga",
categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:barcaFront,
back:barcaBack,

disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"laliga",
"champions"
],


patchesPosition:{

laliga:{
top:"35%",
left:"22%",
width:"32px"
},

champions:{
top:"32%",
left:"22%",
width:"35px"
}

},


...defaultPositions

},



// ==========================================
// REAL MADRID
// ==========================================

{
id:2,

slug:"real-madrid-local-26-27",

nombre:"Real Madrid",
equipo:"Real Madrid",

liga:"LaLiga",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:madridFront,
back:madridBack,

disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"laliga",
"champions"
],


patchesPosition:{

laliga:{
top:"37%",
left:"34%",
width:"30px"
},

champions:{
top:"33%",
left:"22%",
width:"34px"
}

},


...defaultPositions

},



// ==========================================
// VILLARREAL
// ==========================================

{
id:3,

slug:"villarreal-local-26-27",

nombre:"Villarreal CF",
equipo:"Villarreal",

liga:"LaLiga",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:villarrealFront,
back:villarrealBack,

disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"laliga"
],


patchesPosition:{

laliga:{
top:"35%",
left:"22%",
width:"32px"
}

},


...defaultPositions

},



// ==========================================
// ATLETICO
// ==========================================

{
id:4,

slug:"atletico-local-26-27",

nombre:"Atlético de Madrid",
equipo:"Atlético",

liga:"LaLiga",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:atleticoFront,
back:atleticoBack,


disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"laliga"
],


patchesPosition:{

laliga:{
top:"36%",
left:"22%",
width:"32px"
}

},


...defaultPositions

},



// ==========================================
// BETIS
// ==========================================

{
id:5,

slug:"betis-local-26-27",

nombre:"Real Betis",
equipo:"Betis",

liga:"LaLiga",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:betisFront,
back:betisBack,


disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"laliga"
],


patchesPosition:{

laliga:{
top:"35%",
left:"22%",
width:"32px"
}

},


...defaultPositions

},



// ==========================================
// CELTA
// ==========================================

{
id:6,

slug:"celta-local-26-27",

nombre:"Celta de Vigo",
equipo:"Celta",

liga:"LaLiga",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:celtaFront,
back:celtaBack,


disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"laliga"
],


patchesPosition:{

laliga:{
top:"35%",
left:"22%",
width:"32px"
}

},


...defaultPositions

},

// ==========================================
// ARSENAL
// ==========================================

{
id:7,

slug:"arsenal-local-26-27",

nombre:"Arsenal",

equipo:"Arsenal",

liga:"Premier League",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:arsenalFront,
back:arsenalBack,


disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"champions"
],


patchesPosition:{

champions:{
top:"33%",
left:"22%",
width:"35px"
}

},


...defaultPositions

},



// ==========================================
// MANCHESTER CITY
// ==========================================

{
id:8,

slug:"manchester-city-local-26-27",

nombre:"Manchester City FC",

equipo:"City",

liga:"Premier League",

categoria:"Adulto",

temporada:"2026/27",

precio:25,


front:cityFront,
back:cityBack,


disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"champions"
],


patchesPosition:{

champions:{
top:"33%",
left:"22%",
width:"35px"
}

},


...defaultPositions

},



// ==========================================
// MANCHESTER UNITED
// ==========================================

{
id:9,

slug:"man-utd-local-26-27",

nombre:"Manchester United",

equipo:"Man Utd",

liga:"Premier League",

categoria:"Adulto",

temporada:"2026/27",

precio:25,

front:manutdFront,
back:manutdBack,


disponible:true,
personalizable:true,
parcheGratis:true,
nuevo:true,


parches:[
"champions"
],


patchesPosition:{

champions:{
top:"33%",
left:"22%",
width:"35px"
}

},


...defaultPositions

},

// ==========================================
// BAYERN MÜNCHEN
// ==========================================

{
    id:13,

    slug:"bayern-local-26-27",

    nombre:"Bayern München",

    equipo:"Bayern",

    liga:"Bundesliga",

    categoria:"Adulto",

    temporada:"2026/27",

    precio:25,

    front:bayernFront,

    back:bayernBack,


    disponible:true,

    personalizable:true,

    parcheGratis:true,

    nuevo:true,


    parches:[
        "champions"
    ],


    patchesPosition:{

        champions:{
            top:"33%",
            left:"22%",
            width:"35px"
        }

    },


    ...defaultPositions

},



// ==========================================
// BORUSSIA DORTMUND
// ==========================================

{

    id:14,

    slug:"borussia-dortmund-local-26-27",

    nombre:"Borussia Dortmund",

    equipo:"Dortmund",

    liga:"Bundesliga",

    categoria:"Adulto",

    temporada:"2026/27",

    precio:25,


    front:dortmundFront,

    back:dortmundBack,


    disponible:true,

    personalizable:true,

    parcheGratis:true,

    nuevo:true,


    parches:[
        "champions"
    ],


    patchesPosition:{

        champions:{
            top:"34%",
            left:"22%",
            width:"35px"
        }

    },


    ...defaultPositions

},



// ==========================================
// RB LEIPZIG
// ==========================================

{

    id:15,

    slug:"rb-leipzig-local-26-27",

    nombre:"RB Leipzig",

    equipo:"Leipzig",

    liga:"Bundesliga",

    categoria:"Adulto",

    temporada:"2026/27",

    precio:25,


    front:leipzigFront,

    back:leipzigBack,


    disponible:true,

    personalizable:true,

    parcheGratis:true,

    nuevo:true,


    parches:[
        "champions"
    ],


    patchesPosition:{

        champions:{
            top:"33%",
            left:"22%",
            width:"35px"
        }

    },


    ...defaultPositions

},



// ==========================================
// STUTTGART
// ==========================================

{

    id:16,

    slug:"stuttgart-local-26-27",

    nombre:"VfB Stuttgart",

    equipo:"Stuttgart",

    liga:"Bundesliga",

    categoria:"Adulto",

    temporada:"2026/27",

    precio:25,


    front:stuttgartFront,

    back:stuttgartBack,


    disponible:true,

    personalizable:true,

    parcheGratis:true,

    nuevo:true,


    parches:[
        "champions"
    ],


    patchesPosition:{

        champions:{
            top:"33%",
            left:"22%",
            width:"35px"
        }

    },


    ...defaultPositions

},



// ==========================================
// BAYER LEVERKUSEN
// ==========================================

{

    id:17,

    slug:"bayer-leverkusen-local-26-27",

    nombre:"Bayer Leverkusen",

    equipo:"Leverkusen",

    liga:"Bundesliga",

    categoria:"Adulto",

    temporada:"2026/27",

    precio:25,


    front:leverkusenFront,

    back:leverkusenBack,


    disponible:true,

    personalizable:true,

    parcheGratis:true,

    nuevo:true,


    parches:[
        "champions"
    ],


    patchesPosition:{

        champions:{
            top:"33%",
            left:"22%",
            width:"35px"
        }

    },


    ...defaultPositions

},



// ==========================================
// EINTRACHT FRANKFURT
// ==========================================

{

    id:18,

    slug:"eintracht-frankfurt-local-26-27",

    nombre:"Eintracht Frankfurt",

    equipo:"Frankfurt",

    liga:"Bundesliga",

    categoria:"Adulto",

    temporada:"2026/27",

    precio:25,


    front:frankfurtFront,

    back:frankfurtBack,


    disponible:true,

    personalizable:true,

    parcheGratis:true,

    nuevo:true,


    parches:[
        "champions"
    ],


    patchesPosition:{

        champions:{
            top:"33%",
            left:"22%",
            width:"35px"
        }

    },


    ...defaultPositions

}



];


// ==========================================
// EXPORT
// ==========================================

export default products;