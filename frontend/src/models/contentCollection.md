# ContentCollection

## Responsibility

Represents a logical grouping of related Content objects.

A collection organizes content for presentation but does not define
how that content is rendered.

Examples

- Trending
- Top Rated
- Action
- Comedy
- Continue Watching
- Recommended For You

---

## Owns

- id
- title
- type
- genre
- contents
- onContentSelect

---

## Used By

- HomePage
- SearchPage
- ContentCarousel
- ContentList

---

## Should NEVER Know

- Rendering layout
- API implementation
- Database
- Authentication
- User preferences

---

## Field Definitions

| Field    | Description                     |
| -------- | ------------------------------- |
| id       | Unique identifier               |
| title    | Display title                   |
| type     | Defines the collection category |
| genre    | Genre used for filtering        |
| contents | List of Content objects         |
