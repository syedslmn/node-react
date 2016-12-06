var React = require("react");

module.exports = React.createClass({
    render:function(){
        return(
          <tr>
            <td>{this.props.info.name}</td>
            <td>{this.props.info.tagline}</td>
          </tr>
        )
    }
})
