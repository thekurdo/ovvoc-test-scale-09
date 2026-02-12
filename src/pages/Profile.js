const React = require('react');
const { useParams, useHistory } = require('react-router-dom');

function Profile() {
  const { userId } = useParams();
  const history = useHistory();
  return React.createElement('div', null,
    React.createElement('h1', null, 'Profile'),
    React.createElement('p', null, `Viewing profile for user: ${userId}`),
    React.createElement('button', { onClick: () => history.push('/dashboard') }, 'Back to Dashboard')
  );
}

module.exports = Profile;
