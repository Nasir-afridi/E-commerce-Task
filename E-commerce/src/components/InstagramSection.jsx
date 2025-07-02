const InstagramSection = () => {
  return (
    <div className="container my-5 text-center">
      <h4 className="mb-4 fw-semibold">Instagram</h4>
      <div className="row gx-3 gy-3 justify-content-center">

        {/* Image 1 */}
        <div className="col-6 col-sm-4 col-md-2">
          <div className="position-relative overflow-hidden rounded">
            <img src="insta-item1.jpg" className="img-fluid w-100" alt="Insta 1" />
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-6 col-sm-4 col-md-2">
          <div className="position-relative overflow-hidden rounded">
            <img src="insta-item2.jpg" className="img-fluid w-100" alt="Insta 2" />
          </div>
        </div>

        {/* Image 3 */}
        <div className="col-6 col-sm-4 col-md-2">
          <div className="position-relative overflow-hidden rounded">
            <img src="insta-item3.jpg" className="img-fluid w-100" alt="Insta 3" />
          </div>
        </div>

        {/* Image 4 */}
        <div className="col-6 col-sm-4 col-md-2">
          <div className="position-relative overflow-hidden rounded">
            <img src="insta-item4.jpg" className="img-fluid w-100" alt="Insta 4" />
          </div>
        </div>

        {/* Image 5 */}
        <div className="col-6 col-sm-4 col-md-2">
          <div className="position-relative overflow-hidden rounded">
            <img src="insta-item5.jpg" className="img-fluid w-100" alt="Insta 5" />
          </div>
        </div>

        {/* Image 6 */}
        <div className="col-6 col-sm-4 col-md-2">
          <div className="position-relative overflow-hidden rounded">
            <img src="insta-item6.jpg" className="img-fluid w-100" alt="Insta 6" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default InstagramSection;
