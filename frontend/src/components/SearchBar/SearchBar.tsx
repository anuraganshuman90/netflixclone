import "./SearchBar.css"
function SearchBar() {
    return (
        <section className="search-container">
            <div className="search-box">
                <span className="search-icon">⌕</span>

                <input
                    type="text"
                    placeholder="Search movies, TV shows, genres, directors..."
                />
            </div>
        </section>
    );

}

export default SearchBar;
