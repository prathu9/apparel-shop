import Image from "next/image";
import Link from "next/link";

import "./Navigation.styles.scss";

const Navigation = () => {
    return(
        <>
            <div className="navigation">
                <Link className="logo-container" href="/">
                    <Image
                        src="/crown.svg"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" href="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" href="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navigation;