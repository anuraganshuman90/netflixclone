import type { Content } from "../../types/content";
interface ContentCardProps {
    content: Content;
}

function ContentCard({ content }: ContentCardProps) {
    return (
        <div>
            <p> {content.title}</p>
            <p> {content.releaseYear}</p>
            <p> {content.type}</p>
            <p> {content.rating}</p>
        </div>
    );
}
export default ContentCard;
