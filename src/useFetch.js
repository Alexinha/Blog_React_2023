/** this is a file that contains custom hooks */
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    // hook - useState makes reactive value and change it dynamically 
    // this hook returns 2 values (variable and a function to change values), we use an array to grab them 
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); // by default set to true, only when data is successfully fetched set to false
    const [error, setError] = useState(null);


    // runs every render, [ ] dependency array as the 2nd argument, when it's empty it only runs at first render
    // when [] contains url, means whenever the url changes it reruns to fetch data from new end point
    // fetch data from json server
    // to initialize json server: npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        setTimeout(() => {
            fetch(url) // do not hard-code the url end point
            .then(res => { // get the response object first
                if(!res.ok){
                    throw Error("Could not fetch data from resource!");
                }
                return res.json(); // use json() to pass json into jabascript object for us
            })
            .then((data)=>{
                setData(data);
                setIsPending(false);
                setError(null); // when successfully fetched data, delete the error message from previous try
            })
            .catch((err)=>{
                setError(err.message); // grab the message property of the error
                setIsPending(false); // when there is an error, dont show pending message

            });
        }, 500);  
    }, [url]);

    // return an object (can be array too) from the hook
    return {data, isPending, error};

}

export default useFetch;