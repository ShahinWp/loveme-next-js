import React from 'react';
import Navbar from '../../components/Navbar/index';
import Scrollbar from '../../components/scrollbar';
import Hero2 from '../../components/hero2';
import About from '../../components/about';
import PartnerSection from '../../components/PartnerSection';
import ServiceSection2 from '../../components/ServiceSection2';
import FunFact from '../../components/FunFact';
import ProjectSection from '../../components/ProjectSection';
import Testimonial from '../../components/Testimonial';
import TeamSection from '../../components/team';
import CtaSection from '../../components/CtaSection';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';


const HomePage2 = (props) => {

    return (
        <div>
            <Navbar />
            <div className="wpo-box-style">
                <Hero2 />
                <About />
                <ServiceSection2 />
                <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'} />
                <ProjectSection />
                <Testimonial />
                <TeamSection />
                <CtaSection ctClass={'wpo-cta-section-s2'} />
                <BlogSection blogClass={'wpo-blog-section-s2'} />
                <PartnerSection tNone={'wpo-partners-section-s2'} />
                <Footer />
            </div>
            <Scrollbar />
        </div>
    )
};
export default HomePage2;


