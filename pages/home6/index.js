import React from 'react';
import Navbar from '../../components/Navbar/index';
import Scrollbar from '../../components/scrollbar';
import { connect } from "react-redux";
import ArrivalProduct from '../../components/ArrivalProduct';
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import Hero6 from '../../components/hero6';
import ProductS2 from '../../components/ProductS2/ProductS2';
import Category from '../../components/Category';
import ShopBanner from '../../components/ShopBanner/ShopBanner';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer';


const HomePage6 = (props) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const products = productsArray


    return (
        <div>
            <Navbar topbarNone={'topbarNone'} />
            <Hero6 />
            <ProductS2
                addToCartProduct={addToCartProduct}
                products={products}
            />
            <Category/>
            <ArrivalProduct
                addToCartProduct={addToCartProduct}
                products={products}

            />
            <ShopBanner/>
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart })(HomePage6);


