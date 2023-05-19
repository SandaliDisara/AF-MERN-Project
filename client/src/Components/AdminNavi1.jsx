
import "./css/agriSection.css";

export default function AdminNavi1() {
  const images = [
    {
      src: "./Assets/homePage/staff1.png",
      alt: "admin1",
      text: "Grassroot Officer",
      link: "/grasstypeselect"
    },
    {
      src: "./Assets/homePage/satff2.png",
      alt: "staff2",
      text: "Ministry Staff",
      link: "/agriServices"
    },
    
  ];

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <a href={image.link}>
              <img src={image.src} alt={image.alt} />
            </a>
            <div className="text-container">{image.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
