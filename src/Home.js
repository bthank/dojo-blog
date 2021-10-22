import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

   // this shows how to use the useState hook in React to set state of a component
   // const [blogs,setBlogs] = useState([
   //      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
   //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
   //      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   //  ]);

    // initially set blogs to null and then have useEffect load blogs on the
    // first render with data coming from json server 

    // const [name, setName] = useState('Mario');


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

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            { // this is called a conditional template where the code on the
              // right of the && will only execute if the conditional on the left is true
                blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         
        {/*}    <button onClick={() => setName('Luigi')}>Change name</button>
            <p>{ name }</p>
        */}
       </div>
     );
}
 
export default Home;