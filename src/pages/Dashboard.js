const React = require('react');
const { useNavigate } = require('react-router-dom');

function Dashboard() {
  const history = useNavigate();
  return React.createElement('div', null,
    React.createElement('h1', null, 'Dashboard'),
    React.createElement('p', null, 'Your personal dashboard with stats and metrics.'),
    React.createElement('button', { onClick: () => history.push('/settings') }, 'Go to Settings'),
    React.createElement('button', { onClick: () => history.push('/profile/me') }, 'View Profile')
  );
}

module.exports = Dashboard;
