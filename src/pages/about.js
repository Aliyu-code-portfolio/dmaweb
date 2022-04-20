import image from '../images/Babaedit.png'
import { Info } from '../components/info'
import { useEffect } from 'react';

export const About = () => {
    useEffect(() => {
        document.title = "Meet Dr Musa | DMA"
    }, [])
    return (
        <>
            <div className='bg-black mt-5'>
                <div className="flex-column img-wrap ">
                    <img src={image} alt="DR Musa" className="fit-img img-thumbnail"></img>
                </div>
                <Info className='mt-0' />
            </div>

        </>
    );
};
