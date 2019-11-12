import * as React from "react";
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './IM/_common.scss'
import Home from './IM/Home'
import GoodsList from './IM/GoodsList'
import Cart from './IM/Cart'

export default class IM extends React.Component
{
    render() {
        return (
            <Router>
                <header className="header">
                    <Link to='/' className={'header__link header__to_home'}>Main</Link>
                    <Link to='/goods' className={'header__link header__to_catalog'}>Catalog</Link>
                    <Link to='/cart' className={'header__link header__to_cart'}>Cart</Link>
                </header>
                <div className='container'>
                    <Switch>
                        <Route path='/'>
                            <h1 className="page_title">About</h1>
                            <Home/>
                        </Route>
                        <Route path='/goods'>
                            <h1 className="page_title">Catalog</h1>
                            <GoodsList/>
                        </Route>
                        <Route path='/cart'>
                            <h1 className="page_title">Cart</h1>
                            {/*<Cart/>*/}
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}

