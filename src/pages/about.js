import './about.css';
import dma from '../assets/aboutImg.png'
import Media from 'react-media';

export const About = () => {
    return (
        <Media queries={{ small: { maxWidth: 961 } }}>
            {matches =>
                matches.small ? (
                    <div className='aboutMobile'>
                        <div className='img'>
                            <img src={dma} alt='Dr. Musa Adamu' className='imgMobile' />
                        </div>
                        <div className='historyMobile'>
                            <h2 className='titleMobile'>Dr. Musa Adamu (DMA)<div className='post'>(Doctor of Philosophy, Sarkin Matasan Obi, Durbin Asakio)</div></h2>

                            <p>Dr. Musa Adamu is a Doctor of Philosophy in Petro-chemical engineer, a mentor to thousands of young and
                            bright youths, a philanthropist, a sponsor to many gratuate students in Nasarawa state,
                   a successful entrepreneur, a businessman, an admirable and proven leader.  </p>
                            <p>
                                Born and raised in Obi local government area of Nasarawa state, Dr. Musa Adamu has an unmatchable record
                                when it comes to helping his people at his hometown,
                                in his community or his fellow state person during his time as a private citizen in the state.
                </p>
                            <p>
                                Due to having a great motivation and drive to help his constituents
                                with the most basic needs to live confortably in their daily life, Dr. Musa Adamu is aspiring to become a representative of Lafia/Obi federal constituency
                                in the National House of Assembly
                </p>
                        </div>
                    </div>
                ) : (
                    <div className='about'>
                        <div className='img'>
                            <img src={dma} alt='Dr. Musa Adamu' />
                        </div>
                        <div className='history'>
                            <h2>Dr. Musa Adamu (DMA)<div className='post'>(Doctor of Philosophy, Sarkin Matasan Obi, Durbin Asakio)</div></h2>

                            <p>Dr. Musa Adamu is a Doctor of Philosophy in Petro-chemical engineer, a mentor to thousands of young and
                            bright youths, a philanthropist, a sponsor to many gratuate students in Nasarawa state,
                   a successful entrepreneur, a businessman, an admirable and proven leader.  </p>
                            <p>
                                Born and raised in Obi local government area of Nasarawa state, Dr. Musa Adamu has an unmatchable record
                                when it comes to helping his people at his hometown,
                                in his community or his fellow state person during his time as a private citizen in the state.
                </p>
                            <p>
                                Due to having a great motivation and drive to help his constituents
                                with the most basic needs to live confortably in their daily life, Dr. Musa Adamu is aspiring to become a representative of Lafia/Obi federal constituency
                                in the National House of Assembly
                </p>
                        </div>
                    </div>
                )
            }
        </Media>

    )
}
