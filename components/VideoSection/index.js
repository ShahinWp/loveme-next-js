import React from 'react'
import VideoModal from '../ModalVideo'
import SectionTitle from '../../components/SectionTitle'
import vimg from '/public/images/cta.jpg'
import Image from 'next/image'

const VideoSection = (props) => {
    return(
        <section className="wpo-video-section section-padding">
            <div className="container">
                <SectionTitle topTitle={'Wedding Ceremony'} MainTitle={'Celebrating Your Love'}/>
                <div className="wpo-video-item">
                    <div className="wpo-video-img">
                        <Image src={vimg} alt=""/>
                        <VideoModal/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;