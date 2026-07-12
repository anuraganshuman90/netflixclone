# Content

## Responsibility

Represents a single piece of streamable content within the platform.

A Content object is the smallest unit of media that can be displayed,
searched, recommended, or played.

Examples:
- Movie
- TV Show
- Documentary
- Anime

---

## Owns

- id
- title
- description
- poster
- backdrop
- rating
- genres
- releaseYear
- runtime
- language
- type

---

## Used By

- ContentCard
- ContentCarousel
- ContentList
- HomePage
- SearchPage
- ContentService (future)

---

## Should NEVER Know

- API endpoints
- Database implementation
- Authentication
- User preferences
- Watch history
- Recommendation logic

---

## Field Definitions

| Field | Description |
|--------|-------------|
| id | Unique identifier |
| title | Display title |
| description | Short overview of the content |
| poster | Portrait image used for cards |
| backdrop | Landscape image used for banners |
| rating | Average user rating |
| genres | One or more genres |
| releaseYear | Year of release |
| runtime | Duration in minutes |
| language | Original language |
| type | Movie, TV Show, Documentary, Anime |

---

## Future Enhancements

Not part of Version 1.

- Cast
- Director
- Production Studio
- Age Rating
- Trailer
- Seasons
- Episodes
- Awards
