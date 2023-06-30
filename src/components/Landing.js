export default function Landing(){
  return(
       <div className ="photogrid">
         <img src ={require("../images/photo-grid.png")} className="grid"></img>
         <div className="info">
         <h1>Online Experiences</h1>
         <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
         </div>
       </div>

     )
}