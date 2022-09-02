import { createContext, useState } from "react";

const GlobalContext = createContext()


export const GlobalProvider =({children})=>{

    const [watchList,setwatchlist] = useState([{title:'dune'}])

    function addtoList(movie){
        setwatchlist([movie,...watchList])
        console.log(watchList)
    }

    return(
       <GlobalContext.Provider value={{addtoList,watchList}} >
        {children}
       </GlobalContext.Provider>
    )
}

export default GlobalContext;