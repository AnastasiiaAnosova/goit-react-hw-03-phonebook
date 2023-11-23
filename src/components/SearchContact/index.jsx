import { Search } from "./SearchContact.styled";

const SearchContact = ({ handleSearchChange }) => {
	return (
	  <Search>
    	<div>
      	<label>Find contacts by name</label>
      	<input
        	type="text"
        	onChange={handleSearchChange}
      	/>
		</div>
	</Search>
  );
};

export default SearchContact;
