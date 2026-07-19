Flowchart LR
Browser --> index.html -->index.js --> ReactDOM() --> App -- banner ---navbar --row ---> requests.js --->axios api call(tmdb)
# Pages

Home

Search

Details

Profile

Favorites

Admin

Player

---

# Components

ContentCard

Row

MovieList

Banner

Navbar

Sidebar

Footer

SearchBar

---

# Services

ContentService

AuthService

ProfileService

RecommendationService

---

# Backend APIs

GET /movies

GET /movies/:id

GET /search

POST /favorites

POST /history

...


## Responsibilities

App
App receives a list of genres and displays it

Row
takes each genre and displays it (renders it)

Navbar
Provides navigation around the webpage, easy (minimum) clicks access

Banner
shows top trending movies and shows data mainly comes from rows

axios
api call to tmdb with base url config

requests
a set of strings kept as part of the url containing query parameters for different genres, current architecture , likely getting changed to only store one string with changing variables in place of parameters


# Feature
# MovieCard

## Responsibility
displays one movie with its properties -> title, year, rating, image (if any)

## Inputs
takes details from movie list -- one movie

## Outputs
renders a card --> details

## Dependencies
movie properties --- anything changes then create new moviecards

## Should NEVER know
- all movies in list, api calls, database, keys, user data
- Fetch data
- Call APIs
- Know about PostgreSQL
- Know about other movies
- Store global application state
- Decide which movie to display



# Navbar
- home
- about
- settings
- profile

# should not know
- data
- endpoints
- ContentCard
- Carousel

# should know
- link to pages/sections


# Phase 3 - Frontend Application Logic

## HomePage
### Responsibilities
- composes homepage
- decides the order of sections (what goes where)
- pass data to child componenets
- request homepage data
### Knows
- Banner
- ContentCarousel
- ContentService
- Homepage layout
### Does Not Know
- How Banner renders itself.
- How ContentCard renders itself.
- Where the data comes from.
- How collections are built.
- Database implementation.

---

## Banner

### Responsibilities

### Knows

### Does Not Know

---

## ContentCarousel

...

---

## ContentCard

...

---

## ContentService

...


## ContentDetails

### Responsibilities

- Display detailed information about one Content.
- Help the user decide whether to watch it.
- Display related content.
- Provide actions (Play, Add to Watchlist, etc. in future).

### Knows

- Content
- Related Content (future)

### Does Not Know

- How Content is retrieved.
- How recommendations are generated.
- How playback works.
- Database implementation.
