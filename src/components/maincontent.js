export default function Maincontent(props){
  let badgeText 
  if(props.openspots === 0){
    badgeText ="SOLD OUT"
  }
  else if(props.location ==="Online"){
    badgeText = "ONLINE"

  }

  
  return(
    <div className="card">
      <div className="status">{badgeText}</div>
      {/* {props.openspots === 0 && <div className="status">Sold Out</div>} */}
      <img src= {require(`../images/${props.coverImg}`)} className="card-img"></img>
      <div className="card-info">
      <div className="rating">
        <img src= "./images/star.png" className="star-img"></img>
        <div>{props.stats.rating}</div>
      </div>
        <div className="gray">
          {props.stats.reviewCount}
          {props.location}
        </div>
      </div>
      <div className="class--name"> 
      <div className="title">{props.title}</div>
      <p className="second"><span className="bold">From ${props.price}</span> / person</p>
      </div>
      <button className="button" type="Submit">ENROLL NOW</button>
    </div>
  )
}