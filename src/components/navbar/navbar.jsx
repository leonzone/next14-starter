import Link from "next/link";
import Links from "@/components/navbar/links/Links";
import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link href={"/"} className={style.logo}>LOGO</Link>
            <Links></Links>
        </div>
    )
        ;
};

export default Navbar;