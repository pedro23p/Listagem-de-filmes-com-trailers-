import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Filme from './pages/filme';
import Favoritos from './pages/favoritos';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/Favoritos" component={Favoritos}/> 
            </Switch>
        </BrowserRouter>
    )

}
export default Routes;