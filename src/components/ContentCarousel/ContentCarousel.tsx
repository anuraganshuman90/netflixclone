import type { ContentCollection } from "../../types/collection";
import ContentCard from "../ContentCard/ContentCard";
interface ContentCarouselProps {
    collection: ContentCollection;
}
function ContentCarousel({ collection }: ContentCarouselProps) {
    return (
        <div>
            <h3>{collection.title}</h3>
            {collection.contents.map((content) =>(
                <ContentCard key={content.id} content={content} />
            ))}
        </div>
        );
}

export default ContentCarousel;
