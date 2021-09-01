import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'
import { useState } from 'react';

const Navbar = () => {
    const[IsScrolled,setIsScrolled] = useState(false);
    window.onscroll =() =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className ={IsScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt=""/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span>
                
            </div>
            <div className="right">
                <Search className = "icon"/>
                <span>Kid</span>
                <Notifications className = "icon"/>
                <img src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="profile-pic"></img>
                <div className="profile">
                   <ArrowDropDown className = "icon"/>
                   <div className="options">
                       <span>Settings</span>
                       <span>Logout</span>
                   </div>
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default Navbar
