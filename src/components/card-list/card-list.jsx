import './card-list.css';
import Card from '../card/card';

const CardList = (props) => {
    return (
        <div className="CardList">
            {props.monster.map(a => (
                <Card key={a.id} a={a}/>
            ))}
        </div>
    )
}
export default CardList;