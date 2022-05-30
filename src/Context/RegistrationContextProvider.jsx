// Write code for Registration context
import { useState } from 'react';
import { createContext} from 'react';

export const RegistrationContext = createContext();

export const RegistrationContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState();
    return (
        <RegistrationContext.Provider value={[isAuth]}>
            { children }
        </RegistrationContext.Provider>
    )
}
