const React = require('react');
const { useHistory } = require('react-router-dom');

function About() {
  const history = useHistory();
  return React.createElement('div', null,
    React.createElement('h1', null, 'About Us'),
    React.createElement('p', null, 'Learn more about our company and mission.'),
    React.createElement('button', { onClick: () => history.push('/') }, 'Back to Home')
  );
}

module.exports = About;
