import './search-style.css';

const Search = ({handleChange, placeholder}) => {
    return (
        <input
            className='search'
            type='search'
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}
export default Search