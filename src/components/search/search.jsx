import './search-style.css';
import SearchIcon from '../icons/SearchIcon';

const Search = ({ handleChange, placeholder }) => {
    return (
        <div className='wrapper'>
            <div className= 'iconWrapper'>
                <SearchIcon className='icon' />
                <input
                    className='search'
                    type='search'
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </div>
        </div>


    )
}
export default Search