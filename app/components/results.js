var React = require('react');
var PropTypes = React.PropTypes;

function puke(object) {
    return JSON.stringify(object,null, ' ');
}

function Results (props) {
    return (
        <div> {puke(props)} </div>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}


module.exports = Results;