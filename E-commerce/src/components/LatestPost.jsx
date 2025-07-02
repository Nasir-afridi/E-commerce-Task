const LatestPosts = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Latest Posts</h3>
        <button className="btn btn-danger rounded-pill px-4">View All</button>
      </div>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-0 h-100">
            <img
              src="post-item1.jpg"
              className="card-img-top rounded"
              alt="Post 1"
            />
            <div className="card-body px-0">
              <small className="text-muted">Books</small>
              <h6 className="fw-bold mt-2">10 Must-Read Books Of The Year: Our Top Picks!</h6>
              <p className="text-muted small">
                Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadge. <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-0 h-100">
            <img
              src="post-item2.jpg"
              className="card-img-top rounded"
              alt="Post 2"
            />
            <div className="card-body px-0">
              <small className="text-muted">Books</small>
              <h6 className="fw-bold mt-2">The Fascinating Realm Of Science Fiction</h6>
              <p className="text-muted small">
                Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-0 h-100">
            <img
              src="post-item3.jpg"
              className="card-img-top rounded"
              alt="Post 3"
            />
            <div className="card-body px-0">
              <small className="text-muted">Books</small>
              <h6 className="fw-bold mt-2">Finding Love In The Pages Of A Book</h6>
              <p className="text-muted small">
                Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology. <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card border-0 h-100">
            <img
              src="post-item4.jpg"
              className="card-img-top rounded"
              alt="Post 4"
            />
            <div className="card-body px-0">
              <small className="text-muted">Books</small>
              <h6 className="fw-bold mt-2">Reading For Mental Health: How Books Can Heal And Inspire</h6>
              <p className="text-muted small">
                In today's remote work environment, productivity is key. Discover the top apps and tools that can help you stay <a href="#">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;

