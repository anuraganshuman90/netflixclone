import ContentCard from "../ContentCard/ContentCard";
import type { ContentCollection} from "../../types/collection";
import type { Content } from "../../types/content";
import "./ContentList.css"

interface ContentListProps {
    collection: ContentCollection;
    onContentSelect: (content: Content) => void ;
}
function ContentList({collection, onContentSelect}: ContentListProps){
    return (
        <section className="content-list">
            <div className="list-content">
                {collection.contents.map((content) => (
                    <ContentCard key={content.id} content={content} onContentSelect={onContentSelect}/>
                ))}
            </div>
        </section>
    );
}

export default ContentList;
