/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;


var SuccessScreen = React.createClass({
  mixins: [ Router.State, Router.Navigation ],

  render: function() {
    return (
      <div className="success_screen">

        <div className="success_form">
          <h1>thanks</h1>
          <p>validuria emaili</p>
          <span>Your email:</span>
        </div>

      </div>
    );
  }
    
});
    
module.exports = SuccessScreen;