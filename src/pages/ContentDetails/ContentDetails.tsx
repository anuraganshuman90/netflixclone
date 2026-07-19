import type { Content } from "../../types/content";

interface ContentDetailsProps {
    content: Content;
    onClose: () => void;
    onContentSelect: (content: Content) => void ;
}
function ContentDetails({ content , onClose }: ContentDetailsProps) {
    function gotoHome(){
        onClose();
    }


    return (
        <div className="content-details">
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
                    {content.description}
                    {content.genres}
                    {content.language}
                </p>
                <button onClick = {gotoHome}>home</button>
            </div>
        </div>
    );
}

export default ContentDetails;
