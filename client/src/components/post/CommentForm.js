import React, { useState } from "react";
import PropTypes from "prop-types";
import { addComment } from "../../actions/post";
import { connect } from "react-redux";

const PostForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText("");
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Leave A Comment</h3>
      </div>
      <form class="form my-1" onSubmit={onSubmit}>
        <textarea
          onChange={onChange}
          name="text"
          cols="30"
          rows="5"
          value={text}
          placeholder="Comment on this post"
          required
        ></textarea>
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(PostForm);
