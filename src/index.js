import React from "react"
import ReactDOM from "react-dom/client"
// import UseContextTest from "./useContextTest"
// import UseReducerTest from "./useReducerTest"
// import UseContextMIXUseReducer from "./UseContextMIXUseReducer/useContextMIXuseReducer"
// import UseMemoTest from "./useMemoTest"
import UseRefTest from "./useRefTest"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        {/* <UseContextTest /> */}
        {/* <UseReducerTest /> */}
        {/* <UseContextMIXUseReducer /> */}
        {/* <UseMemoTest /> */}
        <UseRefTest/>
    </React.StrictMode>
)
