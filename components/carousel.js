import Slider from 'react-slick'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function NextArrow({ className, onClick }) {
    return (
        <Icon
            className={`${className} slick-arrow right-2 md:right-8`}
            onClick={onClick}
            icon={faAngleRight}
        />
    );
}

function PrevArrow({ className, onClick }) {
    return (
        <Icon
            className={`${className} slick-arrow left-2 md:left-8`}
            onClick={onClick}
            icon={faAngleLeft}
        />
    );
}

function slideContent({ type, ssrc, psrc }) {
    return (
        <div className="flex flex-col justify-center content-center my-4 max-h-[80vh] w-11/12 max-w-[960px] mx-auto">
            {(type === 'image') &&
                <img className="object-contain" src={ssrc} />
            }
            {(type === 'video') &&
                // Note the capitalization in "playsInline" to get it through NextJS to the browser. "playsinline" was stripped
                <video autoPlay loop muted playsInline poster={psrc} src={ssrc} type="video/mp4" className="drop-shadow-lg rounded-lg " />
            }
            {(type === 'youtube') &&
                <div className="flex flex-col justify-center content-center my-4">
                    <div className="relative overflow-hidden pb-video-ratio">
                        <iframe className="absolute top-0 left-0 w-full h-full drop-shadow-lg rounded-lg" src={`https://www.youtube-nocookie.com/embed/${ssrc}?rel=0&showinfo=0&autoplay=0&mute=1`} title={title} allowFullScreen />
                    </div>
                </div>
            }
        </div>
    );
}

export default function Carousel({ sectionIndex, slides, sliderRef }) {
    // 🤔 Must sanitize projects data

    // Configure Carosuel
    // https://react-slick.neostack.com/
    const sliderSettings = {
        lazyLoad: true,
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        // 🤔 I am still getting "Each child in a list should have a unique key prop" warnings on this line
        <div key={`media-${sectionIndex}`} className="section-media">
            {(slides.length < 2) ?
                // No Slider if only one slide  
                slides.map((slide) => slideContent(slide))
                :
                <Slider ref={sliderRef} {...sliderSettings} className="max-w-[1280px] mx-auto">
                    {slides.map((slide, slideIndex) =>
                        <div key={`slide-${sectionIndex}-${slideIndex}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classes */}
                            {slideContent(slide)}
                        </div>
                    )}
                </Slider>
            }
        </div>
    )
}