import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState<number>(0) // so here you can use TS defining the type of the state
    return (
        <div>
            <p>Cups Ordered: {count}</p>
            <button onClick={() => setCount((c) => c+1)}> Order one more cup </button>
        </div>
    )
}