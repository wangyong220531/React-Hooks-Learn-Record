import React from "react"
import ReactDOM from "react-dom/client"
// import UseContextTest from "./useContextTest"
// import UseReducerTest from "./useReducerTest"
import UseContextMIXUseReducer from "./UseContextMIXUseReducer/useContextMIXuseReducer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        {/* <UseContextTest /> */}
        {/* <UseReducerTest /> */}
        <UseContextMIXUseReducer />
    </React.StrictMode>
)
