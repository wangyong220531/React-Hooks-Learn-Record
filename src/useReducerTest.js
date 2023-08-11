import React, { useReducer } from "react"

function ReducerTest() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case "add":
                return state + 1
            case "sub":
                return state - 1
            default:
                return state
        }
    }, 0)

    return (
        <>
            <div>现在的分数是：{count}</div>
            <button onClick={() => dispatch("add")}>add</button>
            <button onClick={() => dispatch("sub")}>sub</button>
        </>
    )
}

export default ReducerTest
