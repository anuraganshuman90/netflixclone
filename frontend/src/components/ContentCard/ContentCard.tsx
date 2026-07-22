import type { Content } from "../../types/content";
import "./ContentCard.css"
interface ContentCardProps {
    content: Content;
    onContentSelect: (content: Content) => void;
}

function ContentCard({ content , onContentSelect}: ContentCardProps) {
    function handleContentClick() {
        onContentSelect(content) //should go to homepage i cant write callback
    }

    return (
        <div className="content-card" onClick={handleContentClick} >
            <div className="content-poster">
                <img src={content.poster} />
            </div>
            <div className="content-details">
                <h3 className="content-title">
                    {content.title}
                </h3>
                <p className="content-meta">
                    {content.releaseYear}
                </p>
                <p className="content-meta">
                    {content.type}
                </p>
                <p className="content-meta">
                    ⭐ {content.rating}
                </p>
            </div>
        </div>
    );
}

export default ContentCard;
