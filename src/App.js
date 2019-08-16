import React, {Component} from 'react';
import './App.css';
import Search from "./components/Search";
import Posts from "./components/Posts";
import {getTopHeadlines} from "./actions/PostsActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types'

class App extends Component {

    componentDidMount() {

        this.props.getTopHeadlines();

    }

    static propTypes = {

        getTopHeadlines: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,

    };

    render() {

        const {loading, news} = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1>NRead</h1>
                </header>
                <Search />
                <Posts load={loading} posts={news}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({

    news: state.posts.news,
    loading: state.posts.load

});


export default connect(mapStateToProps, {getTopHeadlines})(App);