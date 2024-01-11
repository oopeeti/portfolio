import { SocialIcon } from "react-social-icons";
import Resume from "./Resume";

const Links = () => {
    return (
        <div className="flex flex-row items-center shadow-xl justify-center gap-5 cursor-pointer">
            {/* Social Icons */}
            <SocialIcon
                url="https://www.linkedin.com/in/oopeeti"
                fgColor="black"
                bgColor="white"
                className="hover:opacity-65 z-10 transition-all duration-200"
                target="_blank"
            />
            <Resume />
            <SocialIcon
                url="https://github.com/oopeeti"
                fgColor="black"
                bgColor="white"
                className="hover:opacity-65 z-10 transition-all duration-200"
                target="_blank"
            />
        </div>
    );
}

export default Links;