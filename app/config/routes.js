var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/promptcontainer');
var hashHistory = ReactRouter.hashHistory;
var ConfirmBattleContainer = require('../containers/confirmbattlecontainer');
var ResultsContainer = require('../containers/resultscontainer');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home}/>
            <Route path='playerOne' header="Player One" component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} />
            <Route path='battle' component={ConfirmBattleContainer} />
            <Route path='results' component={ResultsContainer} />
        </Route>
    </Router>
);

module.exports = routes;
