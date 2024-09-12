import './idolTable.css';
import React, { useState } from 'react';


export function IdolTable() {
   const [tableData, setTableData] = useState([
     { id: 1, picture: 'chan.png', name: 'Bang Chan', age: 27 },
     { id: 2, picture: 'han-square-pic.png', name: 'HAN', age: 24 }
   ]);
 const changes = (id, field, value) => {
   setTableData(prevData =>
     prevData.map(row =>
       row.id === id ? { ...row, [field]: value } : row
     )
   );
 };
const fetchMessage = async() => {
    try {
        const response = await fetch('/api/items');
        const data = await response.json();
        console.log(data);
     }catch(error) {
        console.error(error);
     }
}; fetchMessage()
 return (
   <div class="tidol">
     <h1>K-Pop Idol Page</h1>
     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Picture</th>
           <th>Name</th>
           <th>Age</th>
         </tr>
       </thead>
       <tbody>
         {tableData.map(row => (
           <tr key={row.id}>
             <td>{row.id}</td>
             <td>
                 <img src={row.picture} alt={`Image ${row.id}`} width="100" height="100" />
             </td>
             <td>
               <input
                 type="text"
                 value={row.name}
                 onChange={(e) => changes(row.id, 'name', e.target.value)}
               />
             </td>
             <td>
               <input
                 type="number"
                 value={row.age}
                 onChange={(e) => changes(row.id, 'age', e.target.value)}
               />
            </td>
           </tr>
         ))}
         
       </tbody>
       
     </table>
    <form className="submitform">
        <label>
            <h2>Submit A K-Pop Idol!</h2>
        </label>
        <div className="submitboxes">
            <input type="file"/><br/>
            <input placeholder="Name goes here!"/><br/>
            <input placeholder="Age goes here!"/><br/>
        </div>
        <button>Submit</button> 
        {/* Put onClick from submit button! */}
    </form>
   </div>
 );
};
