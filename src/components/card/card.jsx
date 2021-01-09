import './card.css';

const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.a.id}?set=set2&size=180x180`}/>
            <h2> {props.a.name} </h2>
            <p>{props.a.email}</p>
        </div>

    )
}

export default Card;