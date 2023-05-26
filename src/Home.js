/** this is the home component of the webpage, 
 * it displays blog contents 
 */
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {    
    // import the custom hooks
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            {/* use props to pass the parent's data (blog) into the child (bloglist) */}
            {/* conditional rendering: use blogs && to evaluate if blogs are still null. only til the blogs received the data from json they are outputted to the screen.  */}
            { data && <Bloglist blogs={data} title={new Date().toUTCString().slice(5, 16)}></Bloglist> }
            {/* <Bloglist blogs={blogs.filter((blog) => (blog.author === 'Alexina'))} title="Alexina's blogs"></Bloglist> */}
        </div>
    );
}

export default Home;