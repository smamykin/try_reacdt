import * as React from "react";
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './IM/_common.scss'
import Home from './IM/Home'
import GoodsList from './IM/GoodsList'
import Cart from './IM/Cart'
import CatalogItem from './IM/CatalogItem'

export default class IM extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }
    getGoods(){
        let result = [];
        for (let i = 9; i--;){
            result.push({id: i, name: `Product Name ${i}`, price: 33})
        }

        return result;
    }
    buy(product) {
        let isAddAlready = false,
            cart = this.state.cart.map((v) => {
            if (v.product.id  === product.id){
                v.quantity += 1;
                isAddAlready = true;
            }
            return v;
        });
        if (!isAddAlready){
            cart.push({quantity:1, product})
        }
        this.setState({cart});

    }

    render() {
        console.log(this.state.cart);
        return (
            <Router>
                <header className="header">
                    <Link to='/' className={'header__link header__to_home'}>Main</Link>
                    <Link to='/goods' className={'header__link header__to_catalog'}>Catalog</Link>
                    <Link to='/cart' className={'header__link header__to_cart'}>Cart</Link>
                </header>
                <div className='container'>
                    <Switch>
                        <Route path='/goods'>
                            <Switch>
                                <Route path='/goods/:id'>
                                    <CatalogItem getItemById={(id)=> {
                                        return this.getGoods().find((v) => {
                                            return v.id = id;
                                        });
                                    }}/>
                                </Route>
                                <Route path='/goods'>
                                    <h1 className="page_title">Catalog</h1>
                                    <GoodsList buy={(v)=>this.buy(v)} goods={this.getGoods()}/>
                                </Route>
                            </Switch>
                        </Route>
                        <Route path='/cart'>
                            <h1 className="page_title">Cart</h1>
                            <Cart cart={this.state.cart}/>
                        </Route>
                        <Route path='/'>
                            <h1 className="page_title">About</h1>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

