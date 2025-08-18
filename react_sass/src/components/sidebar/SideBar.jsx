import '../sidebar/sidebar.sass'

// import MinhaImg from '../../assets/eu-img.jpg.jpg'

import Bey from '../../assets/mymom.jpg'
import SocialNetworks from '../socialnetworks/socialnetwork'

const SideBar =()=>{
    //letra maiuscula pq indica que estamos criando um componente 
    return (
          <aside id="sidebar">
            <img src={Bey} alt="foto da beyonce" />
            <p className="title"></p>
            <SocialNetworks/>
            <p>informações de contato</p>
            <a href="" className="btn">Download Currículo</a>
    </aside>
    )
  
}

export default SideBar