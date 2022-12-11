import React, { createContext, useState } from 'react';

export const Context  = createContext();

function UserContext({children}) {
    const [data, setData] = useState();
    return (
        <Context.Provider
            value={{data, setData}}
        >
            {
                children
            }
        </Context.Provider>
    );
}

export default UserContext;