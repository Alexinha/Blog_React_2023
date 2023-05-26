/**
 * this is the blog list component. It displays all the blog previews and is used in the home component.
 */
import { Link } from 'react-router-dom';
// grab the props object in the ()
const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
             { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>  
                </div>
            )) }
        </div>
    );
}
 
export default Bloglist;