import React from 'react';
import ArtistsList from './ArtistsList';

const SearchResult = (props) => {
  const { result } = props;
  const { artists } = result;
  return (
    <React.Fragment>
      <div className="artists">
        {artists && <ArtistsList artists={artists} />}
      </div>
    </React.Fragment>
  );
};
export default SearchResult;