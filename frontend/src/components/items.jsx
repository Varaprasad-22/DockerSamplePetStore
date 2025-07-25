import "./item.css";
const Card=({pet})=>{

return(
    <div className="cardContainer">
        <img src={pet.image} alt={pet.name} className="cardImage" />
        <div className="cardContent">
            <h2>{pet.name}</h2>
            <p>{pet.description}</p>
            <p>₹{pet.price}</p>
        </div>    
    </div>
)
}

export default Card;