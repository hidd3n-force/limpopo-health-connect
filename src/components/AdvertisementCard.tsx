
interface AdvertisementCardProps {
  title: string;
  description: string;
  sponsor: string;
  imageUrl?: string;
  ctaText?: string;
  onClick?: () => void;
}

export const AdvertisementCard = ({ 
  title, 
  description, 
  sponsor, 
  imageUrl, 
  ctaText = "Learn More",
  onClick 
}: AdvertisementCardProps) => {
  return (
    <div className="modern-card ad-card" onClick={onClick}>
      {imageUrl && (
        <div className="ad-image-container">
          <img src={imageUrl} alt={title} className="ad-image" />
        </div>
      )}
      <div className="ad-content">
        <div className="ad-sponsor">Sponsored by {sponsor}</div>
        <h3 className="ad-title">{title}</h3>
        <p className="ad-description">{description}</p>
        <button className="ad-cta">{ctaText}</button>
      </div>
    </div>
  );
};
