import React from 'react';
import Navbar2 from '../../components/Navbar2/index';
import Scrollbar from '../../components/scrollbar';
import Hero3 from '../../components/hero3';
import TimeCountDown from '../../components/countdown';
import CoupleSection from '../../components/CoupleSection';
import VideoSection2 from '../../components/VideoSection2';
import StorySection from '../../components/StorySection';
import PortfolioSection from '../../components/PortfolioSection';
import RSVP from '../../components/RSVP';
import CtaSection2 from '../../components/CtaSection2';
import EventSection from '../../components/EventSection';
import PartnerSection from '../../components/PartnerSection';
import BlogSection2 from '../../components/BlogSection2';
import Footer from '../../components/footer';


const HomePage3 = (props) => {

    return (
        <div>
            <Navbar2 />
            <Hero3 />
            <TimeCountDown dateClass={'section-padding'}/>
            <CoupleSection />
            <VideoSection2/>
            <StorySection/>
            <PortfolioSection/>
            <RSVP />
            <CtaSection2/>
            <EventSection/>
            <PartnerSection tNone={'wpo-partners-section-s3'}/>
            <BlogSection2 blogClass={'wpo-blog-section-s3'} />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage3;


