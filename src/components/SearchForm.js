import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';

const SearchForm = (props) => {
  const [searchKey, setSearchKey] = useState('');

  const handleInputChange = (event) => {
    const searchKey = event.target.value;
    setSearchKey(searchKey);
  };

  const handleSearch = (event) => {
    event.preventDefault();
      props.handleSearch(searchKey);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearch} className="search-form">
          <input
            className='search-input'
            name="searchKey"
            value={searchKey}
            placeholder="Search for an artist..."
            onChange={handleInputChange}
          />
        <BsSearch></BsSearch>
      </form>
    </div>
  );
};
export default SearchForm;