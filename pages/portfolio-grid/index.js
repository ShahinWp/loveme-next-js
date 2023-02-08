import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import PortfolioSection2 from '../../components/PortfolioSection2';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const PortfolioGridPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio Grid'} pagesub={'Portfolio'}/> 
            <PortfolioSection2 pClass={'tb-padding'}/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default PortfolioGridPage;


