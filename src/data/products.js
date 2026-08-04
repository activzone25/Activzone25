// ======================================================
// ACTIVZONE25 - PRODUCTS
// ======================================================


// ======================================================
// IMPORTS CAMISETAS
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



// PREMIER

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


const positions = {

    front:{

        patch:{

            laliga:{
                top:"32%",
                left:"18%",
                width:"34px"
            },


            champions:{
                top:"32%",
                left:"18%",
                width:"34px"
            }

        }

    },


    back:{


        name:{

            top:"24%",
            left:"50%",
            transform:"translateX(-50%)"

        },


        number:{

            top:"40%",
            left:"50%",
            transform:"translateX(-50%)"

        }

    }

};




// ======================================================
// PRODUCTOS
// ======================================================


const products = [


{
id:1,

slug:"barcelona-26-27",

nombre:"FC Barcelona",

equipo:"Barcelona",

liga:"LaLiga",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:barcaFront,

back:barcaBack,

parches:[
"laliga",
"champions"
],


positions

},



{
id:2,

slug:"real-madrid-26-27",

nombre:"Real Madrid",

equipo:"Real Madrid",

liga:"LaLiga",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:madridFront,

back:madridBack,

parches:[
"laliga",
"champions"
],


positions

},



{
id:3,

slug:"betis-26-27",

nombre:"Real Betis",

equipo:"Betis",

liga:"LaLiga",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:betisFront,

back:betisBack,

parches:[
"laliga"
],


positions

},



{
id:4,

slug:"valencia-26-27",

nombre:"Valencia CF",

equipo:"Valencia",

liga:"LaLiga",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:valenciaFront,

back:valenciaBack,

parches:[
"laliga"
],


positions

},

// ======================================================
// PREMIER LEAGUE
// ======================================================


{
id:5,

slug:"arsenal-26-27",

nombre:"Arsenal FC",

equipo:"Arsenal",

liga:"Premier League",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:arsenalFront,

back:arsenalBack,

parches:[
"champions"
],


positions

},




{
id:6,

slug:"manchester-city-26-27",

nombre:"Manchester City",

equipo:"Manchester City",

liga:"Premier League",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:cityFront,

back:cityBack,

parches:[
"champions"
],


positions

},





// ======================================================
// BUNDESLIGA
// ======================================================


{
id:7,

slug:"bayern-26-27",

nombre:"Bayern Munich",

equipo:"Bayern",

liga:"Bundesliga",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:bayernFront,

back:bayernBack,

parches:[
"champions"
],


positions

},





{
id:8,

slug:"dortmund-26-27",

nombre:"Borussia Dortmund",

equipo:"Dortmund",

liga:"Bundesliga",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:dortmundFront,

back:dortmundBack,

parches:[
"champions"
],


positions

},






// ======================================================
// LIGUE 1
// ======================================================


{
id:9,

slug:"psg-26-27",

nombre:"Paris Saint-Germain",

equipo:"PSG",

liga:"Ligue 1",

temporada:"2026/27",

categoria:"Adulto",

precio:25,

nuevo:true,

disponible:true,

front:parisFront,

back:parisBack,

parches:[
"champions"
],


positions

}





];



// ======================================================
// EXPORT
// ======================================================


export default products;