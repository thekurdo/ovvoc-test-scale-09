const React = require('react');
const { useMatch, useNavigate } = require('react-router-dom');

function Settings() {
  const match = useMatch();
  const history = useNavigate();
  return React.createElement('div', null,
    React.createElement('h1', null, 'Settings'),
    React.createElement('p', null, `Current path: ${match.path}`),
    React.createElement('p', null, 'Manage your account settings and preferences.'),
    React.createElement('button', { onClick: () => history.push('/dashboard') }, 'Back to Dashboard')
  );
}

module.exports = Settings;
