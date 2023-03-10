import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import {Services} from '../../api/service'
import Link from 'next/link'
import ServiceSidebar from './single/sidebar';
import Benefits from './single/benefits';
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Image from 'next/image';


const SeviceSinglePage = (props) => {
    const router = useRouter()
    
    const serviceDetails = Services.find(item => item.slug === router.query.slug)


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={serviceDetails?.title} pagesub={serviceDetails?.title}/>
            <div className="wpo-service-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <Image src={serviceDetails?.ssImg} alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h5>Project Requirement</h5>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the middle.</p>
                                <p>The majority have suffered alteration in some form or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden.</p>

                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <Image src={serviceDetails?.sinnerImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <Image src={serviceDetails?.sinnerImg2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="process-wrap">
                                    <h5>Our work process</h5>
                                    <div className="row">
                                        {Services.slice(0, 3).map((service, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="process-item">
                                                    <div className="process-icon">
                                                        <i className={`fi ${service.fIcon1}`}></i>
                                                    </div>
                                                    <div className="process-text">
                                                        <h3>  <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></h3>
                                                        <p>The lower-numbered purposes are better understood and practiced </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Benefits/>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
};
export default SeviceSinglePage;
