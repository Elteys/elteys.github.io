const appleImages = [
  { src: '/images/1.jpg', alt: 'Apple 1' },
  { src: '/images/2.jpg', alt: 'Apple 2' },
  { src: '/images/3.jpg', alt: 'Apple 3' },
  { src: '/images/1.jpg', alt: 'Apple 1' },
  { src: '/images/2.jpg', alt: 'Apple 2' },
  { src: '/images/3.jpg', alt: 'Apple 3' },
  { src: '/images/2.jpg', alt: 'Apple 2' },
  { src: '/images/1.jpg', alt: 'Apple 1' },
  { src: '/images/3.jpg', alt: 'Apple 3' },
  { src: '/images/2.jpg', alt: 'Apple 2' },
  { src: '/images/1.jpg', alt: 'Apple 1' },
  { src: '/images/3.jpg', alt: 'Apple 3' },
];

function Gallery() {
  return (
    <section className="gallery">
      {appleImages.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} className="gallery-img" />
      ))}
    </section>
  );
}

export default Gallery;
