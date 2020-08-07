import React, {useState} from 'react';
export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button className="increment" onClick={() => setCounter(counter => counter+1)}> Increment Count </button> 
            <button className="decrement" onClick={() => setCounter(counter => counter-1)}> Decrement Count </button>
        </div>
    )
}

