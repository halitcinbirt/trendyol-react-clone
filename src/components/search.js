import React from 'react';
import SearchIcon from 'remixicon-react/SearchLineIcon';
class Search extends React.Component {

    render(){
        return(
            <div className="search">
                <input type="text"  onClick={this.handleClick}  placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
                <button><SearchIcon className="search" size={20} /></button>
            </div>
        );
    }
}

export default Search;