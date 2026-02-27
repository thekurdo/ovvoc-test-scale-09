const React = require('react');
const { useNavigate } = require('react-router-dom');

function Home() {
  const history = useNavigate();
  return React.createElement('div', null,
    React.createElement('h1', null, 'Home'),
    React.createElement('p', null, 'Welcome to the homepage'),
    React.createElement('button', { onClick: () => history.push('/about') }, 'Go to About'),
    React.createElement('button', { onClick: () => history.push('/products') }, 'Browse Products')
  );
}

module.exports = Home;
