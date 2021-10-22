import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

   // this shows how to use the useState hook in React to set state of a component
   // const [blogs,setBlogs] = useState([
   //      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
   //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
   //      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   //  ]);

    // initially set blogs to null and then have useEffect load blogs on the
    // first render with data coming from json server 
    const[blogs, setBlogs] = useState(null);

    const [name, setName] = useState('Mario');

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };
    */
 

    // the useEffect hook executes on every render or re-render
    // - never change the state of a component in the useEffect hook or it
    //   could lead to a never ending loop since changing state causes a re-render
    //   which causes a cal to useEffect which changes the state, which again
    //   causes a re-render, etc for infinity
    //
    // - the 2nd argument to useEffect is called the dependency array
    //     - passing an empty array [] will make sure that useEffect function 
    //       will only run 1 time, after the first render
    //     - passing dependency values meaning any state value that should trigger
    //       the useEffect function to run when they change   
    //         - useEffect will watch the value in the dependency array and only if
    //           it changes will it run the useEffect function     
    useEffect(() => {
        console.log('useEffect ran');
        fetch('http://localhost:8000/blogs')  // this is a promise that needs to resolve
            .then(response => {   // the response object is not the data.  We need to do something to get the data from the response object.
                return response.json()  // the json method gets the data from the response object in json format, but this also needs time to resolve
            })
            .then((data) => {          // add the 2nd then to execute after the prior then resolved so we can be sure we got the response data at this point 
                console.log('data: ',data);
                setBlogs(data);
              
            })
            .then((blogData) => {
                console.log('blogData: ',blogData);
            })
    },[]);

    return ( 
        <div className="home">
           
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         
        {/*}    <button onClick={() => setName('Luigi')}>Change name</button>
            <p>{ name }</p>
        */}
       </div>
     );
}
 
export default Home;