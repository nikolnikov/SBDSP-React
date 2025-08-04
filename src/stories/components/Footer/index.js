'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSFooter = ({
    customClasses = [],
    hideLogo,
    hideNav,
    noMargins,
    noMaxWidth
}) => {
    const year = new Date().getFullYear();

    const menuToggle = e => {
        e.target.classList.toggle('--opened');
    };

    return (
        <>
            <footer>
                <div
                    className={classNames('ds-footer ds-grid', customClasses, {
                        '--max-width': !noMaxWidth,
                        '--margins': !noMargins,
                        '--light': hideNav
                    })}
                >
                    <div className="ds-footer__wrapper">
                        {!hideLogo && (
                            <>
                                <div className="ds-brand-wrapper --small">
                                    <img
                                        src="https://ds.cdn.questdiagnostics.com/assets/img/qd-brand--stacked--white.svg"
                                        alt="Quest Diagnostics"
                                    />
                                </div>
                            </>
                        )}

                        <div className="ds-footer__content">
                            {!hideNav && (
                                <>
                                    <div className="ds-footer__company">
                                        <div className="ds-footer__company-links">
                                            <button
                                                className="ds-footer__link-title"
                                                onClick={e => {
                                                    menuToggle(e);
                                                }}
                                            >
                                                <span className="--plus"></span>
                                                Our company
                                            </button>

                                            <ul>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/about-us"
                                                    >
                                                        About us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/how-we-operate"
                                                    >
                                                        How we operate
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/what-we-do"
                                                    >
                                                        What we do
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/corporate-responsibility"
                                                    >
                                                        Corporate responsibility
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/inclusion-diversity"
                                                    >
                                                        Inclusion and diversity
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/actions-insights"
                                                    >
                                                        Actions and insights
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questdiagnostics.com/our-company/suppliers-partners"
                                                    >
                                                        Suppliers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="ds-link"
                                                        href="https://www.questhealth.com/?itm_campaign=QD-Bottom-Nav-ShopallHP"
                                                    >
                                                        Shop tests
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="ds-footer__company-options">
                                            <a
                                                className="ds-button --inverse --small"
                                                aria-label="Locations"
                                                href="https://www.questdiagnostics.com/home/about/locations/"
                                            >
                                                <label>Locations</label>
                                            </a>
                                            <a
                                                className="ds-button --inverse --small"
                                                aria-label="Career"
                                                href="https://careers.questdiagnostics.com/"
                                            >
                                                <label>Careers</label>
                                            </a>
                                            <a
                                                className="ds-button --inverse --small"
                                                aria-label="Investors"
                                                href="https://ir.questdiagnostics.com/overview/default.aspx"
                                            >
                                                <label>Investors</label>
                                            </a>
                                            <a
                                                className="ds-button --inverse --small"
                                                aria-label="Specilaty labs"
                                                href="https://www.questdiagnostics.com/our-company/specialty-labs"
                                            >
                                                <label>Specialty labs</label>
                                            </a>
                                            <a
                                                className="ds-button --inverse --small"
                                                aria-label="Newsroom"
                                                href="https://newsroom.questdiagnostics.com/"
                                            >
                                                <label>Newsroom</label>
                                            </a>

                                            <div className="ds-footer__social">
                                                <div className="ds-footer__social-title">
                                                    Connect with us
                                                </div>

                                                <a
                                                    className="ds-footer__social-link"
                                                    href="https://www.questdiagnostics.com/social-media"
                                                >
                                                    <span
                                                        className="ds-icon--facebook-logo-fill"
                                                        aria-label="facebook"
                                                    ></span>
                                                </a>
                                                <a
                                                    className="ds-footer__social-link"
                                                    href="https://www.questdiagnostics.com/social-media"
                                                >
                                                    <span
                                                        className="ds-icon--twitter-logo-fill"
                                                        aria-label="twitter"
                                                    ></span>
                                                </a>
                                                <a
                                                    className="ds-footer__social-link"
                                                    href="https://www.questdiagnostics.com/social-media"
                                                >
                                                    <span
                                                        className="ds-icon--youtube-logo-fill"
                                                        aria-label="youtube"
                                                    ></span>
                                                </a>
                                                <a
                                                    className="ds-footer__social-link"
                                                    href="https://www.questdiagnostics.com/social-media"
                                                >
                                                    <span
                                                        className="ds-icon--linkedin-logo-fill"
                                                        aria-label="linkedin"
                                                    ></span>
                                                </a>
                                                <a
                                                    className="ds-footer__social-link"
                                                    href="https://www.questdiagnostics.com/social-media"
                                                >
                                                    <span
                                                        className="ds-icon--instagram-logo"
                                                        aria-label="instagram"
                                                    ></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="ds-footer__legal">
                                <ul className="ds-col-12 ds-flex --row --wrap">
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/site-map"
                                        >
                                            Site map
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/privacy"
                                        >
                                            Privacy notices
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/terms-conditions"
                                        >
                                            Terms
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/contact-us"
                                        >
                                            Contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/nondiscrimination"
                                        >
                                            Language assistance /
                                            Non-discrimination
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/nondiscrimination"
                                        >
                                            Asistencia de idiomas / Aviso de no
                                            discriminación
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/nondiscrimination"
                                        >
                                            語言協助 / 不歧視通知
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/privacy/privacy-shield"
                                        >
                                            Privacy shield
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="ds-link"
                                            href="https://www.questdiagnostics.com/our-company/accessibility"
                                        >
                                            Accessibility
                                        </a>
                                    </li>
                                    <li>
                                        {/* eslint-disable-next-line */}
                                        <a
                                            className="ds-link --icons"
                                            href={null}
                                        >
                                            <img
                                                src="https://ds.cdn.questdiagnostics.com/assets/img/your-privacy.svg"
                                                alt="Your Privacy Choices"
                                            />
                                            <span>Your Privacy Choices</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="ds-footer__copyright">
                                Quest<sup>&reg;</sup> is the brand name used for
                                services offered by Quest Diagnostics
                                Incorporated and its affiliated companies. Quest
                                Diagnostics Incorporated and certain affiliates
                                are CLIA certified laboratories that provide
                                HIPAA covered services.  Other affiliates
                                operated under the Quest
                                <sup>&reg;</sup> brand, such as Quest Consumer
                                Inc., do not provide HIPAA covered services.
                                <br />
                                <br />
                                Quest, Quest Diagnostics, any associated logos,
                                and all associated Quest Diagnostics registered
                                or unregistered trademarks are the property of
                                Quest Diagnostics. All third party marks —
                                <sup>&reg;</sup> and &trade; — are the property
                                of their respective owners. &copy; {year} Quest
                                Diagnostics Incorporated. All rights reserved.
                                Image content features models and is intended
                                for illustrative purposes only.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

QDSFooter.propTypes = {
    customClasses: PropTypes.string,
    logo: PropTypes.bool,
    hideNav: PropTypes.bool,
    noMargins: PropTypes.bool,
    noMaxWidth: PropTypes.bool
};

export default QDSFooter;
