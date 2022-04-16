import React from "react"
import Task from "./Task";
import Row from "react-bootstrap/Row";
import Button from "@mui/material/Button";
import $ from "jquery";
import swal from "sweetalert2";

import './App.css';

function App() {
  let array = [{
    title : "Todo",
    buttonOne : <Button variant="outlined" className="w-100 mt-5 mb-2 butt" >Buy medicines</Button>,
    buttonTwo : <Button variant="outlined" className="w-100 mb-2 butt" >Go to the dentist</Button>,
    buttonThree : <Button variant="outlined" className="w-100 mb-2 butt" >Do shopping</Button>,
    buttonFour: <Button variant="outlined" className="w-100 mb-2 butt" >GCall to the car service</Button>,
},
{
   title : "in progress",
   buttonOne : <Button variant="outlined" className="w-100 mt-5 mb-2 butt" >complete work report</Button>,
   buttonTwo : <Button variant="outlined" className="w-100 mb-2 butt" >Grandpa birthday</Button>

},
{
   title : "Done",
   buttonOne : <Button variant="outlined" className="w-100 mt-5 mb-2 butto" >Book the table</Button>,
   buttonTwo : <Button variant="outlined" className="w-100 mb-2 butto" >Buy the suitcase</Button>
},
]
// let [task,setTask]=useState([]);
// const msg = [];
// function sweet() {
//     swal.fire({
//         title : "<h3> Enter your task</h3>",
//         input : "textarea",
//     }).then(function (e) {
//         msg.push(e.value);
//         setTask(msg);
//     });
//
// }
function sweet(){
   swal.fire({
       title : "<h3> Enter your task</h3>",
       input : "textarea",
   }).then(function (e) {
       // console.log(e);
       let value = e.value;
       // console.log(value);
       let cre = document.createElement('div');
       let create = document.createElement('p');
       create.innerHTML += value;
       cre.style.cssText = "color:black; font-size:20px;box-sizing:border-box;width:calc((70%-40px) /3);border:1px solid #00000029 ;margin:0 65px;height:100px; border-radius:10px;display:inline-block;padding:10px; background-color:#dfdddd;overflow-wrap: break-word;overflow-y: auto;"
       cre.append(create);
       cre.setAttribute('class','remove');
       document.body.append(cre);
   })
}
function emp(){
   $('.remove').remove();
   // window.location.reload();
}
return(
   <>
       <div className="bla">
           <Button onClick={()=>{
               sweet()
           }} variant="outlined" className="but">New Task</Button>
           <Button onClick={emp} variant="outlined" className="put">Delete</Button>
       </div>






       <Row className="m-0">
           {
               array.map((e,i)=><Task key={i} title={e.title} buttonOne={e.buttonOne} buttonTwo={e.buttonTwo} buttonThree={e.buttonThree} buttonFour={e.buttonFour}  />)
           }
       </Row>



      {/*<div >*/}
      {/*    <h1 className="remove mx-5"> {task}</h1>*/}
      {/*</div>*/}
   </>
)

}

export default App;
