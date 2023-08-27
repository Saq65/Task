import { useState } from "react"
import {Task} from "./task"

export function Home() {
     const [table,setTable] = useState();
     const [hideinput,sethideinput] = useState({display:'block'});
    function save(e){
        if(e.target.click){
          setTable(<Task/>);
          sethideinput({display:'none'})
          
        }
    }

    return (
       
            <div className="container-fluid">
                <table style={hideinput} className="table table-bordered border border-dark">
                    <tr>
                        <th>title</th>
                 <td><input type="text" name="" id="" /></td>  
                </tr>
                <tr>
                    <th>description</th>
               <td><textarea  cols="30" rows="10"></textarea></td> 
                </tr>
                <button onClick={save}>Save</button>
                </table>
                <div className="container-fluid">
                    {table}
                </div>
            </div>
    )
}