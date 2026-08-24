'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HealthPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">{t('nav-home')}</Link>
          <span>/</span>
          <Link href="/services">{t('nav-services')}</Link>
          <span>/</span>
          <span aria-current="page">{t('health-page-title')}</span>
        </nav>
      </div>

      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <span className="page-header-badge">
              <i className="bi bi-heart-pulse-fill"></i>
              <span>{t('health-page-badge')}</span>
            </span>
            <h1>{t('health-page-title')}</h1>
            <p className="page-header-desc">{t('health-page-desc')}</p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="service-item-card">
              <h3 className="service-item-title">
                <i className="bi bi-hospital"></i>
                <span>{t('health-consultation')}</span>
              </h3>
              <p className="service-item-desc">{t('health-consultation-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-walk-in')}
                </span>
              </div>
            </div>

            <div className="service-item-card">
              <h3 className="service-item-title">
                <i className="bi bi-shield-plus"></i>
                <span>{t('health-vaccination')}</span>
              </h3>
              <p className="service-item-desc">{t('health-vaccination-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-schedule-varies')}
                </span>
              </div>
            </div>

            <div className="service-item-card">
              <h3 className="service-item-title">
                <i className="bi bi-heart"></i>
                <span>{t('health-maternal')}</span>
              </h3>
              <p className="service-item-desc">{t('health-maternal-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-by-appointment')}
                </span>
              </div>
            </div>

            <div className="service-item-card">
              <h3 className="service-item-title">
                <i className="bi bi-prescription2"></i>
                <span>{t('health-medicine')}</span>
              </h3>
              <p className="service-item-desc">{t('health-medicine-desc')}</p>
              <div className="service-item-meta">
                <span>
                  <strong>{t('label-fee')}</strong> {t('label-free-subsidy')}
                </span>
                <span>
                  <strong>{t('label-time')}</strong> {t('label-1-3-days')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Facilities Statistics */}
      <section className="section section-compact">
        <div className="container">
          <div className="health-stats-grid">
            <div className="health-stat-card">
              <span className="health-stat-num">18</span>
              <span className="health-stat-label">{t('health-stat-facilities')}</span>
            </div>
            <div className="health-stat-card">
              <span className="health-stat-num">3</span>
              <span className="health-stat-label">{t('health-stat-hospitals')}</span>
            </div>
            <div className="health-stat-card">
              <span className="health-stat-num">720</span>
              <span className="health-stat-label">{t('health-stat-bhs')}</span>
            </div>
            <div className="health-stat-card">
              <span className="health-stat-num">1</span>
              <span className="health-stat-label">{t('health-stat-mho')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Directory */}
      <section className="section section-compact">
        <div className="container">
          <h2 className="section-title">
            <i className="bi bi-hospital"></i>
            <span>{t('health-section-hospitals')}</span>
          </h2>
          <div className="health-facilities-grid">
            <div className="health-facility-card health-facility-card--hospital">
              <div className="health-facility-badge">Tertiary Hospital</div>
              <h3>{t('health-hospital-brtth')}</h3>
              <p className="health-facility-desc">
                {t('health-hospital-brtth-desc')}
              </p>
              <div className="health-facility-meta">
                <span>
                  <i className="bi bi-geo-alt"></i>
                  <span>{t('health-hospital-brtth-address')}</span>
                </span>
              </div>
            </div>

            <div className="health-facility-card health-facility-card--hospital">
              <div className="health-facility-badge">Provincial Hospital</div>
              <h3>{t('health-hospital-provincial')}</h3>
              <p className="health-facility-desc">
                {t('health-hospital-provincial-desc')}
              </p>
              <div className="health-facility-meta">
                <span>
                  <i className="bi bi-geo-alt"></i>
                  <span>{t('health-hospital-provincial-address')}</span>
                </span>
              </div>
            </div>

            <div className="health-facility-card health-facility-card--hospital">
              <div className="health-facility-badge">Provincial Hospital</div>
              <h3>{t('health-hospital-ziga')}</h3>
              <p className="health-facility-desc">
                {t('health-hospital-ziga-desc')}
              </p>
              <div className="health-facility-meta">
                <span>
                  <i className="bi bi-geo-alt"></i>
                  <span>{t('health-hospital-ziga-address')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Health Office */}
      <section className="section section-compact bg-alt">
        <div className="container">
          <h2 className="section-title">
            <i className="bi bi-building"></i>
            <span>{t('health-section-mho')}</span>
          </h2>
          <div className="health-mho-card">
            <div className="health-mho-content">
              <h3>{t('health-mho-title')}</h3>
              <p>{t('health-mho-desc')}</p>
              <div className="health-mho-services">
                <span>
                  <i className="bi bi-check-circle"></i>
                  <span>{t('health-service-lying-in')}</span>
                </span>
                <span>
                  <i className="bi bi-check-circle"></i>
                  <span>{t('health-service-laboratory')}</span>
                </span>
                <span>
                  <i className="bi bi-check-circle"></i>
                  <span>{t('health-service-immunization')}</span>
                </span>
                <span>
                  <i className="bi bi-check-circle"></i>
                  <span>{t('health-service-prenatal')}</span>
                </span>
                <span>
                  <i className="bi bi-check-circle"></i>
                  <span>{t('health-service-family-planning')}</span>
                </span>
                <span>
                  <i className="bi bi-check-circle"></i>
                  <span>{t('health-service-tb-dots')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Health Network */}
      <section className="section section-compact">
        <div className="container">
          <h2 className="section-title">
            <i className="bi bi-plus-circle"></i>
            <span>{t('health-section-bhs')}</span>
          </h2>
          <p className="section-subtitle">{t('health-bhs-subtitle')}</p>
          <div className="health-bhs-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div className="health-bhs-item" key={n}>
                <span>{t(`health-network-${n}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIV Care Philippines CTA */}
      <section className="section hivcare-cta-section" aria-label="HIV Care Philippines facility directory">
        <div className="container">
          <div className="hivcare-cta-card">
            <span className="hivcare-cta-eyebrow">
              <i className="bi bi-shield-check" aria-hidden="true"></i>
              <span>{t('health-hivcare-cta-eyebrow')}</span>
            </span>
            <img
              src="/assets/images/logo/hivcareph-logo.svg"
              alt="HIV Care Philippines"
              className="hivcare-cta-logo"
              width={168}
              height={50}
              loading="lazy"
            />
            <h2 className="hivcare-cta-heading">{t('health-hivcare-cta-heading')}</h2>
            <p className="hivcare-cta-text">{t('health-hivcare-cta-desc')}</p>
            <div className="hivcare-cta-stats">
              <span className="hivcare-cta-stat">
                <i className="bi bi-hospital" aria-hidden="true"></i>
                <strong>338</strong>
                <span>{t('health-hivcare-cta-stat-facilities')}</span>
              </span>
              <span className="hivcare-cta-stat">
                <i className="bi bi-phone" aria-hidden="true"></i>
                <span>{t('health-hivcare-cta-stat-mobile')}</span>
              </span>
              <span className="hivcare-cta-stat">
                <i className="bi bi-patch-check-fill" aria-hidden="true"></i>
                <span>{t('health-hivcare-cta-stat-verified')}</span>
              </span>
            </div>
            <a
              href="https://hivcareph.org/"
              className="hivcare-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
              <span>{t('health-hivcare-cta-btn')}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
