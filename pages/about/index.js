import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import About2 from '../../components/about2'
import ServiceSection from '../../components/ServiceSection';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectSection from '../../components/ProjectSection';
import PricingSection from '../../components/PricingSection';

const AboutPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About2/>
            <ServiceSection pbClass={'pb-0'}/>
            <FunFact fClass={'wpo-fun-fact-section-s2 section-padding'}/>
            <ProjectSection/>
            <PricingSection ptClass={'pt-0 pb-0'}/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default AboutPage;


