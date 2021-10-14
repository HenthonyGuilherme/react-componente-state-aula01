
import React, { useState } from "react";

export default function Contador(){
    const [n, Num] = useState(0);

    return(
        <div>

            <h1>Contador = {n}</h1>
            <button className='b1' onClick={() => Num(n + 1)}>Soma</button>
            <button className='b2' onClick={() => Num(n - 1)}>Subtrair</button>


        </div>
    );
}