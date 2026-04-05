import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hizmetler - Klinik Psikolog Berre Yılmaz",
  description: "Çift terapisi, yetişkin terapisi, çocuk terapisi, oyun terapisi ve online terapi hizmetleri. Gebze/Kocaeli'de profesyonel psikolojik destek.",
  keywords: "çift terapisi, bireysel terapi, yetişkin terapisi, çocuk terapisi, oyun terapisi, online terapi, psikolojik danışmanlık hizmetleri",
  openGraph: {
    title: "Hizmetler - Klinik Psikolog Berre Yılmaz",
    description: "Çift terapisi, yetişkin terapisi, çocuk terapisi, oyun terapisi ve online terapi hizmetleri.",
    type: "website",
    locale: "tr_TR",
  }
};

export default function Services() {
  return (
    <>
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page_title mb-0">Tüm Hizmetler</h1>
            </div>
            <div className="col-lg-6">
              <ul className="breadcrumb_nav unordered_list justify-content-lg-end justify-content-center">
                <li><Link href="/">Ana Sayfa</Link></li>
                <li>Tüm Hizmetler</li>
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

      <section className="service_section section_space_lg">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="section_heading_text">Psikolojik Destek Hizmetlerim</h2>
            <p className="section_heading_description mb-0">
              Bireysel ihtiyaçlarınıza özel, profesyonel terapi hizmetleri sunuyorum
            </p>
          </div>

          <div className="row justify-content-center">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="service_item">
                  <div className="item_icon">
                    <Image src={service.icon} alt={service.title} width={80} height={80} />
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
        </div>
      </section>
    </>
  );
}
