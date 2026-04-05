'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { testimonials } from '@/data/testimonials';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: '-60px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--bs-primary)',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1
      }}
    >
      <i className="fa-solid fa-chevron-right" style={{ color: '#fff', fontSize: '18px' }}></i>
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: '-60px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--bs-primary)',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1
      }}
    >
      <i className="fa-solid fa-chevron-left" style={{ color: '#fff', fontSize: '18px' }}></i>
    </button>
  );
}

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: !isMobile,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="testimonial_section section_space_lg">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="section_heading_text">Danışanlarımın Görüşleri</h2>
          <p className="section_heading_description mb-0">
            Terapi sürecinden geçen danışanlarımın deneyimleri
          </p>
        </div>

        <div style={{ position: 'relative', padding: '40px 50px' }}>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="testimonial_item">
                  <div className="author_box">
                    <div className="author_box_content">
                      <h3 className="author_box_name">{testimonial.name}</h3>
                    </div>
                  </div>
                  <p className="mb-0">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
