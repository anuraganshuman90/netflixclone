App.js is a file that renders the webpage, everything from the app is a component an dapp combines those componenets to form the webpage
Row is a component that fetches data from api requests, different api calls give different genre of movies but rendering remains same and component remains same
fetchURL is used to protect the API key, it moes through requests file and gets data, that means app.js is not getting data directly but delegating the work to api calls which are handled elsewhere


App is the root UI component that composes the application's major sections.

## Engineering Vocabulary

Today's new concepts

- Composition
- Responsibility
- Separation of Concerns
- Single Source of Truth
- High Cohesion
- Coupling
- Configuration
- Abstraction


movies starts as an emty array because it does not have anything yet, we need to fetch data and set it there in movies
requests is not usedit is dead code
baseurl should not be availabel directly
after setMovies, movies becomes the new set (it contains the data)
movies.map() is how we try to show it in the webpage how should the row look what properties we shuld consider, we should also add something
Row now contains a set of movies which are being fetched from api calls , requests.js import not needed,movies.map renders the data (how will it look aspect // UI), baseurl hardcoded (wrong way)


useState tells React that the data changed. React re-runs the component, compares the old UI with the new UI, and updates only what actually changed in the browser.


const [movies, setMovies] = useState([]);
function Row({ title, fetchURL, isLargeRow })
array destructuring: movies was an empty array that canged when setMovies() (used as function) gets called and stores result in movies array. so this starts becoming more than a normal array and updating the array values/data
Object Destructuring: Object is no longer jus movies or just a row --- we divide row further (what does a row have -- movies,  where do you get movies -- url, how to render/show -- largerow,  movies will have -- title image description)

# Without destructuring
``` Javascript
const movie = {
    title: "Batman",
    year: 2022,
    rating: 8.4,
    genre: "Action"
};

console.log(movie.title);
console.log(movie.year);
console.log(movie.rating);
console.log(movie.genre);
```
# With Destructuring
``` Javascript
const {
    title,year,rating,genre
} = movie;

console.log(title);
console.log(year);
console.log(rating);
console.log(genre);


function getCoordinates(){
    return [25,82];
}
const { lat, long} = getCoordinates();
cosole.log(lat);
console.log(long);
```

# Understanding:
``` Javascript
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [],run once and never again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      //console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  // fetchURL is our variable(input to the function), fetch data is the function which takes fetchURL and runs api call, the result that is returned is then divided into parts -- that goes through setMovies and then becomes the movies array. Need to understand what chanes so that useEffect can run (working)
  ```
# Task
``` Javascript
// take books array, get one book ,give author's name, get another book , repeat ---> as card ---> use div or span for now --> map to create the card (dont know what the tag for card is so asked to use span/div) -->
const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert Martin"
  },
  {
    id: 2,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann"
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt"
  }
];

books.map((book) =>(
    <div key = {book.id}>
        <h3> Title: {book.title}</h3>
        <p> Author: {book.author}</p>
    </div>
))

//books should ideally come from an api which will be defined elsewhere not even from app.js, it takes a set of bookcards and displays it, bookcard need not hold const books =......, because that is t the place to define or store data, the working model should be --> get books from api/other file --> dont know how to export constants --> export default.... --> bookcard receives books--> make card using map() --> then return this card array --> inside app call bookcard component ->> returns page with a set of cards

/* app.js displays book cards

01.BookService: call api get books --> lets keep const books in here and export default books;
02. BookList: get books --> craete cards -->export cards
03.BookCard: designs card specific --> sends single card
04. App.js --> takes multiple bookcards and displays (just as it workd for rows)
one problem why take multiple rows/multiple bookcards // if i get a list of cards can render it directly --> less real estate to perform manipulation but still there are some tradeoffs to keeping multiple lines of bookcards
*/
```

# Understanding Archtecture:
/* more like what pages make a website --> talks about integration
what components make a page? --> should have a page (app component that takes every other component and set it in place) --> navebar -->profile (user login, preferences(other component)) --> side bar (for categories, favorites, disover) --> trending menu (top rated top 10 mvies ranked)
--> moviecards/tv-show cards ---> content cards to generalize this --> craeating mutiple profiles --> language preferences --> genre/category -->about the director ---> ratings -->similar content
parts of the system:
api to get data ---> list of movies/tv shows documentaries, channels --> moviecards will have image,description, rating --> need to get user preferences using watch history and general concensus --> area specific not limited but personalized ---> profile details --> properties like name, language preferences, kids section -->parental lock features --> content sensitivity and player rendering --> interface *
