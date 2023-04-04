import { fetchNui } from "../../utils/fetchNui";
import { useEffect, useState } from "react";
import "./MenuHeader.css";

interface MenuHeaderProps {
  label: string;
}

const MenuHeader = ({ label }: MenuHeaderProps) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
      const mainContainer = document.querySelector('.main-container') as HTMLElement
          if (isHovering) {
              mainContainer.style.opacity = '0.35'
              mainContainer.style.transition = 'all 0.5s'
          } else {
              mainContainer.style.opacity = '1'
          }
  }, [isHovering])

  return (
    <div className="menu-header" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <h1>{label}</h1>
      <button
        className="menu-header--close"
        onClick={() =>
          fetchNui("closeCraftingMenu", null, {})
        }
      />
    </div>
  );
};

export default MenuHeader;
