import React, { Component } from 'react';

class CommentsBox extends Component {
   render() {
      return (
         <form>
            <h4>Add a Comment</h4>
            <textarea />
            <div>
               <button>Submit</button>
            </div>
         </form>
      );
   }
}

export default CommentsBox;