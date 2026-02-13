const React = require('react');
const { useNavigate, useLocation } = require('react-router-dom');

function NotFound() {
  const history = useNavigate();
  const location = useLocation();
  return React.createElement('div', null,
    React.createElement('h1', null, '404 - Not Found'),
    React.createElement('p', null, `No match for path: ${location.pathname}`),
    React.createElement('button', { onClick: () => history.push('/') }, 'Go Home')
  );
}

module.exports = NotFound;
