import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hakkımda - Klinik Psikolog Berre Yılmaz",
  description: "Klinik Psikolog Berre Yılmaz hakkında bilgi. BDT eğitimi, bireysel ve çift terapisi alanında uzman. Okan Üniversitesi Klinik Psikoloji yüksek lisans öğrencisi.",
  keywords: "berre yılmaz, klinik psikolog, BDT, bilişsel davranışçı terapi, psikoloji eğitimi, gebze psikolog",
  openGraph: {
    title: "Hakkımda - Klinik Psikolog Berre Yılmaz",
    description: "BDT eğitimi almış, bireysel ve çift terapisi alanında uzman klinik psikolog.",
    type: "profile",
    locale: "tr_TR",
  }
};

export default function About() {
  return (
    <>
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page_title mb-0">Hakkımda</h1>
            </div>
            <div className="col-lg-6">
              <ul className="breadcrumb_nav unordered_list justify-content-lg-end justify-content-center">
                <li><Link href="/">Ana Sayfa</Link></li>
                <li>Hakkımda</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="decoration_item shape_leaf_1">
          <Image src="/images/shapes/shape_leaf_left.svg" alt="Shape Leaf" width={200} height={200} />
        </div>
        <div className="decoration_item shape_leaf_2">
          <Image src="/images/shapes/shape_leaf_right.svg" alt="Shape Leaf" width={200} height={200} />
        </div>
      </section>

      <section className="about_section section_space_lg">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 order-lg-last">
              <div className="image_widget">
                <Image src="/images/hero/berre-yilmaz.jpg" alt="Klinik Psikolog Berre Yılmaz" width={600} height={700} />
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
                    <mark>Merhaba, ben Berre Yılmaz.</mark>
                  </h2>
                  <p className="section_heading_description mb-0">
                    Medipol Üniversitesi Psikoloji Lisans mezunuyum. Lisans eğitimim boyunca insanın iç dünyasını anlamaya, duyguların görünmeyen katmanlarını keşfetmeye ve bireyin kendisiyle kurduğu ilişkiyi derinlemesine incelemeye odaklandım.
                  </p>
                  <p className="section_heading_description mb-0 mt-3">
                    Bilişsel Davranışçı Terapi (BDT) eğitimimi tamamlayarak, danışanlarımla bilimsel temellere dayanan, yapılandırılmış ve çözüm odaklı bir yaklaşım benimsemekteyim. Her bireyin hikâyesinin kendine özgü olduğuna inanıyor, bu doğrultuda süreci kişiye özel bir şekilde ele alıyorum.
                  </p>
                  <p className="section_heading_description mb-0 mt-3">
                    Şu anda Okan Üniversitesi Klinik Psikoloji yüksek lisans programında eğitimime devam ederek mesleki gelişimimi sürdürmekteyim.
                  </p>
                  <p className="section_heading_description mb-0 mt-3">
                    Benim için terapi; yalnızca sorunların konuşulduğu bir alan değil, aynı zamanda kişinin kendini yeniden keşfettiği, duygularına alan açtığı ve içsel dengesini kurmaya başladığı bir yolculuktur. Bu yolculukta amacım; bireylerin kendilerini daha iyi anlamalarına, yaşamlarında daha sağlam ve farkında adımlar atmalarına eşlik edebilmektir.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <ul className="info_list unordered_list_block">
                      <li>
                        <span className="info_icon"><i className="fa-light fa-circle-check"></i></span>
                        <span className="info_text">Bireysel Danışmanlık</span>
                      </li>
                      <li>
                        <span className="info_icon"><i className="fa-light fa-circle-check"></i></span>
                        <span className="info_text">Grup Terapisi</span>
                      </li>
                      <li>
                        <span className="info_icon"><i className="fa-light fa-circle-check"></i></span>
                        <span className="info_text">Online Terapi</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-6 mobile-no-padding-top">
                    <ul className="info_list unordered_list_block">
                      <li>
                        <span className="info_icon"><i className="fa-light fa-circle-check"></i></span>
                        <span className="info_text">BDT Yaklaşımı</span>
                      </li>
                      <li>
                        <span className="info_icon"><i className="fa-light fa-circle-check"></i></span>
                        <span className="info_text">Çift Terapisi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funfact_section">
        <div className="container">
          <div className="counter_wrapper">
            <div className="row align-items-center text-center">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="counter_item">
                  <div className="counter_value">
                    <AnimatedCounter target={20} />
                    <span>+</span>
                  </div>
                  <h3 className="counter_title">Yıllık Deneyim</h3>
                  <p className="counter_description mb-0">Psikoloji alanında</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="counter_item">
                  <div className="counter_value">
                    <AnimatedCounter target={840} />
                    <span>+</span>
                  </div>
                  <h3 className="counter_title">Yardım Alan Danışan</h3>
                  <p className="counter_description mb-0">Bu yıl</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="counter_item">
                  <div className="counter_value">
                    <AnimatedCounter target={98} />
                    <span>%</span>
                  </div>
                  <h3 className="counter_title">Pozitif Geri Bildirim</h3>
                  <p className="counter_description mb-0">Danışan memnuniyeti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work_process_section section_space_lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-last">
              <div className="images_group_widget">
                <ul className="unordered_list">
                  <li>
                    <Image src="/images/about/about_image_6-min.png" alt="Talking Minds" width={250} height={250} />
                    <Image src="/images/about/about_image_7-min.png" alt="Talking Minds" width={250} height={250} />
                  </li>
                  <li>
                    <Image src="/images/about/about_image_8-min.png" alt="Talking Minds" width={250} height={250} />
                    <Image src="/images/about/about_image_9-min.png" alt="Talking Minds" width={250} height={250} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section_heading">
                <h2 className="section_heading_text mb-0">
                  Terapi Süreci Aşamaları
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="work_process_item">
                    <div className="serial_number">01</div>
                    <h3 className="item_title">İletişim ve Randevu</h3>
                    <p className="mb-0">Telefon, e-posta veya sosyal medya üzerinden iletişime geçerek randevu alabilirsiniz.</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="work_process_item">
                    <div className="serial_number">02</div>
                    <h3 className="item_title">İlk Görüşme</h3>
                    <p className="mb-0">Size uygun gün ve saatte ilk görüşme randevunuz belirlenir.</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="work_process_item">
                    <div className="serial_number">03</div>
                    <h3 className="item_title">Terapi Süreci</h3>
                    <p className="mb-0">Birlikte belirlediğimiz hedefler doğrultusunda terapi seansları düzenli olarak devam eder.</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="work_process_item">
                    <div className="serial_number">04</div>
                    <h3 className="item_title">Değerlendirme ve İlerleme</h3>
                    <p className="mb-0">Süreç boyunca ilerlemenizi birlikte değerlendiririz ve gerektiğinde planı güncelleriz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
