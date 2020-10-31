import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostsForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          onChange={onChange}
          name="text"
          cols="30"
          rows="5"
          value={text}
          placeholder="Create a post"
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostsForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostsForm);
