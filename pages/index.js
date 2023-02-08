import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/index';
import Scrollbar from '../components/scrollbar';
import { connect } from "react-redux";
import Product from '../components/Product/Product';
import { addToCart } from "../store/actions/action";
import api from "../api";
import Hero from '../components/hero';
import PartnerSection from '../components/PartnerSection';
import ServiceSection from '../components/ServiceSection';
import VideoSection from '../components/VideoSection';
import FunFact from '../components/FunFact';
import ProjectSection from '../components/ProjectSection';
import Testimonial from '../components/Testimonial';
import CtaSection from '../components/CtaSection';
import PricingSection from '../components/PricingSection';
import BannerSection from '../components/BannerSection';
import RSVP from '../components/RSVP';
import BlogSection from '../components/BlogSection';
import Footer from '../components/footer';


const HomePage = (props) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const products = productsArray


    return (
        <div>
            <Navbar />
            <div className="wpo-box-style">
                <Hero />
                <PartnerSection/>
                <ServiceSection/>
                <VideoSection/>
                <FunFact/>
                <ProjectSection/>
                <Testimonial/>
                <Product
                    addToCartProduct={addToCartProduct}
                    products={products}
                    
                />
                <CtaSection/>
                <PricingSection/>
                <BannerSection/>
                <RSVP/>
                <BlogSection/>
                <Footer/>
            </div>
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart })(HomePage);


