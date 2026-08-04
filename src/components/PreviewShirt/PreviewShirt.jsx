import { useState } from "react";

import "./PreviewShirt.css";


function PreviewShirt({

    product,
    front,
    back,
    nombre,
    numero,
    parche

}) {


const [lado,setLado] = useState("front");



const positions = product?.positions || {};



const namePosition =
positions.back?.name || {};



const numberPosition =
positions.back?.number || {};



const patchPosition =
positions.front?.patch?.[parche?.tipo] || {};







return (

<div className="preview">



<div className="preview-buttons">


<button

className={
lado === "front"
?
"active"
:
""
}

onClick={()=>
setLado("front")
}

>

Delante

</button>



<button

className={
lado === "back"
?
"active"
:
""
}

onClick={()=>
setLado("back")
}

>

Detrás

</button>



</div>







<div className="shirt-container">



<img

src={
lado === "front"
?
front
:
back
}

className="shirt-image"

alt={product?.nombre}

/>






{/* PARCHE */}

{

lado==="front" &&
parche &&

<img

src={parche.imagen}

alt={parche.nombre}

className="shirt-patch"

style={patchPosition}

/>

}







{/* NOMBRE */}

{

lado==="back" &&
nombre &&

<div

className="shirt-name"

style={namePosition}

>

{nombre.toUpperCase()}

</div>

}







{/* DORSAL */}

{

lado==="back" &&
numero &&

<div

className="shirt-number"

style={numberPosition}

>

{numero}

</div>

}



</div>


</div>

);

}


export default PreviewShirt;