import { useState } from "preact/hooks";

export function Counter(){
    const [counter, setCounter] = useState(0)

    return (
        <>
            <span class="text-yellow-300 text-xl mr-4" >{counter}</span>
            <button class="border px-4 pt-2 text-xl mr-4 text-white " 
                onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="border px-4 pt-2 text-xl mr-4 text-white"  
                onClick={() => setCounter(counter => counter - 1)}>-</button>
        </>
    )
}