var React = require('react');
var DisplayMovie = React.createClass({
  render:function(){
    return(
      <div className="well">
        <div className="row" >
          <div className="col-sm-3">
          <div className="thumbnail">
          <img src={this.props.Poster} alt="image"></img>
          </div>
          </div>
          <div className="col-sm-9">

          <div class="list-group">

            <div class="list-group-item">

              <h3 class="list-group-item-heading">Movie Name:<h4>{this.props.Title}</h4></h3>

              <h3 class="list-group-item-text">Year:<h4>{this.props.Year}</h4></h3>
              <input className="btn btn-warning" value="Favourite"/>
            
            </div>

          </div>
      </div>
      </div>
      </div>
    );
  }
});
module.exports = DisplayMovie;
