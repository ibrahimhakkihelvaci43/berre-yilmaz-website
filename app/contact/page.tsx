import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "İletişim - Psikolog Berre Yılmaz",
  description: "Randevu almak için iletişime geçin. Aslan Yapı, Hacıhalil, Hürriyet Cd. Kat 4 Daire 11, Gebze/Kocaeli. Tel: 0539 387 31 54",
  keywords: "randevu, psikolog randevu, gebze psikolog iletişim, terapi randevusu, psikolojik danışmanlık randevu",
  openGraph: {
    title: "İletişim - Psikolog Berre Yılmaz",
    description: "Randevu almak için iletişime geçin. Gebze/Kocaeli. Tel: 0539 387 31 54",
    type: "website",
    locale: "tr_TR",
  }
};

export default function Contact() {
  return (
    <>
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page_title mb-0">İletişim</h1>
            </div>
            <div className="col-lg-6">
              <ul className="breadcrumb_nav unordered_list justify-content-lg-end justify-content-center">
                <li><Link href="/">Ana Sayfa</Link></li>
                <li>İletişim</li>
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

      <section className="contact_section section_space_lg">
        <div className="container">
          <div className="conatiner_box">


            <div className="row align-items-center">
              <div className="col-lg-6 mb-lg-0 mb-5">
                <p style={{ fontWeight: 800, marginBottom: '1.5rem', fontSize: '2rem', color: '#000', maxWidth: '380px' }}>İletişim</p>
                <ul className="contact_info_list unordered_list_block" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
                  <li>
                    <div className="item_icon"><i className="fa-solid fa-phone"></i></div>
                    <div className="item_content">
                      <h3 className="item_title">Telefon Numarası</h3>
                      <p className="item_info mb-0">0539 387 31 54</p>
                    </div>
                  </li>
                  <li>
                    <div className="item_icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="item_content">
                      <h3 className="item_title">Adres</h3>
                      <p className="item_info mb-0">
                        Aslan Yapı, Hacıhalil, Hürriyet Cd.<br />
                        Kat 4 Daire 11, 41400 Gebze/Kocaeli
                      </p>
                    </div>
                  </li>
                </ul>
                <h3 className="social_title" style={{ marginTop: '3.5rem' }}>Sosyal Medya:</h3>
                <ul className="social_links unordered_list">
                  <li><a className="bg-primary" href="https://instagram.com/psikologberreylmaz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a className="bg-primary" href="https://wa.me/905393873154" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="hero_image_wrap">
                  <Image
                    src="/images/hero/berre-yilmaz.jpg"
                    alt="Psikolog Berre Yılmaz"
                    width={600}
                    height={700}
                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
