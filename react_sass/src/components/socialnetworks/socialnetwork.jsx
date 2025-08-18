import{FaLinkedin,FaGitHub,FaInstagram} from "react-icons/fa"
// r
const socialnetorks = [
    {name: "linkedin", icon:<FaLinkedin/>},
    {name: "github", icon: <FaGitHub/>},
    {name: "instagram" , icon: <FaInstagram/>}

]
    
    const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialnetorks.map((network)=>
            <a href="#" className="social-bnt" id={network.name} key={network.name}>
                {network.icon}
            </a>
            )}

        </section>
    )
    }

    export default SocialNetworks;