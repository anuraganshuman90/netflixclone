import { getCollections } from "../../services/ContentService";
import ContentCarousel from "../../components/ContentCarousel/ContentCarousel";


function HomePage() {
    const collections = getCollections();

    return (
        <div>
            {collections.map((collection) => (
                <ContentCarousel
                    key={collection.id}
                    collection={collection}
                />
            ))}
        </div>
    );
}

export default HomePage;
