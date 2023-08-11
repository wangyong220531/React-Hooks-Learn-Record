import React, { useRef } from "react"

function UseRefTest() {
    const inputEl = useRef(null)
    function onBtnClick() {
        inputEl.current.value = "Hello AK"
        console.log(inputEl);
    }

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onBtnClick}>在input上展示文字</button>
        </>
    )
}

export default UseRefTest
