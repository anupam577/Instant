import { createContext, useState } from "react";


export const DataContext = createContext(null);

const data=[]
const DataProvider = ({ children }) => {
    const [ account, setAccount ] = useState(data);
        
    return (
        <DataContext.Provider value={{ 
            account, 
            setAccount 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;