import Cards from '../components/card'
import { useEffect } from 'react';

export const News = () => {
    useEffect(() => {
        document.title = "News | DMA"
    }, [])
    return (
        <>
            <div className='bg-black mt-5 pt-5 mt-5'>
                <div className='bg-black'></div>
                <div className="flex-column ">
                    <h2 className="text-light text-center font-weight-bold ">News <code className='text-light'>&amp;</code> Updates</h2>
                    <div className="text-center pb-3 text-light font-size-1">Transparency is key to good leadership
                        </div>
                </div>
                <Cards className='mt-0' />
            </div>

        </>
    );
};
