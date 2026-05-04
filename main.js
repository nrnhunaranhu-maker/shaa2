// FRAG.MN v2 — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // --- PANEL TABS (Schedule / Results) ---
  const panelTabs = document.querySelectorAll('.panel-tab');
  panelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      panelTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Could swap content here
    });
  });

  // --- NAV ACTIVE ---
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // --- TOPBAR LINKS ---
  const topbarLinks = document.querySelectorAll('.topbar-link');
  topbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      topbarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // --- SEARCH ---
  const searchInput = document.querySelector('.header-search input');
  const searchBtn = document.querySelector('.header-search button');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const q = searchInput.value.trim();
      if (q) console.log('Search:', q);
    });
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchBtn.click();
    });
  }

  // --- STAGGERED FADE IN: MATCH GROUPS ---
  const matchGroups = document.querySelectorAll('.match-group');
  matchGroups.forEach((g, i) => {
    g.style.opacity = '0';
    g.style.transform = 'translateX(-10px)';
    setTimeout(() => {
      g.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      g.style.opacity = '1';
      g.style.transform = 'translateX(0)';
    }, 100 + i * 70);
  });

  // --- STAGGERED FADE IN: NEWS CARDS ---
  const newsCards = document.querySelectorAll('.news-card, .headline-item');
  newsCards.forEach((card, i) => {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease';
      card.style.opacity = '1';
    }, 200 + i * 40);
  });

  // --- HERO ARTICLE ENTRANCE ---
  const heroArt = document.querySelector('.hero-article');
  if (heroArt) {
    heroArt.style.opacity = '0';
    heroArt.style.transform = 'translateY(12px)';
    setTimeout(() => {
      heroArt.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      heroArt.style.opacity = '1';
      heroArt.style.transform = 'translateY(0)';
    }, 80);
  }

  // --- LIVE BADGE PULSE (already CSS animated, but add class for extra effect) ---
  const liveBadges = document.querySelectorAll('.live-badge');
  liveBadges.forEach(b => {
    setInterval(() => {
      b.style.background = b.style.background === 'rgb(181, 14, 33)' ? '#e8132a' : '#b50e21';
    }, 1000);
  });

  // --- BANNER LOGO ENTRANCE ---
  const bannerLogo = document.querySelector('.banner-logo-center');
  if (bannerLogo) {
    bannerLogo.style.opacity = '0';
    bannerLogo.style.transform = 'scale(0.9)';
    setTimeout(() => {
      bannerLogo.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      bannerLogo.style.opacity = '1';
      bannerLogo.style.transform = 'scale(1)';
    }, 50);
  }

});
