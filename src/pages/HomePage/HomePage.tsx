import { getFeaturedContent, getHomePageCollections } from "../../services/ContentService";
import ContentCarousel from "../../components/ContentCarousel/ContentCarousel";
import Banner from "../../components/Banner/Banner";
import type { Content } from "../../types/content";

interface HomePageProps {
    onContentSelect: (content: Content) => void;
}

function HomePage({ onContentSelect }: HomePageProps) {
    const collections = getHomePageCollections()
    const featuredContent = getFeaturedContent()

    return (<div className="Homepage" >
        <div>
            <Banner content={featuredContent} />
            {collections.map((collection) => (
                <ContentCarousel
                    key={collection.id}
                    collection={collection}
                    onContentSelect={onContentSelect}
                />
            ))}
        </div>
    </div>
    );
}

export default HomePage;
