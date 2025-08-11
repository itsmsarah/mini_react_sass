import '../sidebar/sidebar.sass'

import MinhaImg from '../../assets/eu-img.jpg.jpg'

const SideBar =()=>{
    //letra maiuscula pq indica que estamos criando um componente 
    return (
          <aside id="sidebar">
            <p>imagem</p>
            <p className="title"></p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">Download Currículo</a>
    </aside>
    )
  
}

export default SideBar