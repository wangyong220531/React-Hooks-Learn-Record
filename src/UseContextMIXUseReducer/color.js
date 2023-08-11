import React, { createContext } from "react"

export const ColorContext = createContext({})

export const Color = props => {
    return <ColorContext.Provider value={{ color: "cyan" }}>{props.children}</ColorContext.Provider>
}
