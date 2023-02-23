import React, { Component } from 'react';
import SectionTitleS2 from '../SectionTitleS2'
import Lightbox from 'react-image-lightbox';

const images = [
    '/images/portfolio/7.jpg',
    '/images/portfolio/8.jpg',
    '/images/portfolio/9.jpg',
    '/images/portfolio/10.jpg',
    '/images/portfolio/11.jpg',
    '/images/portfolio/12.jpg',
];

export default class PortfolioSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <section className={`wpo-portfolio-section-s2 section-padding ${this.props.pSclass}`} id="gallery">
                    <div className="container-fluid">
                        <SectionTitleS2 MainTitle={'Sweet Moments'} />
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-grids gallery-container clearfix">
                                        {images.map((images, pitem) => (
                                            <div className="grid" key={pitem}>
                                                <div className="img-holder" onClick={() => this.setState({ isOpen: true })}>
                                                    <img src={images} alt="" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}