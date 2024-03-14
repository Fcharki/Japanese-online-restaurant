import React from 'react';

export default function Search() {
    return (
        <div className="container-fluid search mt-5 pt-4" id="search">
            <form className="form-inline col-md-12">
            <p className='search-p row'>Search your favorite dish:</p>
                <input className="form-control" type="search" placeholder="Enter a keyword..." aria-label="Search"/>
                <button type="submit" className="btn btn-success m-2">Search</button>
            </form>
        </div>
    );
}
