import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import PricingSection from '../../components/PricingSection';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const PricingPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <PricingSection ptClass={'tnone'}/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default PricingPage;


