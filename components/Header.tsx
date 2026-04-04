'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site_header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-5">
            <div className="site_logo">
              <Link className="site_link" href="/" onClick={closeMenu}>
                <span style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  color: '#2d6a4f',
                  lineHeight: 1.2,
                  display: 'inline-block'
                }}>
                  Berre Yılmaz
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-2">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className="main_menu_inner navbar-collapse justify-content-center"
                id="main_menu_dropdown"
                style={{ display: isMenuOpen ? 'block' : 'none' }}
              >
                <ul className="main_menu_list unordered_list">
                  <li className={pathname === '/' ? 'active' : ''}>
                    <Link className="nav-link" href="/" onClick={closeMenu}>Ana Sayfa</Link>
                  </li>
                  <li className={pathname === '/about' ? 'active' : ''}>
                    <Link className="nav-link" href="/about" onClick={closeMenu}>Hakkımda</Link>
                  </li>
                  <li className={`dropdown ${pathname?.startsWith('/service') ? 'active' : ''}`}>
                    <a className="nav-link" href="#" id="programs_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hizmetler
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="programs_submenu">
                      <li><Link href="/service" onClick={closeMenu}>Tüm Hizmetler</Link></li>
                      <li><Link href="/service/cift-terapisi" onClick={closeMenu}>Çift Terapisi</Link></li>
                      <li><Link href="/service/yetiskin-terapisi" onClick={closeMenu}>Yetişkin Terapisi</Link></li>
                    </ul>
                  </li>
                  <li className={pathname === '/contact' ? 'active' : ''}>
                    <Link className="nav-link" href="/contact" onClick={closeMenu}>İletişim</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-3 col-5">
            <ul className="header_btns_group unordered_list justify-content-end">
              <li>
                <button
                  className="mobile_menu_btn"
                  type="button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-bars"></i>
                </button>
              </li>
              <li>
                <a className="btn_hotline" href="tel:+905393873154">
                  <span className="btn_icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span className="btn_text">0539 387 31 54</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
