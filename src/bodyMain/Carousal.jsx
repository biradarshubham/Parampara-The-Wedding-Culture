import homePic1 from '../assets/homePic1.jpg';
import homePic2 from '../assets/homePic2.jpg';
import homePic3 from '../assets/homePic3.jpg';
import homePic4 from '../assets/sanskruti.jpg'

const Carousal = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={homePic1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-secondary rounded">
        <h5>Best Collection Of Saree</h5>
        <p>This luxurious saree collection showcases exquisite craftsmanship with the finest fabrics like silk and chiffon. Featuring intricate embroidery and rich embellishments, it offers timeless elegance in a range of colors perfect for any occasion.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={homePic2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-secondary rounded">
        <h5>Best Wedding Collection</h5>
        <p>This stunning wedding saree collection features luxurious fabrics like silk and velvet, adorned with intricate embroidery and shimmering embellishments. With rich, regal colors and exquisite detailing, each saree is designed to make you feel timelessly elegant on your special day.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={homePic3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-secondary rounded">
        <h5>Third slide label</h5>
        <p>This beautiful kurti collection combines comfort and style, featuring fine fabrics like cotton and silk with delicate embroidery and vibrant prints. Each piece is designed for a perfect blend of tradition and modern flair, making it ideal for both casual and festive occasions.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={homePic4} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block bg-secondary rounded">
        <h5>fourth slide label</h5>
        <p>we keep our sanskruti protect .</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousal
