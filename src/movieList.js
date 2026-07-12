import movies from "./movieData";
import ContentCard from "./ContentCard";
function MovieList() {
    return (
        movies.map((movie) =>
            <ContentCard movie={movie} />
        )
    );
}

export default MovieList;
