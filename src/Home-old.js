import { useState } from "react";

const Home = () => {
    //let name = 'Mario';
    const [name,setName] = useState('Mario');
    const [age,setAge] = useState(25);

    const handleClick = (e) => {
       // name='Luigi';
       // console.log('hello ninjas ' + e + '  name:' + name);
       setName('John');
       setAge(30);
       console.log(name);
    };

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name + '   e:' + e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                    handleClickAgain('Mario',e)
                }}>Click me again</button>
        </div>
     );
}
 
export default Home;