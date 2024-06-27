import "../assets/css/home.css";

function HomePage () {
  return (
    <div className="slider-area">
    <div className="slider">
        <div id="bg-slider" className="owl-carousel owl-theme">

            <div className="item"><img src="src/assets/img/slide1/slider-image-2.jpg" alt="The Last of us" /></div>
            <div className="item"><img src="src/assets/img/slide1/slider-image-1.jpg" alt="GTA V" /></div>

        </div>
    </div>
    <div className="container slider-content">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                <h2>property Searching Just Got So Easy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi deserunt deleniti, ullam commodi sit ipsam laboriosam velit adipisci quibusdam aliquam teneturo!</p>

            </div>
        </div>
    </div>
</div>
  );
}

export default HomePage;
