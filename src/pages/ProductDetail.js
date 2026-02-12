const React = require('react');
const { useParams, useHistory } = require('react-router-dom');

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  return React.createElement('div', null,
    React.createElement('h1', null, `Product ${id}`),
    React.createElement('p', null, `Detailed view for product #${id}.`),
    React.createElement('p', null, 'Price: $29.99'),
    React.createElement('button', { onClick: () => history.push('/cart') }, 'Add to Cart'),
    React.createElement('button', { onClick: () => history.push('/products') }, 'Back to Products')
  );
}

module.exports = ProductDetail;
