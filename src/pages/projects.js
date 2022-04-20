import Issues from '../components/issues'
import { useEffect } from 'react';

export const Projects = () => {
    useEffect(() => {
        document.title = "Projects | DMA"
    }, [])
    return (
        <>
            <div className='bg-black mt-5 pt-5 mt-5'>
                <div className='bg-black'></div>
                <div className="flex-column ">
                    <h2 className="text-light text-center font-weight-bold ">Issues <code className='text-light'>&amp;</code> Political Concerns</h2>
                    <div className="text-center pb-3 text-light font-size-1">Time for Positive Change
                        </div>
                </div>
                <Issues className='mt-0' />
            </div>

        </>
    );
};
