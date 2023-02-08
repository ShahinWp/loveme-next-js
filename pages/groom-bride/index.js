import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import BrideGrooms from '../../components/BrideGrooms';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const GroomBridePage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Bridesmaid & Groomsman'} pagesub={'Bridesmaid & Groomsman'}/> 
            <BrideGrooms/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default GroomBridePage;


