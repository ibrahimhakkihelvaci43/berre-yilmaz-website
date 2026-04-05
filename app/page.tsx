import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import AnimatedCounter from '@/components/AnimatedCounter';
import Testimonials from '@/components/Testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ana Sayfa - Psikolog Berre Yılmaz",
  description: "Gebze/Kocaeli'de bireysel terapi, çift terapisi ve online terapi hizmetleri. 3+ yıllık deneyim ile profesyonel psikolojik destek.",
  keywords: "psikolog gebze, çift terapisi, bireysel terapi, online terapi, psikolojik danışmanlık, berre yılmaz",
  openGraph: {
    title: "Psikolog Berre Yılmaz - Psikolojik Danışmanlık",
    description: "Gebze/Kocaeli'de bireysel terapi, çift terapisi ve online terapi hizmetleri.",
    type: "website",
    locale: "tr_TR",
  }
};

export default function Home() {
  return (
    <>
      <section className="hero_section decoration_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero_content_wrap">
                <h1 className="heading_text">
                  Psikolog Berre Yılmaz
                </h1>
                <p className="heading_description">
                  Bireysel terapi, çift terapisi ve aile danışmanlığı alanlarında uzman psikolojik destek hizmeti sunuyorum. Güvenli ve destekleyici bir ortamda, yaşam kalitенizi artırmak için birlikte çalışalım.
                </p>
                <ul className="btns_group unordered_list">
                  <li>
                    <Link className="btn btn-primary" href="/contact">
                      <span className="btn_text" data-text="Randevu Al">
                        Randevu Al
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn btn-outline-secondary" href="/about">
                      <span className="btn_text" data-text="Daha Fazla Bilgi">
                        Daha Fazla Bilgi
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul className="hero_section_counter unordered_list">
                  <li>
                    <div className="counter_item">
                      <div className="counter_value mb-0">
                        <AnimatedCounter target={3} />
                        <span>+</span>
                      </div>
                      <hr />
                      <p className="counter_description mb-0">
                        Yıllık deneyim
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="counter_item">
                      <div className="counter_value mb-0">
                        <AnimatedCounter target={50} />
                        <span>+</span>
                      </div>
                      <hr />
                      <p className="counter_description mb-0">
                        Bu yıl yardım alan danışan
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="counter_item">
                      <div className="counter_value mb-0">
                        <AnimatedCounter target={98} />
                        <span>%</span>
                      </div>
                      <hr />
                      <p className="counter_description mb-0">
                        Müşteri memnuniyeti
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero_image_wrap">
                <Image
                  src="/images/hero/berre-yilmaz.jpg"
                  alt="Psikolog Berre Yılmaz - Gebze/Kocaeli'de Profesyonel Psikolojik Danışmanlık"
                  width={600}
                  height={700}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="decoration_item shape_blur_shadow"></div>
        <div className="decoration_item shape_leaf">
          <Image
            src="/images/shapes/shape_leaf_left_top.svg"
            alt="Shape Leaf - Talking Minds - Psychotherapist Site Template"
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className="service_section section_space_lg bg_primary_light">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="section_heading_text">Sunduğum Hizmetler</h2>
            <p className="section_heading_description mb-0">
              Bireysel ve aile terapisi alanlarında profesyonel psikolojik destek hizmetleri
            </p>
          </div>

          <div className="row justify-content-center">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="service_item">
                  <div className="item_icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="item_contact">
                    <h3 className="item_title">{service.title}</h3>
                    <p>{service.shortDescription}</p>
                    <Link className="btn-link" href={`/service/${service.slug}`}>
                      <span className="btn_text">Detaylı Bilgi</span>
                      <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="btn_wrap pb-0 text-center">
            <Link className="btn btn-primary" href="/service">
              <span className="btn_text" data-text="Tüm Hizmetler">
                Tüm Hizmetler
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about_section section_space_lg">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 order-lg-last">
              <div className="image_widget">
                <Image
                  src="/images/hero/berre-yilmaz.jpg"
                  alt="Psikolog Berre Yılmaz - BDT Eğitimli Terapi Uzmanı"
                  width={600}
                  height={700}
                />
                <div className="image_shape bg_primary_light"></div>
                <div className="about_video_icon">
                  <a className="video_play_btn" href="https://instagram.com/psikologberreylmaz" target="_blank" rel="noopener noreferrer">
                    <i className="fa-duotone fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="section_heading mb-4">
                  <h2 className="section_heading_text">
                    <mark>Psikolog Berre Yılmaz</mark>
                  </h2>
                  <p className="section_heading_description mb-0 ">
                    Bireysel terapi, çift terapisi ve aile danışmanlığı alanlarında uzmanlaşmış bir psikolog olarak, danışanlarıma güvenli ve destekleyici bir ortamda profesyonel destek sunuyorum.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <ul className="info_list unordered_list_block">
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Bireysel Danışmanlık</span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Grup Terapisi</span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Online Terapi</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-6 mobile-no-padding-top">
                    <ul className="info_list unordered_list_block">
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Özel Teknikler</span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Çift Terapisi</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn_wrap pb-0">
                  <Link className="btn btn-primary" href="/about">
                    <span className="btn_text" data-text="Hakkımda">
                      Hakkımda
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="contact_section section_space_lg">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-5">
              <div className="section_heading mb-lg-5">
                <h2 className="section_heading_text">İletişim Bilgileri</h2>
                <p className="section_heading_description mb-0">
                  Randevu almak veya daha fazla bilgi almak için benimle iletişime geçebilirsiniz.
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="contact_info_list unordered_list_block">
                    <li>
                      <div className="item_icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Telefon</h3>
                        <p className="item_info mb-0">0539 387 31 54</p>
                      </div>
                    </li>
                    <li>
                      <div className="item_icon">
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Instagram</h3>
                        <p className="item_info mb-0">@psikologberreylmaz</p>
                      </div>
                    </li>
                    <li>
                      <div className="item_icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Email</h3>
                        <p className="item_info mb-0">psikologberreyilmaz@gmail.com</p>
                      </div>
                    </li>
                    <li>
                      <div className="item_icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Konum</h3>
                        <p className="item_info mb-0">
                          Aslan Yapı, Hacıhalil, Hürriyet Cd.<br />
                          Kat 4 Daire 11, 41400 Gebze/Kocaeli
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="office_hour_list bg_primary_light mt-5">
                <h3 className="area_title">Çalışma Saatleri</h3>
                <ul className="unordered_list_block">
                  <li>
                    <span>Pazartesi - Cumartesi:</span>
                    <span>10:00 - 22:00</span>
                  </li>
                  <li>
                    <span>Pazar:</span>
                    <span>Kapalı</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gmap_canvas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.2728051503063!2d29.437694699999994!3d40.799998599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb214e3b1b7413%3A0xd312439c9c731dde!2sPsikolog%20Berre%20Y%C4%B1lmaz!5e0!3m2!1str!2str!4v1775414215641!5m2!1str!2str" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
