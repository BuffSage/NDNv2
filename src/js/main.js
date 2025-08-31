;(function () {
  'use strict';

  // -----------------------------
  // i18n dictionary (no hardcoded year in footer)
  // -----------------------------
  const I18N = {
    de: {
      nav: { services: 'Leistungen', about: 'Über Uns', contact: 'Kontakt' },
      footer: {
        nav_title: 'Navigation',
        contact_title: 'Kontakt',
        legal_title: 'Rechtliches',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        rights: 'NDN Sanierung. Alle Rechte vorbehalten.',
        developed_by: 'Entwickelt von Yondev.com',
      },
      home: {
        hero_title: 'NDN Sanierung',
        hero_tagline_1: 'Professionelle Asbest- und Schadstoffsanierung',
        hero_tagline_2: 'Zertifiziert • Sicher • Zuverlässig',
        tagline:
          'Asbest- und Schadstoffsanierung mit Zertifizierung (TRGS 519). Sicher. Schnell. Fachgerecht.',
        cta_services: 'Zu den Leistungen',
        cta_contact: 'Kontakt aufnehmen',
        point1: 'Asbestsanierung gemäß TRGS 519. Wir kümmern uns um Planung, Durchführung und Entsorgung.',
        point2_title: 'Schnell vor Ort',
        point2: 'Flexible Terminvereinbarung. Unser Team ist kurzfristig einsatzbereit.',
        point3_title: 'Erfahrung',
        point3: 'Qualifiziertes Fachpersonal. Profitieren Sie von jahrelanger Erfahrung.',
        map_title: 'Anfahrt & Karte',
      },
      leistungen: {
        title: 'Unsere Fachleistungen im Detail',
        asbestos: {
          title: 'Asbestsanierung nach TRGS 519',
          text: 'Asbest ist eine ernstzunehmende Gefahr für die Gesundheit.<br>Wir sanieren fachgerecht und zertifiziert u.a.:',
          item1: 'Asbestzementplatten (Eternit) an Dächern und Fassaden',
          item2: 'Asbesthaltige Rohre, Lüftungskanäle und Formteile',
          item3: 'Floor-Flex-Platten und asbesthaltige Kleber',
          item4: 'Brandschutzverkleidungen, Dichtmassen & Spritzasbest',
          outro:
            'Wir arbeiten staubarm, sicher und nach Vorschrift – inklusive Entsorgung und Dokumentation.',
        },
        kmf: {
          title: 'KMF & Schadstoffe',
          text: 'Künstliche Mineralfasern und weitere Schadstoffe erfordern fachgerechte Sanierung.<br>Unser Expertenteam entfernt:',
          item1: 'KMF (Künstliche Mineralfasern) – Glaswolle, Steinwolle, Schlackenwolle',
          item2: 'PCB (Polychlorierte Biphenyle) in Fugenmassen und Anstrichen',
          item3: 'PAK (Polyzyklische aromatische Kohlenwasserstoffe) in Teerkleber',
          item4: 'Holzschutzmittel wie PCP, Lindan und DDT',
          outro: 'Alle Arbeiten erfolgen nach aktuellen Richtlinien mit entsprechender Schutzausrüstung und ordnungsgemäßer Entsorgung.',
        },
        gallery_title: 'Einblicke in unsere Arbeit – Asbest',
      },
      about: {
        title: 'Über Uns',
        text: 'Wir sind spezialisiert auf Asbest- und Schadstoffsanierung und arbeiten zuverlässig, termingerecht und nach höchsten Sicherheitsstandards.',
        mission_title: 'Unsere Mission',
        mission_text: 'Wir sanieren Schadstoffe sicher, effizient und transparent',
        mission_highlight: 'Mit klarer Kommunikation und dokumentierten Prozessen.',
        why_title: 'Warum NDN?',
        point1: 'Zertifiziert nach TRGS 519',
        point2: 'Staubarme Verfahren & Unterdruckhaltung',
        point3: 'Eigener Entsorgungsnachweis & lückenlose Dokumentation',
        point4: 'Termintreu und sauber – vom Aufmaß bis zur Übergabe',
        process_title: 'Ablauf',
        step1: 'Kostenlose Erstberatung & Besichtigung',
        step2: 'Sanierungsplan inkl. Schutzmaßnahmen',
        step3: 'Fachgerechte Ausführung & Entsorgung',
        step4: 'Reinigung, Freigabe & Dokumentation',
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Schreiben Sie uns oder rufen Sie an:',
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        submit: 'Senden',
      },
    },
    en: {
      nav: { services: 'Services', about: 'About Us', contact: 'Contact' },
      footer: {
        nav_title: 'Navigation',
        contact_title: 'Contact',
        legal_title: 'Legal',
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        rights: 'NDN Sanierung. All rights reserved.',
        developed_by: 'Developed by Yondev.com',
      },
      home: {
        hero_title: 'NDN Sanierung',
        hero_tagline_1: 'Professional Asbestos & Hazardous Material Remediation',
        hero_tagline_2: 'Certified • Safe • Reliable',
        tagline:
          'Certified asbestos and hazardous material remediation (TRGS 519). Safe. Fast. Professional.',
        cta_services: 'View Services',
        cta_contact: 'Contact Us',
        point1: 'Asbestos remediation according to TRGS 519. We handle planning, execution and disposal.',
        point2_title: 'Quick on Site',
        point2: 'Flexible scheduling. Our team is ready at short notice.',
        point3_title: 'Experience',
        point3: 'Qualified specialists. Benefit from years of hands-on experience.',
        map_title: 'Directions & Map',
      },
      leistungen: {
        title: 'Our Professional Services in Detail',
        asbestos: {
          title: 'Asbestos Remediation (TRGS 519)',
          text: 'Asbestos is a serious health hazard.<br>We remediate professionally and certified including:',
          item1: 'Asbestos cement panels (Eternit) on roofs and facades',
          item2: 'Asbestos-containing pipes, ducts and fittings',
          item3: 'Floor-flex tiles and asbestos adhesives',
          item4: 'Fire protection cladding, sealants & sprayed asbestos',
          outro:
            'We work with low dust, safely and compliantly – including disposal and documentation.',
        },
        kmf: {
          title: 'MMF & Pollutants',
          text: 'Mineral wool fibers and other pollutants require professional remediation.<br>Our expert team removes:',
          item1: 'MMF (Mineral wool fibers) – Glass wool, rock wool, slag wool',
          item2: 'PCB (Polychlorinated biphenyls) in sealants and coatings',
          item3: 'PAH (Polycyclic aromatic hydrocarbons) in tar adhesives',
          item4: 'Wood preservatives such as PCP, Lindane and DDT',
          outro: 'All work is carried out according to current regulations with appropriate protective equipment and proper disposal.',
        },
        gallery_title: 'A look at our work – Asbestos',
      },
      about: {
        title: 'About Us',
        text: 'We specialise in asbestos and pollutant remediation, working reliably, on schedule and to the highest safety standards.',
        mission_title: 'Our Mission',
        mission_text: 'We remediate hazardous materials safely, efficiently and transparently',
        mission_highlight: 'With clear communication and documented processes.',
        why_title: 'Why NDN?',
        point1: 'Certified according to TRGS 519',
        point2: 'Low-dust methods & negative pressure maintenance',
        point3: 'Own disposal documentation & complete documentation',
        point4: 'Punctual and clean – from measurement to handover',
        process_title: 'Process',
        step1: 'Free initial consultation & site inspection',
        step2: 'Remediation plan including protective measures',
        step3: 'Professional execution & disposal',
        step4: 'Cleaning, clearance & documentation',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Write to us or call:',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
      },
    },
  };

  // -----------------------------
  // Helpers
  // -----------------------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const getByPath = (obj, path) =>
    path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

  const currentLang = () => {
    // Detect language from URL path
    const path = window.location.pathname;
    if (path.includes('/en/')) {
      return 'en';
    }
    // Default to stored language or German
    return document.documentElement.getAttribute('lang') || 
           localStorage.getItem('lang') || 'de';
  };

  function updateFooterRights(lang) {
    const dict = I18N[lang] || I18N.de;
    const base = dict.footer?.rights || '';
    const developerCredit = dict.footer?.developed_by || '';
    
    // Create the base copyright text (remove any existing © and year, but keep the original ending punctuation)
    const baseText = String(base).replace(/^©\s*\d{4}\s*/, '').trim();
    const copyrightText = `© ${new Date().getFullYear()} ${baseText} `;
    
    // Create the developer credit with clickable link
    const isGerman = lang === 'de';
    const beforeLink = isGerman ? 'Entwickelt von ' : 'Developed by ';
    const linkText = 'Yondev.com';
    
    $$('.rights').forEach((el) => {
      // Clear the element
      el.innerHTML = '';
      
      // Add copyright text
      const copyrightSpan = document.createElement('span');
      copyrightSpan.textContent = copyrightText + beforeLink;
      el.appendChild(copyrightSpan);
      
      // Add clickable link
      const link = document.createElement('a');
      link.href = 'https://yondev.com';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = linkText;
      link.style.color = 'inherit';
      link.style.textDecoration = 'none';
      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });
      
      el.appendChild(link);
    });
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.de;
    $$('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const val = getByPath(dict, key);
      if (typeof val === 'string') node.innerHTML = val;
    });
    updateFooterRights(lang);
    
    // Recalculate underlines after language change
    setTimeout(initDynamicUnderlines, 50);
  }

  function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    try {
      localStorage.setItem('lang', lang);
    } catch (_) {}
    applyLang(lang);
    // updateLangToggleButton(lang); // Disabled language toggle JS to always show 'DE/EN' as static text in the footer
  }
  
  // Disabled language toggle JS to always show 'DE/EN' as static text in the footer
  // function updateLangToggleButton(lang) {
  //   // Disabled for main homepage to allow manual HTML content
  //   if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' || window.location.pathname.match(/NDNSanierung\\index\.html$/)) {
  //     return;
  //   }
  //   const langBtn = $('#langToggle');
  //   if (!langBtn) return;
    
  //   // Show current language clearly
  //   if (lang === 'de') {
  //     langBtn.textContent = 'DE';
  //     langBtn.setAttribute('aria-label', 'Switch to English');
  //     langBtn.title = 'Currently German - Click for English';
  //   } else {
  //     langBtn.textContent = 'EN';
  //     langBtn.setAttribute('aria-label', 'Auf Deutsch wechseln');
  //     langBtn.title = 'Currently English - Click for German';
  //   }
    
  //   // Add visual indication of current language
  //   langBtn.classList.remove('lang-de', 'lang-en');
  //   langBtn.classList.add(`lang-${lang}`);
  // }

  // -----------------------------
  // Init blocks
  // -----------------------------
  // Theme toggle removed

  // Disabled language toggle JS to always show 'DE/EN' as static text in the footer
  // function initLangToggle() {
  //   const langBtn = $('#langToggle');
  //   if (!langBtn) return;
    
  //   langBtn.addEventListener('click', () => {
  //     const currentLangCode = currentLang();
  //     const targetLang = currentLangCode === 'de' ? 'en' : 'de';
      
  //     // Get current path info
  //     const currentPath = window.location.pathname;
  //     const isInEnFolder = currentPath.includes('/en/');
      
  //     // Get the filename
  //     const pathParts = currentPath.split('/');
  //     let filename = pathParts[pathParts.length - 1];
  //     if (!filename || filename === '') {
  //       filename = 'index.html';
  //     }
      
  //     let targetUrl;
      
  //     if (targetLang === 'en') {
  //       // Switching to English
  //       if (isInEnFolder) {
  //         // Already in EN folder, just update state
  //         setLang('en');
  //         return;
  //       } else {
  //         // Need to go to EN folder
  //         targetUrl = './en/' + filename;
  //       }
  //     } else {
  //       // Switching to German
  //       if (isInEnFolder) {
  //         // In EN folder, need to go back to root
  //         targetUrl = '../' + filename;
  //       } else {
  //         // Already in root, just update state
  //         setLang('de');
  //         return;
  //       }
  //     }
      
  //     // Navigate to target URL
  //     console.log('Navigating to:', targetUrl);
  //     window.location.href = targetUrl;
  //   });
    
  //   // Initialize button display
  //   updateLangToggleButton(currentLang());
  // }

  function initMenuToggle() {
    const menuBtn = $('#menuBtn');
    if (!menuBtn) return;
    menuBtn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-open');
    });
  }

    function initCookieConsent() {
      try {
        if (localStorage.getItem('cookieConsent')) return;
      } catch (_) {}

      const inEn = location.pathname.includes('/en/');
      const policyHref = inEn
        ? currentLang() === 'de'
          ? '../datenschutz.html'
          : 'datenschutz.html'
        : currentLang() === 'de'
          ? 'datenschutz.html'
          : 'en/datenschutz.html';

      const banner = document.createElement('div');
      banner.className = 'cookie-banner';
      banner.innerHTML = `
        <p>${
          currentLang() === 'de'
            ? `Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mehr dazu in unserer <a href="${policyHref}">Datenschutzerkl\u00e4rung</a>.`
            : `We use cookies to improve your experience. See our <a href="${policyHref}">Privacy Policy</a>.`
        }</p>
        <div class="cookie-actions">
          <button class="btn" id="cookieReject">${
            currentLang() === 'de' ? 'Alle ablehnen' : 'Reject all'
          }</button>
          <button class="btn" id="cookieSettings">${
            currentLang() === 'de' ? 'Einstellungen' : 'Settings'
          }</button>
          <button class="btn primary" id="cookieAccept">${
            currentLang() === 'de' ? 'Alle akzeptieren' : 'Accept all'
          }</button>
        </div>
      `;

      const overlay = document.createElement('div');
      overlay.className = 'cookie-modal';
      overlay.style.display = 'none';
      overlay.innerHTML = `
        <div class="cookie-box">
          <h2>${currentLang() === 'de' ? 'Cookie-Einstellungen' : 'Cookie Settings'}</h2>
          <p>${
            currentLang() === 'de'
              ? 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.'
              : 'We use cookies to improve your experience.'
          }</p>
          <div class="cookie-options">
            <label><input type="checkbox" data-key="essential" checked disabled> ${
              currentLang() === 'de' ? 'Notwendig' : 'Essential'
            }</label>
            <label><input type="checkbox" data-key="analytics"> ${
              currentLang() === 'de' ? 'Statistik' : 'Analytics'
            }</label>
            <label><input type="checkbox" data-key="marketing"> ${
              currentLang() === 'de' ? 'Marketing' : 'Marketing'
            }</label>
          </div>
          <div class="cookie-actions">
            <button class="btn" id="cookieSave">${
              currentLang() === 'de' ? 'Speichern' : 'Save'
            }</button>
            <button class="btn primary" id="cookieAcceptAll">${
              currentLang() === 'de' ? 'Alle akzeptieren' : 'Accept all'
            }</button>
          </div>
        </div>
      `;

      function storeConsent(consent) {
        try {
          localStorage.setItem('cookieConsent', JSON.stringify(consent));
        } catch (_) {}
        banner.remove();
        overlay.remove();
      }

      banner
        .querySelector('#cookieAccept')
        .addEventListener('click', () => {
          storeConsent({ essential: true, analytics: true, marketing: true });
        });

      banner
        .querySelector('#cookieReject')
        .addEventListener('click', () => {
          storeConsent({ essential: true, analytics: false, marketing: false });
        });

      banner
        .querySelector('#cookieSettings')
        .addEventListener('click', () => {
          overlay.style.display = 'flex';
          banner.style.display = 'none';
        });

      overlay
        .querySelector('#cookieAcceptAll')
        .addEventListener('click', () => {
          storeConsent({ essential: true, analytics: true, marketing: true });
        });

      overlay
        .querySelector('#cookieSave')
        .addEventListener('click', () => {
          const consent = { essential: true };
          overlay
            .querySelectorAll('.cookie-options input')
            .forEach((input) => {
              if (!input.disabled) {
                consent[input.dataset.key] = input.checked;
              }
            });
          storeConsent(consent);
        });

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
          banner.style.display = '';
        }
      });

      document.body.appendChild(banner);
      document.body.appendChild(overlay);
    }

    function initGallery() {
      const slider = $('.image-gallery-slider');
      if (!slider || typeof Swiper === 'undefined') return;

      new Swiper(slider, {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    function initCardAnimations() {
      const cards = $$('.features .horizontal-card');
      const serviceItems = $$('.services-overview .service-item');
      
      if (!cards.length && !serviceItems.length) return;
      
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.2 }
      );
      
      cards.forEach((card, i) => {
        setTimeout(() => {
          io.observe(card);
        }, i * 100); // Stagger the animations
      });
      
      serviceItems.forEach((item, i) => {
        setTimeout(() => {
          io.observe(item);
        }, i * 200); // Stagger the animations
      });
    }

    function initRevealOnScroll() {
      const els = $$('.reveal');
      if (!els.length) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
    }

    function updateAddress() {
      const addr = 'Endertstraße 31, 56812 Cochem';
      $$('.address').forEach((el) => (el.textContent = addr));
    }

  // -----------------------------
  // Dynamic Title Underlines
  // -----------------------------
    function initDynamicUnderlines() {
    // Find all elements with title-uline class
    const underlines = document.querySelectorAll('.title-uline');
    
    underlines.forEach(underline => {
      // Get the previous element (should be the title/heading)
      const title = underline.previousElementSibling;
      if (title) {
        // Create a canvas to measure text width
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Get the computed font style of the title
        const style = window.getComputedStyle(title);
        context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        
        // Measure the text width
        const textWidth = context.measureText(title.textContent.trim()).width;
        
        // Set the underline width with a small buffer
        underline.style.width = `${Math.min(textWidth + 10, 300)}px`;
      }
    });
  }

  function init() {
    // language (also updates footer year)
    setLang(currentLang());

  // header interactions
  // Disabled language toggle JS to always show 'DE/EN' as static text in the footer
  // initLangToggle();
      initMenuToggle();
      initCookieConsent();
      initCardAnimations();
      initRevealOnScroll();
      updateAddress();
      initDynamicUnderlines(); // Add dynamic underlines

    // gallery
    initGallery();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
  
  // Re-calculate underlines when language changes or window resizes
  window.addEventListener('resize', initDynamicUnderlines);
  
  // Also recalculate when language changes (after translations are applied)
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initDynamicUnderlines, 100); // Small delay to ensure translations are applied
  });
})();
