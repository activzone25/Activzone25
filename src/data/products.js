import barcaFront from "../assets/camisetas/barcelona/front.png";
import barcaBack from "../assets/camisetas/barcelona/back.png";

import madridFront from "../assets/camisetas/realmadrid/front.png";
import madridBack from "../assets/camisetas/realmadrid/back.png";

const defaultPositions = {

    namePosition:{
        top:"23%",
        left:"50%"
    },

    numberPosition:{
        top:"34%",
        left:"50%"
    }

};

const products = [

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

    oferta:false,

    parches:[
        "laliga",
        "champions"
    ],

    patchesPosition:{

        laliga:{
            top:"35%",
            left:"22%",
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

    oferta:false,

    parches:[
        "laliga",
        "champions"
    ],

    patchesPosition:{

        laliga:{
            top:"38%",
            left:"34%",
            width:"28px"
        },

        champions:{
            top:"34%",
            left:"22%",
            width:"32px"
        }

    },

    ...defaultPositions

}

];

export default products;