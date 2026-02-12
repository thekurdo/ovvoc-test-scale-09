const React = require('react');
const { useHistory } = require('react-router-dom');

function Cart() {
  const history = useHistory();
  return React.createElement('div', null,
    React.createElement('h1', null, 'Shopping Cart'),
    React.createElement('p', null, 'Your cart is empty.'),
    React.createElement('button', { onClick: () => history.push('/products') }, 'Continue Shopping'),
    React.createElement('button', { onClick: () => history.push('/login') }, 'Checkout')
  );
}

module.exports = Cart;
