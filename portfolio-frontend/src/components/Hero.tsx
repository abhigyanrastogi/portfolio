import profilephoto from "../assets/profile_photo.jpg";

const Hero = () => {
  return (
    <div className="container flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1 d-flex justify-content-center align-items-center border border-4 border-accent rounded bg-surface h-50 p-4">
        <div className="col-lg-auto col-sm-12 p-lg-4">
          <div className="d-none d-lg-block text-start">
            <h1 className="display-1">Abhigyan Chandra Rastogi</h1>
            <h2 className="display-4">Software Engineer</h2>
          </div>
          <div className="d-lg-none text-center pb-4">
            <h1 className="display-4">Abhigyan Rastogi</h1>
            <h2 className="display-6">Software Engineer</h2>
          </div>
        </div>
        <div className="col-lg-auto col-sm-12">
          <div className="d-flex flex-column align-items-center">
            <img
              className="img-fluid rounded"
              src={profilephoto}
              alt="Profile Photo"
              style={{ width: "227px", height: "227px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
