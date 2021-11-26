import React, {useState} from "react";
import Counter from "./components/Counter";

import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS", body: "Description"},
        {id: 2, title: "JS1", body: "Description"},
        {id: 3, title: "JS2", body: "Description"},
        {id: 4, title: "JS3", body: "Description"},
        {id: 5, title: "JS4", body: "Description"},
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: "Python", body: "Description"},
        {id: 2, title: "Python2", body: "Description"},
        {id: 3, title: "Python3", body: "Description"},
        {id: 4, title: "Python4", body: "Description"},
        {id: 5, title: "Python5", body: "Description"},
    ])

    return (
        <div className="App">
            {/*<Counter/>*/}

            <form action="">
                <input type="text" placeholder='Post name'/>
                <input type="text" placeholder='Post description'/>
                <button>Create post</button>
            </form>
            <PostList posts={posts} title="Post JS" />
            <PostList posts={posts2} title="Post Python" />
        </div>
    );
}

export default App;
