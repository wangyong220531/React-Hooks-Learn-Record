import React, { useRef, useState, useEffect } from "react"

function UseRefTest() {
    const inputEl = useRef(null)
    function onBtnClick() {
        inputEl.current.value = "Hello AK"
        console.log(inputEl)
    }

    const [text, setText] = useState("诺手")
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log(textRef.current)
    })
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onBtnClick}>在input上展示文字</button>
            <input
                value={text}
                onChange={e => {
                    setText(e.target.value)
                }}
            />
        </>
    )
}

export default UseRefTest
