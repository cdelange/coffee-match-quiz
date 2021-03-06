
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function Result(props) {


    function refreshPage() {
        window.location.reload(false);
    }

    // a hook that mimics didcomponentmount
    useEffect(() => {
        let element = document.querySelector('.winner-img');
        element.classList.add('fade-in');
    }, []);

    return (
        <div className='row'>
            <div className='col-xs-12'>
                <h2 className='title'> Our pick for you is </h2>
            </div>
            <div className='col-xs-12 col-md-6'>
                <div className='img-container'>
                    <img className='img-responsive winner-img fadeIn' src="https://cdn.shopify.com/s/files/1/0939/8326/products/Fresh_Perspective-pichi_800x.png?v=1583808374" alt="Rise and Shine" />
                </div>
            </div>
            <div className='col-xs-12 col-md-6 coffee-text'>
                <h2 className='winner-string'> { props.winner } </h2>
                <h4 id='description'>A full-bodied dark roast Columbian with strong dark chocolate notes.  </h4>
                <hr />
                <ul>
                <li>Pairs well with cream</li>
                <li>Dark, earthy flavor</li>
                <li>Great for a drip machine</li>
                </ul>
                <form action="https://greatergoodsroasting.com/collections/all-coffee/products/agua-colorada-peru-1">
                    <button className="shop-button btn-block" type="submit"> Shop Now
                    </button>
                </form>
                <button className="restart-button btn-block" onClick={refreshPage}> Restart Quiz </button>
            </div>
        </div>
    );
}

//prop types
Result.propTypes = {
    winner: PropTypes.string.isRequired
}

export default Result;
