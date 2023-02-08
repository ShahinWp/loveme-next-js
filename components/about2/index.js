import React from 'react'
import Image from 'next/image'
import abimg from '/public/images/about/1.png'
import abimg3 from '/public/images/about/shape.png'
import abimg4 from '/public/images/about/thumb.png'


const About2 = (props) => {

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <Image src={abimg} alt="" />
                                </div>
                            </div>
                            <div className="ab-shape">
                                <Image src={abimg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-icon">
                                <div className="icon">
                                    <Image src={abimg4} alt="" />
                                </div>
                            </div>
                            <div className="wpo-about-icon-content">
                                <h2>Planner of Your Perfect Wedding</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters, as opposed to using
                                </p>
                                <p>
                                    Content here, content here', making it look like readable English. Many desktop
                                    publishing packages and web page editors now use Lorem Ipsum as their default
                                    model text.</p>
                                <ul>
                                    <li>Going through the cites of the word in classNameical.</li>
                                    <li>There are many variations of passages.</li>
                                    <li>Making it look like readable and spoken English.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;