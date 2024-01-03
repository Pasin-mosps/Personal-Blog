import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

const navs = [
  { title: "About", sectionId: "about" },
  { title: "Experience", sectionId: "experience" },
  { title: "Skill", sectionId: "skill" },
  { title: "Project", sectionId: "project" },
]

const Navbar = () => {
  const [arrowPosition, setArrowPosition] = useState({ top: 0, display: 'none' });

  const handleClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e) => {
    const currentSectionId = navs.find((nav) => document.getElementById(nav.sectionId)?.offsetTop <= e.clientY);
    if (currentSectionId) {
      const target = document.getElementById(currentSectionId.sectionId);
      setArrowPosition({ top: target.offsetTop - 40, display: 'block' });
    } else {
      setArrowPosition({ display: 'none' });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 font-semibold mt-2 relative">
      <FontAwesomeIcon
        className="mr-2 text-primaryTitle absolute transition-all duration-500"
        icon={faArrowRight}
        style={{ top: arrowPosition.top, display: arrowPosition.display }}
      />
      {navs.map((e, i) => (
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
