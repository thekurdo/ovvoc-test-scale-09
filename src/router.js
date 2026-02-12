const React = require('react');
const { Switch, Route, Redirect, useHistory, useLocation } = require('react-router-dom');
const Home = require('./pages/Home');
const About = require('./pages/About');
const Dashboard = require('./pages/Dashboard');
const Profile = require('./pages/Profile');
const Settings = require('./pages/Settings');
const Login = require('./pages/Login');
const Products = require('./pages/Products');
const ProductDetail = require('./pages/ProductDetail');
const Cart = require('./pages/Cart');
const NotFound = require('./pages/NotFound');

function AppRouter() {
  return React.createElement(Switch, null,
    React.createElement(Route, { exact: true, path: '/', component: Home }),
    React.createElement(Route, { path: '/about', component: About }),
    React.createElement(Route, { path: '/dashboard', component: Dashboard }),
    React.createElement(Route, { path: '/profile/:userId', component: Profile }),
    React.createElement(Route, { path: '/settings', component: Settings }),
    React.createElement(Route, { path: '/login', component: Login }),
    React.createElement(Route, { exact: true, path: '/products', component: Products }),
    React.createElement(Route, { path: '/products/:id', component: ProductDetail }),
    React.createElement(Route, { path: '/cart', component: Cart }),
    React.createElement(Redirect, { from: '/old-home', to: '/' }),
    React.createElement(Route, { component: NotFound })
  );
}

module.exports = AppRouter;
