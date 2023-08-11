import React, { useState, createContext, useContext } from "react"

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return <>点击了{count}次</>
}

function Example() {
    const [count, setCount] = useState(0)
    return (
        <>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </>
    )
}

export default Example
