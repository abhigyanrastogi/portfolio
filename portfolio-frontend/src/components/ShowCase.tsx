import jsIcon from "../assets/icons/javascript.svg";
import tsIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import javaIcon from "../assets/icons/java.svg";
import springIcon from "../assets/icons/spring.svg";
import pythonIcon from "../assets/icons/python.svg";
import pysparkIcon from "../assets/icons/pyspark.svg";
import sqlIcon from "../assets/icons/sql.svg";
import mongoIcon from "../assets/icons/mongodb.svg";
import ShowCaseTechCarousel from "./ShowCaseTechCarousel";

const ShowCase = () => {
  type TechItem = {
    name: string;
    image: string;
  };
  let techlist: TechItem[] = [
    { name: "JavaScript", image: jsIcon },
    { name: "TypeScript", image: tsIcon },
    { name: "React", image: reactIcon },
    { name: "Java", image: javaIcon },
    { name: "Spring Boot", image: springIcon },
    { name: "Python", image: pythonIcon },
    { name: "PySpark", image: pysparkIcon },
    { name: "SQL", image: sqlIcon },
    { name: "MongoDB", image: mongoIcon },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4">Technologies and Languages</h1>
          </div>
          <div className="col-12">
            <ShowCaseTechCarousel techlist={techlist} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="display-4">Projects</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
