import { Search } from "./SearchContact.styled";

const SearchContact = ({ filter, handleSearchChange }) => {
	return (
	  <Search>
    	<div>
      	<label>Find contacts by name</label>
      	<input
        	type="text"
        	value={filter}
        	onChange={handleSearchChange}
      	/>
		</div>
	</Search>
  );
};

export default SearchContact;
