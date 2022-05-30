import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { RegisterPageOne } from './RegisterPageOne';
import { RegisterPageTwo } from './RegisterPageTwo';

export const AllRoutes = () => {

    return (
        <div>
            <Routes>
            <Route path='/' element={<Dashboard/>}/>
                <Route path='/register/one' element={<RegisterPageOne/>}/>
                <Route path='/register/two' element={<RegisterPageTwo/>}/>
            </Routes>
        </div>
    )
}