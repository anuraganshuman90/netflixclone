function ContentCard({movie}){
    return(
        <div>
            <p> {movie.title}</p>
            <p> {movie.year}</p>
            <p> {movie.director}</p>
        </div>
    );
}
export default ContentCard;
