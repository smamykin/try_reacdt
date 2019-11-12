import * as React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default class GoodsList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            goods: props.goods
        }
    }

    onSearch(evt) {
        let goods  = this.props.goods.filter((v) => v.name.indexOf(evt.target.value) >= 0);

        this.setState({goods});
    }

    render() {
        return (
            <div className={'catalog'}>
                <div className="catalog-search">
                    <input type="text" className="catalog-search__input" placeholder={'Search'} onChange={(evt)=>this.onSearch(evt)}/>
                </div>
                <div className={'catalog-list'}>
                    {this.state.goods.map((v) => {
                        let style = {
                            backgroundImage: 'url("/images/image 1.png")'
                        };
                       return (
                           <div key={v.id} className="catalog-list__item catalog-card" style={style}>
                               <Link to={'/goods/' + v.id} className="catalog-card__title">{v.name} </Link>
                               <div className="catalog-card__buy-button" onClick={this.props.buy(v)}>Купит</div>
                           </div>
                       );
                    })}
                </div>
            </div>
        );
    }
}

GoodsList.propTypes = {
    getGoods: PropTypes.arrayOf(PropTypes.exact(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }
    )),
    buy: PropTypes.func.isRequired
};