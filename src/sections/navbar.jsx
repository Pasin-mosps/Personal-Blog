import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from 'react';

const navs = [
  { title: "About", sectionId: "about" },
  { title: "Experience", sectionId: "experience" },
  { title: "Skill", sectionId: "skill" },
  { title: "Project", sectionId: "project" },
]

const Navbar = () => {
  const arrowRef = useRef(null);

  const handleClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col gap-3 font-semibold mt-2 relative" >
      {
      navs.map((e, i) => (
        <div
          key={`nav-${e}-${i}`}
          onClick={() => handleClick(e.sectionId)}
          className="cursor-pointer"
        >
          {e.title}
        </div>
      ))}
    </div>
  );
};


export default Navbar;
