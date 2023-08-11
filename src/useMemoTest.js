import React, { useMemo, useState } from "react"

function UseMemoTest() {
    const [eyu, setEyu] = useState("鳄鱼")
    const [nuoShou, setNuoShou] = useState("诺手")

    return (
        <>
            <button onClick={() => setEyu("鳄鱼nb")}>{eyu}</button>
            <button onClick={() => setNuoShou("诺手nb")}>{nuoShou}</button>
            <Child name={eyu}>{nuoShou}</Child>
        </>
    )
}

function Child({ name, children }) {
    function changeEYu() {
        console.log(1)
        return name
    }
    const actionEYu = 
    useMemo(() => changeEYu(name), [name])

    return <>{actionEYu}</>
}

export default UseMemoTest
