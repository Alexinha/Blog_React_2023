// import hook
import { useState } from 'react';
import { useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {    
    // hook - useState makes reactive value and change it dynamically 
    // this hook returns 2 values (variable and a function to change values), we use an array to grab them 
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true); // by default set to true, only when data is successfully fetched set to false
    const [error, setError] = useState(null);

    // runs every render, [ ] dependency array as the 2nd argument, when it's empty it only runs at first render
    // fetch data from json server
    // to initialize json server: npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => { // get the response object first
            if(!res.ok){
                throw Error("Could not fetch data from resource!");
            }
            return res.json(); // use json() to pass json into jabascript object for us
        })
        .then((data)=>{
            setBlogs(data);
            setIsPending(false);
            setError(null); // when successfully fetched data, delete the error message from previous try
        })
        .catch((err)=>{
            setError(err.message); // grab the message property of the error
            setIsPending(false); // when there is an error, dont show pending message

        });
    }, []);

    return (
        <div className="home">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            {/* use props to pass the parent's data (blog) into the child (bloglist) */}
            {/* conditional rendering: use blogs && to evaluate if blogs are still null. only til the blogs received the data from json they are outputted to the screen.  */}
            { blogs && <Bloglist blogs={blogs} title="All blogs!"></Bloglist> }
            {/* <Bloglist blogs={blogs.filter((blog) => (blog.author === 'Alexina'))} title="Alexina's blogs"></Bloglist> */}
        </div>
    );
}

export default Home;