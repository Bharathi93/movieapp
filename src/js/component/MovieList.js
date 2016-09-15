var React = require('react');
var DisplayMovie=require('./DisplayMovie');
var MovieList = React.createClass({
  render:function(){
    var commentNodes = this.props.list.map(function(detail){
      return (
        <DisplayMovie Title={detail.Title} Year={detail.Year} Poster={detail.Poster} />
    );
  });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
}
});
module.exports = MovieList;
