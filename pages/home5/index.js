import React from 'react';
import Navbar2 from '../../components/Navbar2/index';
import Scrollbar from '../../components/scrollbar';
import Hero5 from '../../components/hero5';
import CoupleSection from '../../components/CoupleSection';
import VideoSection2 from '../../components/VideoSection2';
import StorySection from '../../components/StorySection';
import PortfolioSection from '../../components/PortfolioSection';
import CtaSection2 from '../../components/CtaSection2';
import RSVP from '../../components/RSVP';
import EventSection from '../../components/EventSection';
import PartnerSection from '../../components/PartnerSection';
import BlogSection2 from '../../components/BlogSection2';
import Footer from '../../components/footer';


const HomePage5 = (props) => {

    return (
        <div>
            <Navbar2 topbarNone={'topbarNone'} hclass={'wpo-header-style-3'}/>
            <Hero5 />
            <CoupleSection cClass={'pt-160'}/>
            <VideoSection2/>
            <StorySection/>
            <PortfolioSection/>
            <RSVP/>
            <CtaSection2/>
            <EventSection/>
            <PartnerSection tNone={'wpo-partners-section-s3'}/>
            <BlogSection2 blogClass={'wpo-blog-section-s3'} />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage5;


