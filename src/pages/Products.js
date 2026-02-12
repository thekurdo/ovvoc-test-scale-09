const React = require('react');
const { useHistory } = require('react-router-dom');

function Products() {
  const history = useHistory();
  const productIds = [1, 2, 3, 4, 5];
  return React.createElement('div', null,
    React.createElement('h1', null, 'Products'),
    React.createElement('p', null, 'Browse our product catalog.'),
    React.createElement('ul', null,
      productIds.map(function(id) {
        return React.createElement('li', { key: id },
          React.createElement('button', { onClick: () => history.push(`/products/${id}`) }, `Product ${id}`)
        );
      })
    ),
    React.createElement('button', { onClick: () => history.push('/cart') }, 'View Cart')
  );
}

module.exports = Products;
