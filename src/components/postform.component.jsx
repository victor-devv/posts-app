import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createPost } from '../redux/posts/post.actions';

class PostForm extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        //call createPost action
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="body">Body: </label><br/>
                        <textarea name="body" onChange={this.onChange} cols="30" rows="10" value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);