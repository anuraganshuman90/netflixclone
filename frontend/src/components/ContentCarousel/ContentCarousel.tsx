import type { ContentCollection } from "../../types/collection";
import type { Content } from "../../types/content";
import ContentCard from "../ContentCard/ContentCard";
import "./ContentCarousel.css"
interface ContentCarouselProps {
    collection: ContentCollection;
    onContentSelect: (content: Content) => void ;
}
function ContentCarousel({ collection, onContentSelect }: ContentCarouselProps) {
    return (
        <section className="content-carousel">
            <h2 className="carousel-title">{collection.title}</h2>
            <div className="carousel-content">
                {collection.contents.map((content) => (
                    <ContentCard key={content.id} content={content} onContentSelect={onContentSelect} />
                ))}
            </div>
        </section>
    );
}

export default ContentCarousel;
