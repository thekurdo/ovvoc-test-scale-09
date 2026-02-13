const React = require('react');
const { useNavigate, useLocation } = require('react-router-dom');

function Login() {
  const history = useNavigate();
  const location = useLocation();
  const from = location.state && location.state.from ? location.state.from.pathname : '/dashboard';
  return React.createElement('div', null,
    React.createElement('h1', null, 'Login'),
    React.createElement('p', null, `You will be redirected to: ${from}`),
    React.createElement('form', { onSubmit: function(e) { e.preventDefault(); history.push(from); } },
      React.createElement('input', { type: 'text', placeholder: 'Username' }),
      React.createElement('input', { type: 'password', placeholder: 'Password' }),
      React.createElement('button', { type: 'submit' }, 'Sign In')
    )
  );
}

module.exports = Login;
