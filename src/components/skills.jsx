import { useEffect } from "react";
import "./skills.css";

const Skills = () => {
  const list = [
    { name: "HTML", level: "85%" },
    { name: "CSS", level: "70%" },
    { name: "JS", level: "75%" },
  ];

  useEffect(() => {
    const bars = document.querySelectorAll(".level");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const width = target.getAttribute("data-level");
          target.style.width = width;
          target.classList.add("active"); 
        }
      });
    });

    bars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills">
      {list.map((obj, index) => (
        <div className="group" key={index}>
          <div className="name">{obj.name}</div>
          <hr className="level" data-level={obj.level} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
