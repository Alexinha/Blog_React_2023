// import hook
import { useState } from 'react';
import { useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {    
    // hook - useState makes reactive value and change it dynamically 
    // this hook returns 2 values (variable and a function to change values), we use an array to grab them 
    const [blogs, setBlogs] = useState([
        {title: 'My New Website Using React', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis nec nulla in eleifend. Mauris quis ipsum justo. Nunc tempor quam augue, at viverra ex suscipit a.', author: 'Alexina', id: 1},
        {title: 'Welcome React!', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis nec nulla in eleifend. Mauris quis ipsum justo. Nunc tempor quam augue, at viverra ex suscipit a.', author: 'Mario', id: 2},
        {title: 'Web Dev Rules', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis nec nulla in eleifend. Mauris quis ipsum justo. Nunc tempor quam augue, at viverra ex suscipit a.', author: 'Alexina', id: 3}, 
    ]);

    const handleDelete = (id) => {
        // temp array to store new data(any blog that doesnt match the id)
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // runs every render, [ ] dependency array as the 2nd argument, when it's empty it only runs at first render
    // fetch data
    useEffect(() => {
        
    }, []);

    return (
        <div className="home">
            {/* use props to pass the parent's data (blog) into the child (bloglist) */}
            <Bloglist blogs={blogs} title="All blogs!" handleDelete={handleDelete}></Bloglist>
            {/* <Bloglist blogs={blogs.filter((blog) => (blog.author === 'Alexina'))} title="Alexina's blogs"></Bloglist> */}
        </div>
    );
}
 
export default Home;