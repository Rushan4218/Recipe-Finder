import React from "react";
import { FaSearch } from "react-icons/fa";

interface searchBarProps {
    value: string,
    changeValue: (value: string) => void
    handleSubmit: (e: React.FormEvent) => void
}

const SearchBar: React.FC<searchBarProps> = ({value, changeValue, handleSubmit}) => {
    return (    
        <div className="search-bar" onSubmit={handleSubmit}>
            <div>
                <h1 className="title">Recipe Finder</h1>
                <h2 className="sub-title">The smart way to find recipes</h2>
            </div>
            <form className="form-search">
                <input
                    type="input"
                    className="search-box"
                    value={value}
                    onChange={(e) => changeValue(e.target.value)}
                />
                <button className="search-btn">
                        <FaSearch className="search-btn-icon"/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;