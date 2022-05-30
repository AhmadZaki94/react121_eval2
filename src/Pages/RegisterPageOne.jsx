import { useContext } from 'react';
import { RegistrationContext } from '../Context/RegistrationContextProvider'
export const RegisterPageOne = () => {

    return (
        <div>
                <input type="text" placeholder="Enter UserName" />
                <input type="text" placeholder="Enter Email"/>
                <button>Submit</button>
        </div>
    )
}