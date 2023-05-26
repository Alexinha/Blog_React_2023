import { useParams } from "react-router-dom";

const BlogDetails = () => {

    // use hooks to grab parameters from route, we named the parameters "id" in App.js
    const { id } = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details- { id }</h2>
        </div>
    );
}
 
export default BlogDetails;