import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site_footer bg_primary">
      <div className="container">
        <div className="site_footer_content">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="site_logo">
                <Link className="site_link" href="/">
                  <div style={{
                    backgroundColor: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    display: 'inline-block'
                  }}>
                    <Image
                      src="/images/site_logo/logo.jpeg"
                      alt="Berre Yılmaz"
                      width={150}
                      height={50}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="info_list unordered_list justify-content-center">
                <li>
                  <Link href="/">
                    <span className="info_icon">
                      <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="info_text">Ana Sayfa</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="info_icon">
                      <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="info_text">Hakkımda</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    <span className="info_icon">
                      <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="info_text">Hizmetler</span>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <span className="info_icon">
                      <i className="fa-solid fa-circle"></i>
                    </span>
                    <span className="info_text">İletişim</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="social_links unordered_list justify-content-center justify-content-lg-end">
                <li><a href="https://instagram.com/psikologberreylmaz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://wa.me/905393873154" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright_widget text-center">
          <p className="copyright_text m-0">© 2026 <b>Psikolog Berre Yılmaz</b> - Tüm hakları saklıdır</p>
        </div>
      </div>
    </footer>
  );
}
