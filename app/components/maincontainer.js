var React = require('react');
var styles = require('../styles');

var MainContainer = React.createClass({
    render: function() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}> 
                {this.props.children}
            </div>
        )
    }
});

module.exports = MainContainer;