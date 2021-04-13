import React,{useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [userDetailsModal, setUserDetailsModal] = useState(false);
    const [uploadModal, setuploadModal] = useState(false);
    const [open, setOpen] = useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Context.Provider value={{
            openSignIn,
            openSignUp,
            setOpenSignIn,
            setOpenSignUp,
            userDetailsModal,
            setUserDetailsModal,
            uploadModal,
            setuploadModal,
            open,
            handleClose,
            setOpen
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}