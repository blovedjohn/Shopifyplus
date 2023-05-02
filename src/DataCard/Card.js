




function Card(props){
        return(
          <div className="card">
             <img src={props.image} className="image"/>
             <h2 className="ngn" id="digits">{props.name}</h2>
             <div className="Details">
             <h2 id="digits">{props.digits}</h2>
             <p id="price">{props.price}</p>
             </div>
             <p className="wind">{props.rating}</p>
           </div>

    )
}
export default Card;