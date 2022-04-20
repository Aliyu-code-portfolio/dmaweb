//import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
//import { Navbar } from "./../components/navbar";
//import { Sidebar } from "./../components/sidebar";
import { Slideshow } from '../components/slideshow/slide'
//import Image1 from "../images/design-notes.svg";
// import Image1 from "../images/Babaedit.png";
//import Image2 from "../images/space.svg";
import Image2 from "../images/23.webp";
import {
  //InfoSectionLight, 
  InfoSectionEvent
} from "../components/infoSectionLight";
import Contact from "../components/services";
import { useEffect } from "react";

const data = [{ 'venue': 'Green garden, Obi', 'date': '12 May 2022', 'time': '4pm' }]
export const Home = () => {
  useEffect(() => {
    document.title = "Home | DMA"
  }, [])
  return (
    <>
      <div className='bg-black'></div>
      <Slideshow />
      <InfoSection
        // image={Image1}
        subtitle="Your vote is power"
        title="Why Your Votes Count"
        text="Positive change begins with individuals not groups, we are heading toward one of the most consequential election in the history of our constituency, and one of the most important ways we can leave our mark on history is to organize and vote. Voting is your right, express it, vote for Dr. Musa for House of representative Lafia/Obi federal constituency"
        btnText="Make sure you vote"
      />
      <InfoSectionEvent
        image={Image2}
        title="Upcoming events"
        info={data}
        btnText="Don't miss it"
      />
      <Contact id={'contact'} />
      {/* <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Duis et lectus accumsan"
        title="Quisque dui justo"
        text="Cras et ligula eget neque ornare tempor et vitae est. Duis et lectus accumsan, mollis dui a, finibus metus. Quisque dui justo, ullamcorper eget luctus id, consectetur eget nunc. In quis arcu erat. Morbi consequat imperdiet lorem, porta porta erat hendrerit vel. Aliquam dignissim purus at dolor posuere euismod."
        btnText="Read more"
      /> */}

    </>
  );
};
