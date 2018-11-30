import React, { Component } from 'react';

class CommentsBox extends Component {
   state = {
      comment: '',
      comments: []
   };

   handleChange = event => {
      this.setState({ comment: event.target.value })
   }

   handleSubmit = event => {
      event.preventDefault();

      // TODO - call an action creator
      // and save the comment

      this.setState({ comment: '' });
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={this.state.comment} onChange={this.handleChange} />
            <div>
               <button>Submit</button>
            </div>
         </form>
      );
   }
}

export default CommentsBox;