import React,{useState} from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [userDetailsModal, setUserDetailsModal] = useState(false);
    return (
        <Context.Provider value={{
            openSignIn,
            openSignUp,
            setOpenSignIn,
            setOpenSignUp,
            userDetailsModal,
            setUserDetailsModal
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}