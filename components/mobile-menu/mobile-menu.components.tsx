import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/user.context";
import "./mobile-menu.style.scss";

type MobileMenuProp = {
  signOutHandler: () => void;
};

const MobileMenu = ({ signOutHandler }: MobileMenuProp) => {
  const { currentUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  const hideMobileNav = () => {
    setIsOpen(false);
  }

  const handleSignOut = () => {
    signOutHandler();
    hideMobileNav();
  }

  return (
    <>
      <div
        className={`hamburger-icon-container ${isOpen ? "open" : ""}`}
        onClick={toggleMobileNav}
      >
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              className="mob-nav-link"
              href="/shop"
              onClick={hideMobileNav}
            >
              SHOP
            </Link>
          </li>
          <li>
            {currentUser ? (
              <span
                className="mob-nav-link"
                onClick={handleSignOut}
              >
                SIGN OUT
              </span>
            ) : (
              <Link
                className="mob-nav-link"
                href="/auth"
                onClick={hideMobileNav}
              >
                SIGN IN
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
