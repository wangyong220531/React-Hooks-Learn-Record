import React, { useState } from "react"

function Example() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>You clicked {count} times</div>
            <button onClick={() => setCount(count + 1)}>点击</button>
        </>
    )
}

export default Example
