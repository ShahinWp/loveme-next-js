import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import PortfolioSection from '../../components/PortfolioSection';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const PortfolioMashonaryPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio Masonry'} pagesub={'Portfolio'}/> 
            <PortfolioSection pSclass={'wpo-portfolio-section-s4'}/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default PortfolioMashonaryPage;


