import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/posts/post.actions'

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.item) {
    //       return ({ item: nextProps.item }) // <- this is setState equivalent
    //     }
    //     return null
    // }

    componentDidUpdate(prevProps, prevState) {
        // we access props with this.props
        // and state with this.state
        
        // prevState contains state before update
        // prevProps contains props before update

        if(prevProps.item !== this.props.item){
            this.props.items.unshift(this.props.item)
        }

    }

    render() {
        // this.props.posts.map
        const postItems = this.props.items.map(post => (
            <div key={ post.id }>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
            </div>
        ));

        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        )
    }
}

//prop-types is a form of validation
//it is important to validate what is coming in as a prop n your component. Below we said fetchPost should be an array and is required. If any of the conditions are not met, it throws an error in the console. This should only be used in development mode due to performance
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    // posts: PropTypes.array.isRequired
    items: PropTypes.array.isRequired,
    item: PropTypes.object.isRequired
}

//mapstatetoprops gets the state from redux and maps it to the component as props

// const mapStateToProps = state => ({
//     posts: state.posts.items //state.posts bcos we set the reducer as a value to the prop 'posts' in root reducer. we use .items cos items is where we stored all incoming posts from the fetch call in the post reducer state(slice. full state is in the rootRed)
//     //So to call this posts (which we are mapping to the component as props) in the component, we say this.props.posts
// })

const mapStateToProps = ({ posts: { items, item } }) => ({
    items,
    item
}) //same as above but object destructuring from state. Destructure posts from the state as well as items from posts

// const mapStateToProps = state => ({
//     items: state.posts.items,
//     item: state.posts.item
// })

export default connect(mapStateToProps, { fetchPosts })(Posts);