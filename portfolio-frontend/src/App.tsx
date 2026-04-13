import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profilephoto from "./assets/profile_photo.jpg";

function App() {
  return (
    <>
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="row m-4 p-4 flex-grow-1">
          <div className="col-8 rounded">
            <div className="d-flex justify-content-center align-items-center flex-column h-100 p-4 m-4">
              <h1>Hello, I am Abhigyan Chandra Rastogi</h1>
              <h2>A Software Engineer</h2>
            </div>
          </div>
          <div className="col-4 rounded">
            <div className="d-flex justify-content-center align-items-center h-100 p-4">
              <img
                className="rounded img-fluid"
                src={profilephoto}
                alt="Profile Photo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
