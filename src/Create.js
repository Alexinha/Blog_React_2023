/**
 * this is the "create" component for the webpage, it contains a form that lets 
 * users to input blog information, as well as a submission handler than pass the information into the 
 * json file in json format with the correct key value pair.
 */

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Alexinha");

    const [isPending, setIsPending] = useState(false);

    const history = useHistory(); // user history hook

    const handleSubmit = function(e){
        e.preventDefault(); // prevent from refreshing the page
        // create a blog object that can be stored in json 
        const blog = {title, body, author};

        setIsPending(true);
        // make post request
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
            // history.go(-1); // go back one step according to the user history after the info has been submitted
            history.push('/'); // go back to the home page 
        });
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required    
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                ></input>
                <label>Blog body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                    ></textarea>
                <label>Blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Alexinha">Alexinha</option>
                    <option value="Nikita">Nikita</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;