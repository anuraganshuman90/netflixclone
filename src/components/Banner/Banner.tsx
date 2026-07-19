import type { Content } from "../../types/content";

interface BannerProps {
    content: Content;
}
function Banner({ content }: BannerProps) {
    return (
        <section className="banner">
            <div className="banner-backdrop">
                <img src={content.backdrop} />
            </div>
            <div className="banner-details">
                <h2 className="banner-title">{content.title}</h2>
                <p className="banner-meta">
                    {content.releaseYear} • {content.type} • ⭐ {content.rating}
                </p>
                <p className="banner-description">
                    {content.description}
                </p>
            </div>
        </section>
    );


}
export default Banner;
