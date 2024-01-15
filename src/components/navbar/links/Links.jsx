import NavLink from "./navLink/navLink";
import style from "./links.module.css";

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];
const Links = () => {
    return <div className={style.container}>
        <div className={style.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}
        </div>
    </div>;
};

export default Links;