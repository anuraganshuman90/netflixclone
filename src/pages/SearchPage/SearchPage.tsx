import ContentList from "../../components/CotentList/ContentList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getCollections } from "../../services/ContentService";
import type { Content } from "../../types/content";
import { useState } from "react";
import ContentDetails from "../ContentDetails/ContentDetails";

interface SearchPageProps{
    onContentSelect: (content: Content) => void;
}

function SearchPage({onContentSelect}: SearchPageProps) {
    const collections = getCollections();

        return (
            <div className="Searchpage">
                <SearchBar />
                {collections.map((collection) => (
                    <ContentList key={collection.id}
                        collection={collection} onContentSelect={onContentSelect} />
                ))}
            </div>
        );
}
export default SearchPage;

