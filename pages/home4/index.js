import React from 'react';
import Navbar from '../../components/Navbar/index';
import Scrollbar from '../../components/scrollbar';
import Hero4 from '../../components/hero4';
import TimeCountDown from '../../components/countdown';
import StorySection from '../../components/StorySection';
import PortfolioSection2 from '../../components/PortfolioSection2';
import TeamSection from '../../components/team';
import CtaSection2 from '../../components/CtaSection2';
import EventSection from '../../components/EventSection';
import PartnerSection from '../../components/PartnerSection';
import BlogSection2 from '../../components/BlogSection2';
import Footer from '../../components/footer';


const HomePage4 = (props) => {

    return (
        <div>
            <Navbar topbarNone={'topbarNone'} hclass={'wpo-header-style-2'}/>
            <Hero4 />
            <TimeCountDown dateClass={'section-padding'}/>
            <StorySection/>
            <PortfolioSection2/>
            <TeamSection/>
            <CtaSection2/>
            <EventSection/>
            <PartnerSection tNone={'wpo-partners-section-s3'}/>
            <BlogSection2 blogClass={'wpo-blog-section-s3'} />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default HomePage4;


