//import { getFeaturedContent, getHomePageCollections } from "../../services/ContentService";
//import ContentCarousel from "../../components/ContentCarousel/ContentCarousel";
//import Banner from "../../components/Banner/Banner";
import type { Content } from "../../types/content";
import getAll from "../../services/ContentService";

import { useState,useEffect } from "react";

interface HomePageProps {
    onContentSelect: (content: Content) => void;
}

function HomePage({ onContentSelect }: HomePageProps) {
    // const collections = getHomePageCollections()
    // const featuredContent = getFeaturedContent()


    const [content, setContent] = useState<Content[]>([]);
    useEffect(() => {
    async function loadContent() {
        const data = await getAll();
        setContent(data);
    }

    loadContent();
}, []);
/*
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
*/
return (
    <div>
        {content.map(item => (
            <p key={item.id}>{item.title}</p>
        ))}
    </div>
)
}

export default HomePage;
