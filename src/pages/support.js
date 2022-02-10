import './support.css';
import Media from 'react-media';


export const Support = () => {
    return (
        <Media queries={{ small: { maxWidth: 599 } }}>
            {matches =>
                matches.small ? (
                    <div className='support'>
                        <h2 className='titleMobile'>Support Dr. Musa Adamu</h2>
                        <div className='introMobile'><h4 className='titleMobile'>Do you want to support us for better representation and leadership?</h4>
                            <p>We will need your help to make a positive change to our leadership and improve the quality of life in our constituency.</p>
                            <p>There are key task that one should perform to ensure we make this mission possible. Some of the tasks include:</p>
                            <ul>
                                <li>Spreading the word to your family and friends</li>
                                <li>Volunteering to Dr. Musa Campaign efforts by emailing <span><a className='a' href="mailto:dmagroupng@gmail.com">dmagroupng@gmail.com</a></span></li>
                                <li>Attending Dr. Musa Adamu campaign rally to understand our vision</li>
                                <li>Making sure you vote for Dr. Musa Adamu during the election</li>
                            </ul>
                            <p>Do you want to support the cause through donation?</p>
                        </div>

                    </div>
                ) : (
                    <div className='support'>
                        <h2>Support Dr. Musa Adamu</h2>
                        <div className='intro'><h4>Do you want to support us for better representation and leadership?</h4>
                            <p>We will need your help to make a positive change to our leadership and improve the quality of life in our constituency.
                    <br />There are key task that one should perform to ensure we make this mission possible. Some of the tasks include:</p>
                            <ul>
                                <li>Spreading the word to your family and friends</li>
                                <li>Volunteering to Dr. Musa Campaign efforts by emailing <span><a className='a' href="mailto:dmagroupng@gmail.com">dmagroupng@gmail.com</a></span></li>
                                <li>Attending Dr. Musa Adamu campaign rally to understand our vision</li>
                                <li>Making sure you vote for Dr. Musa Adamu during the election</li>
                            </ul>
                            <p>Do you want to support the cause through donation?</p>
                        </div>

                    </div>
                )
            }
        </Media>

    )
}
