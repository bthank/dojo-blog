// this is a custom hook; a reusable component
// custom hooks must start with the word 'use' or they will not work
import { useState, useEffect } from "react";

// the url(or endpoint) to be fetched will be passed in
const useFetch = (url) => {

    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        console.log('useEffect ran');

        setTimeout(() => {

            fetch(url)  // this is a promise that needs to resolve
                .then(response => {   // the response object is not the data.  We need to do something to get the data from the response object.
                    console.log('response: ',response);
                    if (!response.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return response.json()  // the json method gets the data from the response object in json format, but this also needs time to resolve
                })
                .then((data) => {          // add the 2nd then to execute after the prior then resolved so we can be sure we got the response data at this point 
                    console.log('data: ',data);
                    setData(data);
                    setIsPending(false);
                    setError(null); // we don't want there to be any error value if we get the data
                
                })
                .catch((err) => { // this catch block catches any kind of network error
                               // and it will fire a function when it does
                    console.log('err: ',err);
                    console.log('err.message: ',err.message);
                    setIsPending(false); // if we get an error, then we don't want to tell the user that we are loading the page
                    setError(err.message);
                    console.log('useState error: ', error);
                });

        }, 1000);  // the 2nd arg of 1000 will cause the fetch to fire after 1000 ms or 1 second

        },[]);  // note 2nd arg of [] which is the dependency array

        // this custom hook will return these values to the caller
        return {data, isPending, error};

};

export default useFetch;