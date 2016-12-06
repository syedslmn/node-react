var React = require("react");
var SchoolInfoHeader = require("./SchoolInfoHeader.jsx");

module.exports = React.createClass({
   render:function(){
       return(
         <div className="row">
              <div className="col-md-10">
                  <SchoolInfoHeader schools={this.props.schools} />
              </div>
          </div>
       )
   }
});
