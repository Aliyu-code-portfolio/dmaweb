import SwiftSlider from 'react-swift-slider'
import '../../App.css'
import Media from 'react-media';

const data = [

    { 'id': '1', 'src': 'https://i.ibb.co/LvQJDvm/campaign-Sample-Baba.png' },
    { 'id': '2', 'src': 'https://i.ibb.co/nqpj5Zs/Campaign-Poster.png' },
    { 'id': '3', 'src': 'https://i.ibb.co/Jz3d298/Dr-Musa-3.jpg' },
    { 'id': '4', 'src': 'https://i.ibb.co/f4Qgz3m/Dr-Musa-4.jpg' },
    { 'id': '5', 'src': 'https://i.ibb.co/RhkLMSk/Dr-Musa-5.jpg' },
    { 'id': '6', 'src': 'https://i.ibb.co/JRHfVDd/Dr-Musa-1.jpg' },
    { 'id': '7', 'src': 'https://i.ibb.co/Q9V0WBj/Dr-Musa-2.jpg' },

];


export const Slideshow = () => {
    return (
        <Media queries={{ small: { maxWidth: 767 } }}>
            {matches =>
                matches.small ? (
                    <div className='playMobile'>
                        <SwiftSlider className='slide' data={data} />
                    </div>
                ) : (
                    <div className='play'>
                        <SwiftSlider className='slide' data={data} />
                    </div>
                )
            }
        </Media>
    )
}