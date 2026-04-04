import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Home() {
  return (
    <>
      <section className="hero_section decoration_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero_content_wrap">
                <h1 className="heading_text">
                  Klinik Psikolog Berre Yılmaz
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
                        <AnimatedCounter target={20} />
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
                        <AnimatedCounter target={840} />
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
                        Danışan memnuniyet oranı
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
                  alt="Talking Minds – Psychotherapist Site Template"
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
                  alt="About Image - Talking Minds – Psychotherapist Site Template"
                  width={600}
                  height={700}
                />
                <div className="image_shape bg_primary_light"></div>
                <div className="about_video_icon">
                  <a className="video_play_btn popup_video" href="https://www.youtube.com">
                    <i className="fa-duotone fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="section_heading mb-4">
                  <h2 className="section_heading_text">
                    <mark>Klinik Psikolog Berre Yılmaz</mark>
                  </h2>
                  <p className="section_heading_description mb-0 ">
                    Bireysel terapi, çift terapisi ve aile danışmanlığı alanlarında uzmanlaşmış bir psikolog olarak, danışanlarıma güvenli ve destekleyici bir ortamda profesyonel destek sunuyorum.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-5 col-sm-6">
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
                  <div className="col-md-5 col-sm-6">
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

      <section className="testimonial_section section_space_lg">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="section_heading_text">Danışanlarımın Görüşleri</h2>
            <p className="section_heading_description mb-0">
              Terapi sürecinden geçen danışanlarımın deneyimleri
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial_item">
                <ul className="rating_star unordered_list">
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                </ul>
                <div className="author_box">
                  <div className="author_box_image">
                    <Image src="/images/meta/author_image_1.png" alt="Kerry Banks" width={60} height={60} />
                  </div>
                  <div className="author_box_content">
                    <h3 className="author_box_name">Ayşe K.</h3>
                    <span className="author_box_designation">Öğretmen</span>
                  </div>
                </div>
                <p className="mb-0">
                  Berre Hanım ile çalışmaya başladığımda hayatımda çok zor bir dönemden geçiyordum. Kendimi ifade etmekte zorlanıyordum ama o beni her zaman anlayışla dinledi. Seanslarımız sayesinde kendime olan güvenim arttı ve ilişkilerimde daha sağlıklı sınırlar koyabilmeye başladım. Kendisine çok teşekkür ederim.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial_item">
                <ul className="rating_star unordered_list">
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                </ul>
                <div className="author_box">
                  <div className="author_box_image">
                    <Image src="/images/meta/author_image_1.png" alt="Damian York" width={60} height={60} />
                  </div>
                  <div className="author_box_content">
                    <h3 className="author_box_name">Mehmet Y.</h3>
                    <span className="author_box_designation">Mühendis</span>
                  </div>
                </div>
                <p className="mb-0">
                  Eşimle ilişkimizde ciddi sorunlar yaşıyorduk ve çift terapisine başladık. Berre Hanım'ın profesyonel yaklaşımı ve tarafsız tutumu sayesinde birbirimizi daha iyi anlamaya başladık. İletişimimiz çok gelişti ve ilişkimiz eskisinden çok daha güçlü. Terapi sürecine başlamak en doğru kararımızdı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="col-md-6 col-sm-6">
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
                  </ul>
                </div>
                <div className="col-md-6 col-sm-6">
                  <ul className="contact_info_list unordered_list_block">
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
                        <p className="item_info mb-0">Kocaeli / Gebze</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="office_hour_list bg_primary_light mt-5">
                <h3 className="area_title">Çalışma Saatleri</h3>
                <ul className="unordered_list_block">
                  <li>
                    <span>Pazartesi - Cuma:</span>
                    <span>09:00 - 18:00</span>
                  </li>
                  <li>
                    <span>Cumartesi</span>
                    <span>10:00 - 16:00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gmap_canvas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.1234567890123!2d29.4321!3d40.8012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f1234567890%3A0x1234567890abcdef!2sGebze%2C%20Kocaeli!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
