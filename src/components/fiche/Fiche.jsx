import property2 from '/src/assets/img/demo/property-2.jpg';
import property5 from '/src/assets/img/demo/property-5.jpg';
import property6 from '/src/assets/img/demo/property-6.jpg';

const Properties = () => {
  return (
    <div className="content-area recent-property" style={{ backgroundColor: '#FCFCFC', paddingBottom: '55px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
            {/* /.feature title */}
            <h2>Top submitted property</h2>
            <p>Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies .</p>
          </div>
        </div>

        <div className="row">
          <div className="proerty-th">
            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-1.html">
                    <img src={property6} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-1.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-2.html">
                    <img src={property2} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-2.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-3.html">
                    <img src={property5} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-3.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-3.html">
                    <img src={property5} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-3.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-3.html">
                    <img src={property5} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-3.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-3.html">
                    <img src={property5} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-3.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-3.html">
                    <img src={property5} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-3.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 p0">
              <div className="box-two proerty-item">
                <div className="item-thumb">
                  <a href="property-3.html">
                    <img src={property5} alt="Property" />
                  </a>
                </div>
                <div className="item-entry overflow">
                  <h5><a href="property-3.html">Super nice villa</a></h5>
                  <div className="dot-hr"></div>
                  <span className="pull-left"><b>Area :</b> 120m</span>
                  <span className="proerty-price pull-right">$ 300,000</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
