import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page_banner decoration_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page_title mb-0">{service.title}</h1>
            </div>
            <div className="col-lg-6">
              <ul className="breadcrumb_nav unordered_list justify-content-lg-end justify-content-center">
                <li><Link href="/">Ana Sayfa</Link></li>
                <li><Link href="/service">Hizmetler</Link></li>
                <li>{service.title}</li>
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

      <section className="service_details_section section_space_lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="details_content text-center">
                <h2 className="details_item_title">{service.title} Nedir?</h2>
                <p>{service.shortDescription}</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="details_content">
                {service.fullDescription.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="details_info_title mt-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n');
                    return (
                      <ul key={index} className="info_list unordered_list_block mb-4">
                        {items.map((item, i) => (
                          <li key={i}>
                            <span className="info_icon">
                              <i className="fa-light fa-circle-check"></i>
                            </span>
                            <span className="info_text">{item.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  } else {
                    return <p key={index} className="mb-3">{paragraph}</p>;
                  }
                })}
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="service_author h-100 text-center">
                <div className="author_image mb-3 d-flex justify-content-center">
                  <Image src="/images/hero/berre-yilmaz.jpg" alt="Klinik Psikolog Berre Yılmaz" width={100} height={100} />
                </div>
                <div className="author_content">
                  <h4 className="author_name">Berre Yılmaz</h4>
                  <span className="author_designation">Klinik Psikolog</span>
                  <p>
                    Medipol Üniversitesi Psikoloji mezunu. BDT eğitimli. Okan Üniversitesi Klinik Psikoloji yüksek lisans öğrencisi.
                  </p>
                  <Link className="btn-link" href="/about">
                    <span className="btn_text">Daha Fazla Bilgi</span>
                    <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_cost_info h-100">
                <h3 className="details_info_title">Randevu Bilgileri</h3>
                <p>
                  {service.title} hakkında detaylı bilgi almak ve randevu oluşturmak için benimle iletişime geçebilirsiniz.
                </p>
                <ul className="contact_info_list unordered_list_block mb-3">
                  <li className="mb-2">
                    <span className="info_icon"><i className="fa-solid fa-phone"></i></span>
                    <span className="info_text">0539 387 31 54</span>
                  </li>
                  <li>
                    <span className="info_icon"><i className="fa-brands fa-instagram"></i></span>
                    <span className="info_text">psikologberreylmaz</span>
                  </li>
                </ul>
                <Link className="btn-link" href="/contact">
                  <span className="btn_text">İletişime Geç</span>
                  <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section section_space_lg bg_primary_light">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="section_heading_text">Diğer Hizmetler</h2>
            <p className="section_heading_description mb-0">
              Sunduğum diğer profesyonel terapi hizmetleri
            </p>
          </div>

          <div className="row justify-content-center">
            {services.filter(s => s.slug !== service.slug).slice(0, 3).map((otherService) => (
              <div key={otherService.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="service_item">
                  <div className="item_icon">
                    <Image src={otherService.icon} alt={otherService.title} width={80} height={80} />
                  </div>
                  <div className="item_contact">
                    <h3 className="item_title">{otherService.title}</h3>
                    <p>{otherService.shortDescription}</p>
                    <Link className="btn-link" href={`/service/${otherService.slug}`}>
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

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
