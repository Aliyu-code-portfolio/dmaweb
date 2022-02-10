import '../App.css';
import { IoHomeOutline, IoInformationCircleOutline, IoWalletOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="App-header">
                <h1>DMA <span>Campaign</span></h1>
                <div className='menu'>
                    <ul>
                        <div className='new'>
                            <li><Link to='/' className='home'><IoHomeOutline /> Home</Link></li>
                            <li><Link to='/support' className='support'><IoWalletOutline /> Support</Link></li>
                            <li><Link to='/about' className='about'><IoInformationCircleOutline /> About</Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
