import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  techlist: {
    name: string;
    image: string;
  }[];
};

const ShowCaseTechCarousel = ({ techlist }: Props) => {
  const duplicatedTechList = [...techlist, ...techlist];
  const [isPaused, setIsPaused] = useState(false);
  return (
    <>
      <div className="overflow-hidden">
        <div className="py-4">
          <motion.div
            className="d-flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedTechList.map((skill, index) => (
              <div key={index}>
                <div className="p-4 border border-3 border-accent rounded tech-list-item">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ShowCaseTechCarousel;
