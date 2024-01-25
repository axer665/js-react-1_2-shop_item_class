import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopItemClass extends Component {
    render() {
        const { item } = this.props;
        const price = typeof item.price === "number" ? item.currency + '' + item.price.toFixed(2) : item.price; 

        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">{item.descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">
                        {price}
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

ShopItemClass.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ShopItemClass;



