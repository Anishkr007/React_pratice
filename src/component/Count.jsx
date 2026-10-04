import { useState } from "react";

function Count(){
    const [count,setcount]=useState(0);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setcount(count+1)}>increase</button>
            <button onClick={()=>setcount(count-1)}>decrease</button>
            <h4>Number is {count%2===0?"Even":"Odd"}</h4>
        
        </div>

    );
}

export default Count;