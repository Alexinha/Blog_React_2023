/**
 * this is the blog details component. It displays full blog contents after the id of the corresponding 
 * blog is called as route parameter. 
 */
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    // use hooks to grab parameters from route, we named the parameters "id" in App.js
    const { id } = useParams();
    // reuse customized hook: useFetch (notice what it returns and its parameter!)
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

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
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;