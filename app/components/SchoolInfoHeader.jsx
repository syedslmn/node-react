var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")

module.exports = React.createClass({
    render:function(){
        return(
            <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-inverse">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={"school"+index} />
                            )
                        })
                    }
                  </tbody>
                </table>
            </div>
        )
    }
})
