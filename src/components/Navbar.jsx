
import logo from '../logo.svg'

export const Navbar = ()=> {
   const links = ["Services", "Projects", "About"];
   return <>
   <img className="App-logo" src={logo} alt="" />
   {
     links.map(res => 
      <span>{res}</span>
      )
   }
   <button className="btn-contact" >Contact</button>
   </>
}