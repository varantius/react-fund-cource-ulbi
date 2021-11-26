import React, {useState} from 'react';

const Counter = () => {

    let [likes, setLikes] = useState(0)
    let [value, setValue] = useState('TExt input')

    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div>
            <h1>{value}</h1>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
            <hr/>
            <h1>{likes}</h1>


            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;