/**
 * this is the blog details component. It displays full blog contents after the id of the corresponding 
 * blog is called as route parameter. 
 */
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    // use hooks to grab parameters from route, we named the parameters "id" in App.js
    const { id } = useParams();
    // reuse customized hook: useFetch (notice what it returns and its parameter!)
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    // delete blog
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/'); // go back to home page after a blog is deleted
        });
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>
                        { blog.title }
                    </h2>
                    <p>
                        Written by { blog.author }
                    </p>
                    <div>
                        { blog.body }
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;