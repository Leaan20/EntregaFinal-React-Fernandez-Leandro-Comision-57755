import { useState } from "react";

export default function ItemCount() {

    const [count,setCount] =useState(1);

    const handleSum = ()=> {
        setCount(count + 1);
    }
    const handleRest = ()=> {
        count >= 2 && setCount(count -1);
    }
    return (
        <>
            <button className="buttonHandler" onClick={handleSum}> + </button>
            <p className="productQuantity">{count}</p>
            <button className="buttonHandler" onClick={handleRest}> - </button>
        </>
    )
}