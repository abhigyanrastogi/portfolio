import profilephoto from "../assets/profile_photo.jpg";

const Hero = () => {
  return (
    <div className="container flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1 justify-content-center align-items-center">
        <div className="col rounded d-flex flex-row justify-content-center align-items-center bg-surface h-50 border border-4 border-accent">
          <div className="p-4">
            <h1 className="display-1">Abhigyan Chandra Rastogi</h1>
            <h2 className="display-4">Software Engineer</h2>
          </div>
          <div className="p-4">
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
