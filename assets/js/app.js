(function () {
  const h = React.createElement;
  const { properties, locations, offices, adTiers } = window.DAR_DATA;

  const copy = {
    en: {
      home: 'Home', properties: 'Properties', offices: 'Offices', saved: 'Saved', dashboard: 'Office dashboard',
      heroKicker: 'Kuwait’s curated property marketplace', heroTitle: 'A better way to find your place in Kuwait.',
      heroCopy: 'Discover verified homes, premium apartments and commercial spaces from trusted real estate offices—all in one refined experience.',
      rent: 'Rent', sale: 'Sale', location: 'Location', type: 'Property type', budget: 'Monthly budget', search: 'Search properties',
      anyLocation: 'Any location', anyType: 'Any type', featured: 'Featured collection', featuredCopy: 'Handpicked properties from verified offices across Kuwait.',
      viewAll: 'View all properties', latest: 'Fresh on the market', latestCopy: 'New opportunities, thoughtfully presented and easy to explore.',
      areas: 'Popular places', areasCopy: 'Start with the Kuwait neighborhoods people are exploring now.', categories: 'Browse by property type',
      apartments: 'Apartments', villas: 'Villas', commercial: 'Commercial', listings: 'listings',
      trustOne: 'Verified real estate offices', trustTwo: 'Clear property information', trustThree: 'Direct office contact',
      ctaTitle: 'Built for ambitious real estate offices.', ctaCopy: 'Publish polished listings, reach serious seekers and track every inquiry from a professional workspace.',
      exploreDashboard: 'Explore office dashboard', listProperty: 'List a property', verified: 'Verified office', perMonth: '/ month',
      footerCopy: 'A premium static product prototype for Kuwait’s next property marketplace.', market: 'Marketplace', company: 'Company', legal: 'Prototype',
      language: 'العربية', toastSaved: 'Property saved to your collection.', toastRemoved: 'Property removed from saved items.'
    },
    ar: {
      home: 'الرئيسية', properties: 'العقارات', offices: 'المكاتب', saved: 'المحفوظات', dashboard: 'لوحة المكتب',
      heroKicker: 'سوق العقارات المختار في الكويت', heroTitle: 'طريقة أفضل للعثور على مكانك في الكويت.',
      heroCopy: 'اكتشف المنازل الموثقة والشقق الراقية والمساحات التجارية من مكاتب عقارية موثوقة في تجربة واحدة متكاملة.',
      rent: 'للإيجار', sale: 'للبيع', location: 'المنطقة', type: 'نوع العقار', budget: 'الميزانية الشهرية', search: 'ابحث عن عقار',
      anyLocation: 'كل المناطق', anyType: 'كل الأنواع', featured: 'مجموعة مميزة', featuredCopy: 'عقارات مختارة من مكاتب موثقة في أنحاء الكويت.',
      viewAll: 'عرض كل العقارات', latest: 'وصل حديثاً', latestCopy: 'فرص جديدة معروضة بعناية وسهلة الاستكشاف.',
      areas: 'مناطق رائجة', areasCopy: 'ابدأ بأكثر مناطق الكويت بحثاً الآن.', categories: 'تصفح حسب نوع العقار',
      apartments: 'شقق', villas: 'فلل', commercial: 'تجاري', listings: 'عقار',
      trustOne: 'مكاتب عقارية موثقة', trustTwo: 'معلومات عقارية واضحة', trustThree: 'تواصل مباشر مع المكتب',
      ctaTitle: 'مصمم للمكاتب العقارية الطموحة.', ctaCopy: 'انشر إعلانات احترافية وتواصل مع الباحثين الجادين وتابع كل استفسار من لوحة عمل متكاملة.',
      exploreDashboard: 'استكشف لوحة المكتب', listProperty: 'أضف عقاراً', verified: 'مكتب موثق', perMonth: '/ شهرياً',
      footerCopy: 'نموذج منتج راقٍ لسوق العقارات القادم في الكويت.', market: 'السوق', company: 'الشركة', legal: 'النموذج',
      language: 'English', toastSaved: 'تم حفظ العقار في مجموعتك.', toastRemoved: 'تمت إزالة العقار من المحفوظات.'
    }
  };

  function text(obj, locale) { return typeof obj === 'string' ? obj : obj[locale] || obj.en; }
  function money(value, locale) { return locale === 'ar' ? `${new Intl.NumberFormat('ar-KW').format(value)} د.ك` : `KWD ${new Intl.NumberFormat('en-KW').format(value)}`; }
  function route() { return location.hash.replace(/^#/, '') || '/home'; }

  function Logo() {
    return h('a', { className: 'logo', href: '#/home', 'aria-label': 'DAR.KW home' },
      h('span', { className: 'logo-symbol' }, 'D'),
      h('span', null, 'DAR.KW', h('small', null, 'Real Estate'))
    );
  }

  function Icon({ name, size = 20 }) {
    const paths = {
      home: 'M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
      search: 'm21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
      plus: 'M12 5v14M5 12h14', heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
      user: 'M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      menu: 'M4 7h16M4 12h16M4 17h16', building: 'M4 21V5l8-3v19m0-13h8v13M8 8h1m-1 4h1m-1 4h1m7-4h1m-1 4h1',
      shield: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4', grid: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z',
      login: 'M10 17l5-5-5-5m5 5H3m11-9h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6',
      chat: 'M21 12a8 8 0 0 1-8 8H6l-4 3 1.4-5A9 9 0 1 1 21 12Zm-13-1h.01M12 11h.01M16 11h.01'
    };
    return h('svg',{width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:'1.8',strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':'true'},h('path',{d:paths[name]||paths.grid}));
  }

  function Header({ locale, setLocale, path }) {
    const t = copy[locale];
    const [open,setOpen]=React.useState(false);
    const close=()=>setOpen(false);
    return h(React.Fragment,null,h('header', { className: 'site-header' }, h('div', { className: 'container header-row' },
      h(Logo),
      h('nav', { className: 'main-nav', 'aria-label': 'Primary navigation' },
        h('a', { href: '#/home', className: `nav-link ${path === '/home' ? 'active' : ''}` }, t.home),
        h('a', { href: '#/search', className: `nav-link ${path.startsWith('/search') || path.startsWith('/property') ? 'active' : ''}` }, t.properties),
        h('a', { href: '#/office/o1', className: `nav-link ${path.startsWith('/office/') ? 'active' : ''}` }, t.offices),
        h('a', { href: '#/account/saved', className: `nav-link ${path.startsWith('/account') ? 'active' : ''}` }, t.saved)
      ),
      h('div', { className: 'header-actions' },
        h('button', { className: 'lang-btn', onClick: () => setLocale(locale === 'en' ? 'ar' : 'en'), 'aria-label': 'Switch language' }, t.language),
        h('a', { className: 'header-login', href: '#/login' }, L(locale,'Sign in','تسجيل الدخول')),
        h('a', { className: 'role-btn', href: '#/roles' }, L(locale,'Dashboards','لوحات التحكم'))
      )
    )),open&&h(React.Fragment,null,h('button',{className:'public-menu-scrim','aria-label':'Close menu',onClick:close}),h('aside',{className:'public-menu'},
      h('div',{className:'public-menu-head'},h(Logo),h('button',{className:'menu-close','aria-label':'Close menu',onClick:close},'×')),
      h('nav',null,
        [['/home','home',t.home],['/search','search',t.properties],['/office/o1','building',t.offices],['/account/saved','heart',t.saved]].map(x=>h('a',{href:`#${x[0]}`,onClick:close,key:x[0]},h(Icon,{name:x[1]}),h('span',null,x[2])))),
      h('p',{className:'menu-label'},L(locale,'Choose your workspace','اختر مساحة العمل')),
      h('div',{className:'menu-role-list'},
        h('a',{href:'#/user-dashboard',onClick:close},h(Icon,{name:'user'}),h('span',null,h('strong',null,L(locale,'Property seeker','باحث عن عقار')),h('small',null,L(locale,'Saved homes and inquiries','المحفوظات والاستفسارات')))),
        h('a',{href:'#/office-dashboard',onClick:close},h(Icon,{name:'building'}),h('span',null,h('strong',null,L(locale,'Real estate office','مكتب عقاري')),h('small',null,L(locale,'Listings, points and leads','الإعلانات والنقاط والعملاء')))),
        h('a',{href:'#/admin',onClick:close},h(Icon,{name:'shield'}),h('span',null,h('strong',null,L(locale,'Platform admin','مدير المنصة')),h('small',null,L(locale,'Approvals and marketplace control','الموافقات وإدارة السوق'))))
      ),
      h('div',{className:'menu-auth'},h('a',{className:'btn',href:'#/login',onClick:close},L(locale,'Sign in','تسجيل الدخول')),h('a',{className:'btn btn-primary',href:'#/register',onClick:close},L(locale,'Create account','إنشاء حساب')))
    )));
  }

  function HeroSearch({ locale }) {
    const t = copy[locale];
    const [purpose, setPurpose] = React.useState('Rent');
    const [locationId, setLocationId] = React.useState('');
    const [type, setType] = React.useState('');
    function submit(e) {
      e.preventDefault();
      location.hash = `/search?purpose=${purpose}&location=${locationId}&type=${type}`;
    }
    return h('section', { className: 'hero' },
      h('div', { className: 'container' }, h('div', { className: 'hero-content' },
        h('div', { className: 'hero-kicker' }, '✦ ', t.heroKicker),
        h('h1', null, t.heroTitle),
        h('p', { className: 'hero-copy' }, t.heroCopy)
      )),
      h('form', { className: 'search-card', onSubmit: submit },
        h('div', { className: 'purpose-tabs' }, ['Rent', 'Sale'].map(p => h('button', { type: 'button', key: p, className: `purpose-tab ${purpose === p ? 'active' : ''}`, onClick: () => setPurpose(p) }, p === 'Rent' ? t.rent : t.sale))),
        h('div', { className: 'search-fields' },
          h('div', { className: 'field' }, h('label', null, t.location), h('select', { value: locationId, onChange: e => setLocationId(e.target.value) }, h('option', { value: '' }, t.anyLocation), locations.map(l => h('option', { value: l.id, key: l.id }, text(l.name, locale))))),
          h('div', { className: 'field' }, h('label', null, t.type), h('select', { value: type, onChange: e => setType(e.target.value) }, h('option', { value: '' }, t.anyType), h('option', null, 'Apartment'), h('option', null, 'Villa'), h('option', null, 'Office'))),
          h('div', { className: 'field' }, h('label', null, t.budget), h('select', null, h('option', null, locale === 'ar' ? 'أي ميزانية' : 'Any budget'), h('option', null, 'KWD 500 – 1,000'), h('option', null, 'KWD 1,000 – 2,000'), h('option', null, 'KWD 2,000+'))),
          h('button', { className: 'search-submit', type: 'submit' }, '⌕ ', t.search)
        )
      )
    );
  }

  function PropertyCard({ property, locale, favorites, toggleFavorite }) {
    const t = copy[locale];
    const locationName = text(locations.find(l => l.id === property.locationId).name, locale);
    const office = offices.find(o => o.id === property.officeId);
    const saved = favorites.includes(property.id);
    return h('article', { className: 'property-card' },
      h('div', { className: 'property-media' },
        h('a', { href: `#/property/${property.id}` }, h('img', { src: property.image, alt: text(property.title, locale), loading: 'lazy' })),
        h('span', { className: `property-tag ${property.featured ? 'gold' : ''}` }, property.featured ? (locale === 'ar' ? 'مميز' : 'Featured') : text(property.type, locale)),
        h('button', { className: `favorite-btn ${saved ? 'saved' : ''}`, onClick: () => toggleFavorite(property.id), 'aria-label': saved ? 'Remove from saved' : 'Save property' }, saved ? '♥' : '♡')
      ),
      h('div', { className: 'property-body' },
        h('div', { className: 'property-meta' }, h('span', null, text(property.type, locale)), h('span', null, property.purpose === 'Rent' ? t.rent : t.sale)),
        h('h3', null, h('a', { href: `#/property/${property.id}` }, text(property.title, locale))),
        h('div', { className: 'property-location' }, '⌖ ', locationName),
        h('div', { className: 'property-facts' },
          property.bedrooms ? h('span', null, `▣ ${property.bedrooms} ${locale === 'ar' ? 'غرف' : 'beds'}`) : null,
          h('span', null, `◫ ${property.bathrooms} ${locale === 'ar' ? 'حمام' : 'baths'}`),
          h('span', null, `↔ ${property.area} m²`)
        ),
        h('div', { className: 'property-footer' },
          h('div', { className: 'price' }, money(property.price, locale), property.purpose === 'Rent' && h('small', null, ` ${t.perMonth}`)),
          office.verified && h('span', { className: 'verified' }, '✓ ', t.verified)
        )
      )
    );
  }

  function Home({ locale, favorites, toggleFavorite, allProperties = properties }) {
    const t = copy[locale];
    return h(React.Fragment, null,
      h(HeroSearch, { locale }),
      h('section', { className: 'trust-strip' }, h('div', { className: 'container trust-row' },
        [t.trustOne, t.trustTwo, t.trustThree].map((item, i) => h('div', { className: 'trust-item', key: item }, h('span', { className: 'trust-dot' }, ['✓', '◎', '↗'][i]), item))
      )),
      h('section', { className: 'section' }, h('div', { className: 'container' },
        h('div', { className: 'section-head' }, h('div', null, h('p', { className: 'eyebrow' }, locale === 'ar' ? 'مختارة لك' : 'Curated for you'), h('h2', null, t.featured), h('p', null, t.featuredCopy)), h('a', { className: 'text-link', href: '#/search' }, t.viewAll, ' →')),
        h('div', { className: 'property-grid' }, allProperties.filter(p => p.featured).slice(-6).reverse().map(p => h(PropertyCard, { key: p.id, property: p, locale, favorites, toggleFavorite })))
      )),
      h('section', { className: 'section section-soft' }, h('div', { className: 'container' },
        h('div', { className: 'section-head' }, h('div', null, h('p', { className: 'eyebrow' }, locale === 'ar' ? 'اكتشف الكويت' : 'Explore Kuwait'), h('h2', null, t.areas), h('p', null, t.areasCopy))),
        h('div', { className: 'location-grid' }, locations.slice(0, 4).map(l => h('a', { href: `#/search?location=${l.id}`, className: 'location-card', key: l.id }, h('img', { src: l.image, alt: text(l.name, locale), loading: 'lazy' }), h('div', { className: 'location-overlay' }, h('h3', null, text(l.name, locale)), h('span', null, `${l.count} ${t.listings}`)))))
      )),
      h('section', { className: 'section' }, h('div', { className: 'container' },
        h('div', { className: 'section-head' }, h('div', null, h('p', { className: 'eyebrow' }, locale === 'ar' ? 'كل ما تحتاجه' : 'Find your fit'), h('h2', null, t.categories))),
        h('div', { className: 'category-grid' }, [
          ['⌂', t.apartments, 'Apartment', '112'], ['⌂', t.villas, 'Villa', '86'], ['▦', t.commercial, 'Office', '64']
        ].map(c => h('a', { className: 'category-card', href: `#/search?type=${c[2]}`, key: c[2] }, h('span', { className: 'category-icon' }, c[0]), h('div', null, h('h3', null, c[1]), h('p', null, `${c[3]} ${t.listings}`)))))
      )),
      h('section', { className: 'section' }, h('div', { className: 'container' }, h('div', { className: 'cta-panel' },
        h('div', null, h('p', { className: 'eyebrow' }, locale === 'ar' ? 'للشركات العقارية' : 'For real estate offices'), h('h2', null, t.ctaTitle), h('p', null, t.ctaCopy)),
        h('div', { className: 'cta-actions' }, h('a', { className: 'btn btn-primary', href: '#/office-dashboard' }, t.exploreDashboard), h('a', { className: 'btn btn-ghost', href: '#/office-dashboard/properties/new' }, t.listProperty))
      )))
    );
  }

  function Footer({ locale }) {
    const t = copy[locale];
    return h('footer', { className: 'site-footer' }, h('div', { className: 'container footer-grid' },
      h('div', null, h(Logo), h('p', { style: { maxWidth: '350px', lineHeight: 1.7 } }, t.footerCopy)),
      h('div', null, h('h4', null, t.market), h('a', { href: '#/search' }, t.properties), h('a', { href: '#/account/saved' }, t.saved), h('a', { href: '#/office/o1' }, t.offices)),
      h('div', null, h('h4', null, t.company), h('a', { href: '#/roles' }, L(locale,'All dashboards','كل لوحات التحكم')), h('a', { href: '#/office-dashboard' }, t.dashboard), h('a', { href: '#/admin' }, L(locale,'Admin dashboard','لوحة الإدارة'))),
      h('div', null, h('h4', null, L(locale,'Account','الحساب')), h('a', { href: '#/login' }, L(locale,'Sign in','تسجيل الدخول')), h('a', { href: '#/register' }, L(locale,'Create account','إنشاء حساب')), h('a', { href: '#/user-dashboard' }, L(locale,'Seeker dashboard','لوحة الباحث')))
    ));
  }

  function MobileNav({ locale, path }) {
    const t = copy[locale];
    const item=(href,name,label,match)=>h('a',{href:`#${href}`,className:match?'active':'',key:href},h(Icon,{name,size:19}),h('span',null,label));
    return h('nav', { className: 'mobile-nav', 'aria-label': 'Mobile navigation' },
      item('/home','home',t.home,path==='/home'||path==='/'),
      item('/search','search',t.properties,path.startsWith('/search')||path.startsWith('/property')),
      item('/office/o1','building',t.offices,path.startsWith('/office/')),
      item('/account/saved','heart',t.saved,path==='/account/saved'),
      item('/roles','grid',locale==='ar'?'الحساب':'Account',path==='/roles'||path==='/user-dashboard'||path.startsWith('/account/'))
    );
  }

  const L = (locale, en, ar) => locale === 'ar' ? ar : en;
  const initialDemo = {
    pointBalance: 50,
    transactions: [
      { id: 't1', type: 'credit', points: 50, description: { en: 'Welcome points', ar: 'نقاط ترحيبية' }, date: '2026-08-28' },
      { id: 't2', type: 'debit', points: -10, description: { en: 'Standard listing · Sea View Residence', ar: 'إعلان عادي · سكن بإطلالة بحرية' }, date: '2026-08-27' }
    ],
    createdListings: [{
      id: 'demo-pending', title: { en: 'Newly Renovated Coastal Suite', ar: 'شقة ساحلية مجددة حديثاً' }, type: { en: 'Apartment', ar: 'شقة' }, purpose: 'Rent', locationId: 'salmiya', price: 1100,
      bedrooms: 2, bathrooms: 2, area: 168, image: 'assets/images/properties/property-apartment-salmiya-01.png', images: ['assets/images/properties/property-apartment-salmiya-01.png'],
      officeId: 'o1', featured: true, verified: true, status: 'pending', views: 0, publishedAt: '2026-08-28', amenities: ['Sea view', 'Parking', 'Security'],
      description: { en: 'A newly renovated coastal apartment submitted for marketplace approval.', ar: 'شقة ساحلية مجددة حديثاً مقدمة للموافقة والنشر في السوق.' }, adTier: 'featured'
    }],
    inquiries: [{ id: 'iq1', propertyId: 'p1', status: 'contacted', date: '2026-08-27' }],
    userStatuses: {}, officeStatuses: { o4: 'pending' }
  };

  function cloneInitialDemo() { return JSON.parse(JSON.stringify(initialDemo)); }
  function parseHash() {
    const value = route();
    const index = value.indexOf('?');
    return { path: index >= 0 ? value.slice(0, index) : value, query: new URLSearchParams(index >= 0 ? value.slice(index + 1) : '') };
  }

  function PageHero({ title, subtitle, locale, action }) {
    return h('section', { className: 'page-hero' }, h('div', { className: 'container page-hero-row' },
      h('div', null, h('p', { className: 'eyebrow' }, L(locale, 'DAR.KW marketplace', 'سوق دار الكويت')), h('h1', null, title), subtitle && h('p', null, subtitle)),
      action
    ));
  }

  function EmptyState({ locale, title, copyText, actionHref, actionLabel }) {
    return h('div', { className: 'empty-state' },
      h('span', { className: 'empty-state-icon' }, '⌂'), h('h3', null, title), h('p', null, copyText),
      actionHref && h('a', { className: 'btn btn-primary', href: actionHref }, actionLabel)
    );
  }

  function SearchPage({ locale, favorites, toggleFavorite, allProperties }) {
    const parsed = parseHash();
    const [filters, setFilters] = React.useState({
      purpose: parsed.query.get('purpose') || '', location: parsed.query.get('location') || '', type: parsed.query.get('type') || '', maxPrice: '', beds: '', baths: ''
    });
    const [view, setView] = React.useState('grid');
    const [sort, setSort] = React.useState('featured');
    const update = (key, value) => setFilters(prev => Object.assign({}, prev, { [key]: value }));
    let results = allProperties.filter(p => (!filters.purpose || p.purpose === filters.purpose) && (!filters.location || p.locationId === filters.location) && (!filters.type || p.type.en === filters.type) && (!filters.maxPrice || p.price <= Number(filters.maxPrice)) && (!filters.beds || p.bedrooms >= Number(filters.beds)) && (!filters.baths || p.bathrooms >= Number(filters.baths)));
    results = results.slice().sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : Number(b.featured) - Number(a.featured));
    const chips = Object.entries(filters).filter(x => x[1]);
    return h(React.Fragment, null,
      h(PageHero, { locale, title: L(locale, 'Find a property that fits.', 'اعثر على العقار المناسب لك.'), subtitle: L(locale, 'Explore verified listings from trusted offices across Kuwait.', 'استكشف عقارات موثقة من مكاتب موثوقة في أنحاء الكويت.') }),
      h('section', { className: 'page-shell' }, h('div', { className: 'container search-layout' },
        h('aside', { className: 'filter-panel' },
          h('h3', null, L(locale, 'Refine search', 'تصفية البحث')),
          h('div', { className: 'field' }, h('label', null, L(locale, 'Purpose', 'الغرض')), h('select', { value: filters.purpose, onChange: e => update('purpose', e.target.value) }, h('option', { value: '' }, L(locale, 'Rent or sale', 'إيجار أو بيع')), h('option', { value: 'Rent' }, L(locale, 'For rent', 'للإيجار')), h('option', { value: 'Sale' }, L(locale, 'For sale', 'للبيع')))),
          h('div', { className: 'field' }, h('label', null, copy[locale].location), h('select', { value: filters.location, onChange: e => update('location', e.target.value) }, h('option', { value: '' }, copy[locale].anyLocation), locations.map(l => h('option', { value: l.id, key: l.id }, text(l.name, locale))))),
          h('div', { className: 'field' }, h('label', null, copy[locale].type), h('select', { value: filters.type, onChange: e => update('type', e.target.value) }, h('option', { value: '' }, copy[locale].anyType), ['Apartment', 'Villa', 'Office'].map(v => h('option', { key: v }, v)))),
          h('div', { className: 'field' }, h('label', null, L(locale, 'Maximum price', 'السعر الأقصى')), h('select', { value: filters.maxPrice, onChange: e => update('maxPrice', e.target.value) }, h('option', { value: '' }, L(locale, 'Any price', 'أي سعر')), [1000, 2000, 3000, 5000].map(v => h('option', { key: v, value: v }, money(v, locale))))),
          h('div', { className: 'field' }, h('label', null, L(locale, 'Bedrooms', 'غرف النوم')), h('select', { value: filters.beds, onChange: e => update('beds', e.target.value) }, h('option', { value: '' }, L(locale, 'Any', 'الكل')), [1,2,3,4,5].map(v => h('option', { key: v, value: v }, `${v}+`)))),
          h('div', { className: 'field' }, h('label', null, L(locale, 'Bathrooms', 'الحمامات')), h('select', { value: filters.baths, onChange: e => update('baths', e.target.value) }, h('option', { value: '' }, L(locale, 'Any', 'الكل')), [1,2,3,4].map(v => h('option', { key: v, value: v }, `${v}+`)))),
          h('button', { className: 'btn', onClick: () => setFilters({ purpose: '', location: '', type: '', maxPrice: '', beds: '', baths: '' }) }, L(locale, 'Clear all', 'مسح الكل'))
        ),
        h('div', null,
          h('div', { className: 'results-toolbar' }, h('div', null, h('h2', null, `${results.length} ${L(locale, 'properties', 'عقار')}`), h('span', { className: 'muted' }, L(locale, 'Across Kuwait', 'في أنحاء الكويت'))),
            h('div', { className: 'toolbar-actions' }, h('select', { className: 'compact-select', value: sort, onChange: e => setSort(e.target.value), 'aria-label': 'Sort properties' }, h('option', { value: 'featured' }, L(locale, 'Featured first', 'المميزة أولاً')), h('option', { value: 'low' }, L(locale, 'Price: low to high', 'السعر: الأقل أولاً')), h('option', { value: 'high' }, L(locale, 'Price: high to low', 'السعر: الأعلى أولاً'))), h('div', { className: 'segmented' }, h('button', { className: view === 'grid' ? 'active' : '', onClick: () => setView('grid'), 'aria-label': 'Grid view' }, '▦'), h('button', { className: view === 'list' ? 'active' : '', onClick: () => setView('list'), 'aria-label': 'List view' }, '☷')))
          ),
          chips.length > 0 && h('div', { className: 'active-filters' }, chips.map(([key, value]) => h('button', { className: 'filter-chip', key, onClick: () => update(key, '') }, `${key}: ${value} ×`))),
          results.length ? h('div', { className: view === 'grid' ? 'property-grid' : 'property-list-view' }, results.map(p => h(PropertyCard, { key: p.id, property: p, locale, favorites, toggleFavorite }))) : h(EmptyState, { locale, title: L(locale, 'No matching properties', 'لا توجد عقارات مطابقة'), copyText: L(locale, 'Try removing a filter or exploring another area.', 'جرّب إزالة أحد عوامل التصفية أو استكشف منطقة أخرى.'), actionHref: '#/search', actionLabel: L(locale, 'Reset search', 'إعادة البحث') })
        )
      ))
    );
  }

  function PropertyDetail({ property, locale, favorites, toggleFavorite, addInquiry }) {
    const [imageIndex, setImageIndex] = React.useState(0);
    const office = offices.find(o => o.id === property.officeId) || offices[0];
    const loc = locations.find(l => l.id === property.locationId);
    const similar = properties.filter(p => p.type.en === property.type.en && p.id !== property.id).slice(0, 3);
    return h(React.Fragment, null,
      h(PageHero, { locale, title: text(property.title, locale), subtitle: `${text(loc.name, locale)} · ${text(property.type, locale)}` }),
      h('section', { className: 'page-shell' }, h('div', { className: 'container' },
        h('div', { className: 'detail-layout' },
          h('div', null,
            h('div', { className: 'gallery-main' }, h('img', { src: property.images[imageIndex] || property.image, alt: text(property.title, locale) }), h('span', { className: 'gallery-counter' }, `${imageIndex + 1} / ${property.images.length}`)),
            h('div', { className: 'gallery-thumbs' }, property.images.map((src, i) => h('button', { className: `gallery-thumb ${i === imageIndex ? 'active' : ''}`, key: `${src}-${i}`, onClick: () => setImageIndex(i) }, h('img', { src, alt: '' })))),
            h('div', { className: 'content-card' }, h('h2', null, L(locale, 'About this property', 'عن هذا العقار')), h('p', null, text(property.description, locale))),
            h('div', { className: 'content-card' }, h('h2', null, L(locale, 'Amenities', 'المزايا')), h('div', { className: 'amenity-grid' }, property.amenities.map(a => h('div', { className: 'amenity', key: a }, '✓ ', a))))
          ),
          h('aside', { className: 'detail-sidebar detail-card' },
            h('span', { className: 'status-badge status-active' }, property.purpose === 'Rent' ? L(locale, 'For rent', 'للإيجار') : L(locale, 'For sale', 'للبيع')),
            h('div', { className: 'detail-price' }, money(property.price, locale)), h('div', { className: 'detail-location' }, '⌖ ', text(loc.name, locale)),
            h('div', { className: 'fact-grid' }, property.bedrooms ? h('div', { className: 'fact-box' }, h('strong', null, property.bedrooms), h('small', null, L(locale, 'Bedrooms', 'غرف'))) : null, h('div', { className: 'fact-box' }, h('strong', null, property.bathrooms), h('small', null, L(locale, 'Bathrooms', 'حمامات'))), h('div', { className: 'fact-box' }, h('strong', null, `${property.area} m²`), h('small', null, L(locale, 'Area', 'المساحة')))),
            h('div', { className: 'contact-stack' }, h('button', { className: 'btn btn-primary', onClick: () => addInquiry(property.id) }, L(locale, 'Send an inquiry', 'أرسل استفساراً')), h('button', { className: 'btn btn-dark', onClick: () => addInquiry(property.id) }, `☎ ${L(locale, 'Call office', 'اتصل بالمكتب')}`), h('button', { className: 'btn', onClick: () => toggleFavorite(property.id) }, favorites.includes(property.id) ? `♥ ${L(locale, 'Saved', 'محفوظ')}` : `♡ ${L(locale, 'Save property', 'احفظ العقار')}`)),
            h('a', { className: 'office-mini', href: `#/office/${office.id}` }, h('span', { className: 'office-logo', style: { background: office.color } }, office.initials), h('div', null, h('h4', null, text(office.name, locale)), h('small', null, office.verified ? `✓ ${copy[locale].verified}` : L(locale, 'Office profile', 'صفحة المكتب'))))
          )
        ),
        h('div', { className: 'section-head', style: { marginTop: '64px' } }, h('div', null, h('p', { className: 'eyebrow' }, L(locale, 'Keep exploring', 'تابع الاستكشاف')), h('h2', null, L(locale, 'Similar properties', 'عقارات مشابهة')))),
        h('div', { className: 'property-grid' }, similar.map(p => h(PropertyCard, { key: p.id, property: p, locale, favorites, toggleFavorite })))
      ))
    );
  }

  function OfficeProfile({ office, locale, favorites, toggleFavorite, allProperties }) {
    const listings = allProperties.filter(p => p.officeId === office.id);
    return h(React.Fragment, null,
      h('section', { className: 'office-profile-hero' }, h('div', { className: 'container office-profile-row' }, h('div', { className: 'office-profile-logo' }, office.initials), h('div', null, h('span', { className: 'verified' }, office.verified ? `✓ ${copy[locale].verified}` : L(locale, 'Office profile', 'صفحة المكتب')), h('h1', null, text(office.name, locale)), h('p', null, text(office.address, locale))), h('div', { className: 'office-profile-actions' }, h('a', { className: 'btn btn-primary', href: `tel:${office.phone}` }, L(locale, 'Call office', 'اتصل بالمكتب')), h('a', { className: 'btn btn-ghost', href: `mailto:${office.email}` }, L(locale, 'Email', 'البريد'))))),
      h('section', { className: 'page-shell' }, h('div', { className: 'container' },
        h('div', { className: 'content-card', style: { marginTop: 0 } }, h('div', { className: 'section-head', style: { marginBottom: '12px' } }, h('div', null, h('h2', null, L(locale, 'Meet the office', 'تعرف على المكتب')), h('p', null, L(locale, 'A team of licensed property advisors focused on premium homes and commercial opportunities across Kuwait.', 'فريق من المستشارين العقاريين المتخصصين في المنازل الراقية والفرص التجارية في الكويت.')))), h('div', { className: 'agent-row' }, [1,2,3].map(i => h('div', { className: 'agent-card', key: i }, h('img', { src: office.agent, alt: '' }), h('div', null, h('h4', null, [L(locale, 'Yousef Al Khaled', 'يوسف الخالد'), L(locale, 'Mariam Al Sabah', 'مريم الصباح'), L(locale, 'Hamad Al Mutairi', 'حمد المطيري')][i-1]), h('small', null, L(locale, 'Property advisor', 'مستشار عقاري'))))))),
        h('div', { className: 'section-head', style: { marginTop: '54px' } }, h('div', null, h('p', { className: 'eyebrow' }, L(locale, 'Current portfolio', 'المحفظة الحالية')), h('h2', null, `${listings.length} ${L(locale, 'active listings', 'إعلان نشط')}`))),
        listings.length ? h('div', { className: 'property-grid' }, listings.map(p => h(PropertyCard, { key: p.id, property: p, locale, favorites, toggleFavorite }))) : h(EmptyState, { locale, title: L(locale, 'No active listings', 'لا توجد إعلانات نشطة'), copyText: L(locale, 'This office has no live properties right now.', 'لا يملك هذا المكتب عقارات منشورة حالياً.') })
      ))
    );
  }

  function SeekerMessages({ locale }) {
    const conversations=[
      {id:'c1',office:L(locale,'Afaq Properties','آفاق العقارية'),property:L(locale,'Sea View Residence','سكن بإطلالة بحرية'),message:L(locale,'Yes, it is available. We can arrange a viewing Thursday afternoon.','نعم، العقار متاح ويمكن ترتيب معاينة مساء الخميس.'),time:'10:42',unread:2,image:'assets/images/properties/property-apartment-salmiya-01.png'},
      {id:'c2',office:L(locale,'Maison Kuwait','ميزون الكويت'),property:L(locale,'Private Pool Retreat','فيلا بمسبح خاص'),message:L(locale,'The owner has confirmed your requested viewing time.','أكد المالك موعد المعاينة المطلوب.'),time:L(locale,'Yesterday','أمس'),unread:0,image:'assets/images/properties/property-villa-courtyard-02.png'},
      {id:'c3',office:L(locale,'Nook Real Estate','نوك العقارية'),property:L(locale,'Skyline Business Suite','جناح أعمال بإطلالة'),message:L(locale,'I have attached the floor-plan details for your review.','أرسلت تفاصيل مخطط الطابق لمراجعتك.'),time:'Mon',unread:0,image:'assets/images/properties/property-office-reception-02.png'}
    ];
    const [active,setActive]=React.useState(conversations[0]);
    return h('div',{className:'seeker-chat'},
      h('div',{className:'seeker-chat-list'},h('div',{className:'chat-list-head'},h('div',null,h('h2',null,L(locale,'Property conversations','محادثات العقارات')),h('p',null,L(locale,'Direct messages with verified offices','رسائل مباشرة مع المكاتب الموثقة'))),h('span',{className:'unread-pill'},'2 ',L(locale,'new','جديد'))),conversations.map(c=>h('button',{className:`seeker-thread ${active.id===c.id?'active':''}`,onClick:()=>setActive(c),key:c.id},h('img',{src:c.image,alt:''}),h('span',{className:'thread-copy'},h('strong',null,c.office),h('small',null,c.property),h('em',null,c.message)),h('span',{className:'thread-side'},h('small',null,c.time),c.unread?h('b',null,c.unread):null)))),
      h('div',{className:'seeker-conversation'},h('header',null,h('div',null,h('strong',null,active.office),h('small',null,active.property)),h('a',{href:'#/property/p1'},L(locale,'View property','عرض العقار'))),h('div',{className:'chat-messages'},h('div',{className:'chat-day'},L(locale,'Today','اليوم')),h('div',{className:'chat-bubble mine'},L(locale,'Hello, is this property available for a viewing this week?','مرحباً، هل العقار متاح للمعاينة هذا الأسبوع؟')),h('div',{className:'chat-bubble'},active.message)),h('form',{className:'chat-compose',onSubmit:e=>e.preventDefault()},h('button',{type:'button','aria-label':'Attach file'},'＋'),h('input',{placeholder:L(locale,'Write a message…','اكتب رسالة…')}),h('button',{className:'send-chat',type:'submit','aria-label':'Send message'},'➤')))
    );
  }

  function AdminConversations({ locale }) {
    const rows=[
      ['#CV-1048',L(locale,'Noura Al Salem','نورة السالم'),L(locale,'Afaq Properties','آفاق العقارية'),L(locale,'Sea View Residence','سكن بإطلالة بحرية'),'2',L(locale,'Active','نشطة'),'10:42'],
      ['#CV-1047',L(locale,'Omar Al Rashid','عمر الراشد'),L(locale,'Maison Kuwait','ميزون الكويت'),L(locale,'Private Pool Retreat','فيلا بمسبح خاص'),'6',L(locale,'Active','نشطة'),L(locale,'Yesterday','أمس')],
      ['#CV-1042',L(locale,'Laila Hassan','ليلى حسن'),L(locale,'Nook Real Estate','نوك العقارية'),L(locale,'Skyline Business Suite','جناح أعمال بإطلالة'),'4',L(locale,'Resolved','مغلقة'),'Mon']
    ];
    return h(React.Fragment,null,h(WorkspaceHeading,{locale,title:L(locale,'Conversation oversight','مراقبة المحادثات'),subtitle:L(locale,'Monitor marketplace communication, response quality and reported conversations.','راقب تواصل السوق وجودة الردود والمحادثات المبلغ عنها.')}),
      h('div',{className:'metric-grid'},h(MetricCard,{label:L(locale,'Open conversations','المحادثات المفتوحة'),value:'428',delta:'+38 this week'}),h(MetricCard,{label:L(locale,'Unread messages','رسائل غير مقروءة'),value:'76',delta:L(locale,'Across all offices','عبر جميع المكاتب')}),h(MetricCard,{label:L(locale,'Median response','متوسط الاستجابة'),value:'18 min',delta:'−6 min'}),h(MetricCard,{label:L(locale,'Reported chats','المحادثات المبلغ عنها'),value:'3',delta:L(locale,'Needs review','تحتاج مراجعة')})),
      h('section',{className:'panel admin-chat-panel'},h('div',{className:'panel-head'},h('div',null,h('h3',null,L(locale,'Recent conversations','أحدث المحادثات')),h('p',null,L(locale,'Metadata-only oversight for this static prototype.','مراقبة بيانات المحادثات في هذا النموذج.'))),h('div',{className:'toolbar-actions'},h('input',{className:'compact-select',placeholder:L(locale,'Search conversations','بحث في المحادثات')}),h('select',{className:'compact-select'},h('option',null,L(locale,'All statuses','كل الحالات')),h('option',null,L(locale,'Reported','مبلغ عنها'))))),h('div',{className:'admin-chat-list'},rows.map((r,i)=>h('article',{className:'admin-chat-row',key:r[0]},h('div',{className:'conversation-id'},h('strong',null,r[0]),h('small',null,r[6])),h('div',null,h('small',null,L(locale,'Seeker','الباحث')),h('strong',null,r[1])),h('div',null,h('small',null,L(locale,'Office','المكتب')),h('strong',null,r[2])),h('div',null,h('small',null,L(locale,'Property','العقار')),h('strong',null,r[3])),h('div',null,h('small',null,L(locale,'Messages','الرسائل')),h('strong',null,r[4])),h('span',{className:`status-badge ${i===2?'status-contacted':'status-active'}`},r[5]),h('button',{className:'row-btn'},L(locale,'Review','مراجعة')))))));
  }

  function AccountPage({ path, locale, favorites, toggleFavorite, inquiries, allProperties, setLocale }) {
    const tabs = [['/account/saved', L(locale, 'Saved properties', 'العقارات المحفوظة')], ['/account/inquiries', L(locale, 'Inquiry history', 'سجل الاستفسارات')], ['/account/messages', L(locale, 'Messages', 'الرسائل')], ['/account/settings', L(locale, 'Settings', 'الإعدادات')]];
    const savedProperties = allProperties.filter(p => favorites.includes(p.id));
    const pageTitle=path==='/account/messages'?L(locale,'Your property conversations.','محادثاتك العقارية.'):path==='/account/inquiries'?L(locale,'Track every inquiry.','تابع كل استفسار.'):path==='/account/settings'?L(locale,'Your marketplace preferences.','تفضيلاتك في السوق.'):L(locale,'Your property shortlist.','قائمتك المختصرة من العقارات.');
    const pageSubtitle=path==='/account/messages'?L(locale,'Chat directly with verified offices and keep every property discussion organized.','تحدث مباشرة مع المكاتب الموثقة ونظم جميع نقاشات العقارات.'):L(locale,'Keep favorites and inquiry history in one lightweight place.','احتفظ بالمفضلة وسجل الاستفسارات في مكان بسيط واحد.');
    return h(React.Fragment, null,
      h(PageHero, { locale, title: pageTitle, subtitle: pageSubtitle }),
      h('section', { className: 'page-shell' }, h('div', { className: 'container' },
        h('div', { className: 'account-tabs' }, tabs.map(x => h('a', { href: `#${x[0]}`, className: `account-tab ${path === x[0] ? 'active' : ''}`, key: x[0] }, x[1]))),
        path === '/account/saved' && (savedProperties.length ? h('div', { className: 'property-grid' }, savedProperties.map(p => h(PropertyCard, { key: p.id, property: p, locale, favorites, toggleFavorite }))) : h(EmptyState, { locale, title: L(locale, 'Your shortlist is empty', 'قائمتك فارغة'), copyText: L(locale, 'Save properties while browsing and they will appear here.', 'احفظ العقارات أثناء التصفح وستظهر هنا.'), actionHref: '#/search', actionLabel: L(locale, 'Explore properties', 'استكشف العقارات') })),
        path === '/account/inquiries' && h('div', { className: 'inquiry-list' }, inquiries.length ? inquiries.map(iq => { const p = allProperties.find(p => p.id === iq.propertyId) || properties[0]; return h('a', { className: 'inquiry-item', href: `#/property/${p.id}`, key: iq.id }, h('img', { src: p.image, alt: '' }), h('div', null, h('h4', null, text(p.title, locale)), h('p', null, `${L(locale, 'Sent', 'أرسل')} · ${iq.date}`)), h('span', { className: `status-badge status-${iq.status}` }, iq.status)); }) : h(EmptyState, { locale, title: L(locale, 'No inquiries yet', 'لا توجد استفسارات'), copyText: L(locale, 'Contact an office from any property page.', 'تواصل مع مكتب من أي صفحة عقار.') })),
        path === '/account/messages' && h(SeekerMessages,{locale}),
        path === '/account/settings' && h('div', { className: 'settings-card' }, h('h2', null, L(locale, 'Profile settings', 'إعدادات الملف')), h('div', { className: 'form-grid' }, h('div', { className: 'form-group' }, h('label', null, L(locale, 'Display name', 'الاسم')), h('input', { className: 'form-control', defaultValue: 'Noura Al Salem' })), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Preferred language', 'اللغة المفضلة')), h('select', { className: 'form-control', value: locale, onChange: e => setLocale(e.target.value) }, h('option', { value: 'en' }, 'English'), h('option', { value: 'ar' }, 'العربية')))), h('div', { style: { marginTop: '18px' } }, h('label', { className: 'check-chip' }, h('input', { type: 'checkbox', defaultChecked: true }), h('span', null, L(locale, 'Property update notifications', 'تنبيهات تحديث العقارات')))))
      ))
    );
  }

  function StatusBadge({ status }) { return h('span', { className: `status-badge status-${status}` }, status); }
  function MetricCard({ label, value, delta }) { return h('div', { className: 'metric-card' }, h('div', { className: 'metric-label' }, label), h('div', { className: 'metric-value' }, value), h('div', { className: 'metric-delta' }, delta)); }

  function WorkspaceShell({ kind, locale, setLocale, path, pointBalance, resetDemo, children }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const officeLinks = [
      ['/office-dashboard', '◉', L(locale, 'Dashboard', 'لوحة التحكم')], ['/office-dashboard/properties', '⌂', L(locale, 'Properties', 'العقارات')], ['/office-dashboard/properties/new', '＋', L(locale, 'Add property', 'إضافة عقار')], ['/office-dashboard/points', '◆', L(locale, 'Points', 'النقاط')], ['/office-dashboard/messages', '✉', L(locale, 'Messages', 'الرسائل')], ['/office-dashboard/profile', '◎', L(locale, 'Profile', 'الملف')]
    ];
    const adminLinks = [
      ['/admin', '◉', L(locale, 'Dashboard', 'لوحة التحكم')], ['/admin/users', '♙', L(locale, 'Users', 'المستخدمون')], ['/admin/offices', '▦', L(locale, 'Offices', 'المكاتب')], ['/admin/properties', '⌂', L(locale, 'Properties', 'العقارات')], ['/admin/conversations', '✉', L(locale, 'Conversations', 'المحادثات')], ['/admin/categories', '◇', L(locale, 'Categories', 'الأنواع')], ['/admin/locations', '⌖', L(locale, 'Locations', 'المناطق')], ['/admin/reports', '↗', L(locale, 'Reports', 'التقارير')]
    ];
    const links = kind === 'office' ? officeLinks : adminLinks;
    const active = (href) => href === (kind === 'office' ? '/office-dashboard' : '/admin') ? path === href : path.startsWith(href);
    return h('div', { className: 'workspace' }, h('div', { className: 'workspace-layout' },
      h('aside', { className: `sidebar ${drawerOpen ? 'drawer-open' : ''}` }, h('div',{className:'sidebar-mobile-head'},h(Logo),h('button',{className:'sidebar-close',onClick:()=>setDrawerOpen(false),'aria-label':'Close menu'},'×')), h('div', { className: 'sidebar-label' }, kind === 'office' ? L(locale, 'Office workspace', 'مساحة المكتب') : L(locale, 'Platform control', 'إدارة المنصة')), h('nav', { className: 'side-nav' }, links.map(x => h('a', { href: `#${x[0]}`, onClick:()=>setDrawerOpen(false), className: `side-link ${active(x[0]) ? 'active' : ''}`, key: x[0] }, h('span', null, x[1]), x[2]))), h('div', { className: 'sidebar-footer' }, h('small', null, kind === 'office' ? L(locale, 'Available points', 'النقاط المتاحة') : L(locale, 'Environment', 'البيئة')), h('strong', null, kind === 'office' ? `${pointBalance.toLocaleString()} pts` : L(locale, 'Demo mode', 'وضع العرض')), h('button', { className: 'demo-reset', onClick: resetDemo }, L(locale, 'Reset demo data', 'إعادة بيانات العرض')))),
      drawerOpen && h('button',{className:'sidebar-scrim','aria-label':'Close navigation',onClick:()=>setDrawerOpen(false)}),
      h('div', { className: 'workspace-main' },
        h('header', { className: 'workspace-header' }, h('button', { className: 'mobile-sidebar-toggle', 'aria-label': 'Menu', onClick:()=>setDrawerOpen(true) }, '☰'), h('h1', null, kind === 'office' ? L(locale, 'Afaq Properties', 'آفاق العقارية') : L(locale, 'DAR.KW Administration', 'إدارة دار الكويت')), h('div', { className: 'header-actions' }, h('a', { className: 'btn', href: '#/home' }, L(locale, 'View marketplace', 'عرض السوق')), h('button', { className: 'lang-btn', style: { color: 'var(--navy-900)', borderColor: 'var(--line)' }, onClick: () => setLocale(locale === 'en' ? 'ar' : 'en') }, copy[locale].language))),
        h('main', { className: 'workspace-content' }, children)
      )
    ));
  }

  function WorkspaceHeading({ locale, title, subtitle, action }) {
    return h('div', { className: 'workspace-title-row' }, h('div', null, h('h2', null, title), h('p', null, subtitle)), action);
  }

  function MiniChart({ values }) {
    return h(React.Fragment, null, h('div', { className: 'chart-bars', 'aria-label': 'Views trend chart' }, values.map((v, i) => h('div', { className: 'chart-bar', key: i, style: { height: `${v}%` }, title: `${v * 10} views` }))), h('div', { className: 'chart-labels' }, ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(x => h('span', { key: x }, x))));
  }

  function OfficeOverview({ locale, demo, officeProperties }) {
    const activeCount = officeProperties.filter(p => p.status === 'active').length;
    const pendingCount = officeProperties.filter(p => p.status === 'pending').length;
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Good morning, Afaq.', 'صباح الخير، آفاق.'), subtitle: L(locale, 'Here is how your portfolio is performing today.', 'إليك أداء محفظتك العقارية اليوم.'), action: h('a', { className: 'btn btn-primary', href: '#/office-dashboard/properties/new' }, `＋ ${L(locale, 'Add property', 'إضافة عقار')}`) }),
      h('div', { className: 'metric-grid' }, h(MetricCard, { label: L(locale, 'Available points', 'النقاط المتاحة'), value: demo.pointBalance.toLocaleString(), delta: L(locale, 'Welcome balance', 'الرصيد الحالي') }), h(MetricCard, { label: L(locale, 'Active listings', 'الإعلانات النشطة'), value: activeCount, delta: `+${pendingCount} ${L(locale, 'pending', 'قيد المراجعة')}` }), h(MetricCard, { label: L(locale, 'Total views', 'إجمالي المشاهدات'), value: '23.8K', delta: '+18.4% this month' }), h(MetricCard, { label: L(locale, 'Inquiries', 'الاستفسارات'), value: demo.inquiries.length + 7, delta: '+3 this week' })),
      h('div', { className: 'dashboard-grid' },
        h('section', { className: 'panel' }, h('div', { className: 'panel-head' }, h('h3', null, L(locale, 'Listing views', 'مشاهدات الإعلانات')), h('span', { className: 'status-badge status-active' }, '+18.4%')), h(MiniChart, { values: [38, 52, 47, 68, 62, 91] })),
        h('section', { className: 'panel' }, h('div', { className: 'panel-head' }, h('h3', null, L(locale, 'Points usage', 'استخدام النقاط')), h('a', { className: 'text-link', href: '#/office-dashboard/points' }, L(locale, 'Top up', 'شراء'))), h('div', { className: 'metric-value' }, `${demo.pointBalance} pts`), h('div', { className: 'progress-track' }, h('div', { className: 'progress-fill', style: { width: `${Math.min(100, demo.pointBalance / 5)}%` } })), h('p', { className: 'muted', style: { fontSize: '11px' } }, L(locale, 'Points power listing visibility and featured placement.', 'تستخدم النقاط لزيادة ظهور الإعلانات وتمييزها.')))
      ),
      h('div', { className: 'dashboard-grid' },
        h('section', { className: 'panel' }, h('div', { className: 'panel-head' }, h('h3', null, L(locale, 'Recent properties', 'أحدث العقارات')), h('a', { className: 'text-link', href: '#/office-dashboard/properties' }, L(locale, 'Manage', 'إدارة'))), h('div', { className: 'admin-queue' }, officeProperties.slice(0, 3).map(p => h('div', { className: 'queue-card', key: p.id }, h('img', { src: p.image, alt: '' }), h('div', null, h('h4', null, text(p.title, locale)), h('p', null, `${money(p.price, locale)} · ${p.views || 0} views`)), h(StatusBadge, { status: p.status }))))),
        h('section', { className: 'panel' }, h('div', { className: 'panel-head' }, h('h3', null, L(locale, 'Recent activity', 'النشاط الأخير'))), h('div', { className: 'activity-list' }, [
          ['✓', L(locale, 'Listing approved', 'تمت الموافقة على إعلان'), L(locale, 'Sea View Residence is now live', 'أصبح سكن بإطلالة بحرية منشوراً')],
          ['✉', L(locale, 'New inquiry received', 'استفسار جديد'), L(locale, 'A seeker asked about a villa', 'استفسار عن فيلا')],
          ['◆', L(locale, 'Points used', 'تم استخدام النقاط'), L(locale, '10 points for a standard listing', '١٠ نقاط لإعلان عادي')]
        ].map((x, i) => h('div', { className: 'activity-item', key: i }, h('span', { className: 'activity-icon' }, x[0]), h('div', null, h('h4', null, x[1]), h('p', null, x[2]))))))
      )
    );
  }

  function OfficeProperties({ locale, officeProperties, updateDemo, demo }) {
    function remove(id) {
      if (!window.confirm(L(locale, 'Delete this demo listing?', 'حذف هذا الإعلان التجريبي؟'))) return;
      updateDemo({ ...demo, createdListings: demo.createdListings.filter(p => p.id !== id) });
    }
    const rows = officeProperties.map(p => h('tr', { key: p.id },
      h('td', null, h('div', { className: 'table-property' }, h('img', { src: p.image, alt: '' }), h('div', null, h('strong', null, text(p.title, locale)), h('small', null, text(p.type, locale))))),
      h('td', null, money(p.price, locale)),
      h('td', null, (p.views || 0).toLocaleString()),
      h('td', null, h(StatusBadge, { status: p.status })),
      h('td', null, p.publishedAt),
      h('td', null, h('div', { className: 'row-actions' },
        h('a', { className: 'row-btn', href: `#/office-dashboard/properties/${p.id}/preview` }, L(locale, 'View', 'عرض')),
        h('a', { className: 'row-btn', href: `#/office-dashboard/properties/${p.id}/edit` }, L(locale, 'Edit', 'تعديل')),
        p.id.startsWith('demo') && h('button', { className: 'row-btn danger', onClick: () => remove(p.id) }, '×')
      ))
    ));
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Property management', 'إدارة العقارات'), subtitle: L(locale, 'Create, review and manage every listing from one place.', 'أنشئ وراجع وأدر كل الإعلانات من مكان واحد.'), action: h('a', { className: 'btn btn-primary', href: '#/office-dashboard/properties/new' }, `＋ ${L(locale, 'Add property', 'إضافة عقار')}`) }),
      h('div', { className: 'table-wrap' }, h('table', { className: 'data-table' },
        h('thead', null, h('tr', null, [L(locale, 'Property', 'العقار'), L(locale, 'Price', 'السعر'), L(locale, 'Views', 'المشاهدات'), L(locale, 'Status', 'الحالة'), L(locale, 'Published', 'النشر'), L(locale, 'Actions', 'الإجراءات')].map(x => h('th', { key: x }, x)))),
        h('tbody', null, rows)
      ))
    );
  }

  function ListingWizard({ locale, demo, publishListing, editProperty }) {
    const [step, setStep] = React.useState(1);
    const [complete, setComplete] = React.useState(false);
    const [draft, setDraft] = React.useState(editProperty ? {
      title: editProperty.title.en, purpose: editProperty.purpose, type: editProperty.type.en, locationId: editProperty.locationId, price: editProperty.price, bedrooms: editProperty.bedrooms, bathrooms: editProperty.bathrooms, area: editProperty.area, description: editProperty.description.en, adTier: editProperty.adTier || 'standard'
    } : { title: '', purpose: 'Rent', type: 'Apartment', locationId: 'salmiya', price: 1200, bedrooms: 2, bathrooms: 2, area: 165, description: '', adTier: 'standard' });
    const update = (key, value) => setDraft(prev => Object.assign({}, prev, { [key]: value }));
    const tier = window.DAR_DATA.adTiers.find(x => x.id === draft.adTier);
    const image = draft.type === 'Villa' ? 'assets/images/properties/property-villa-pool-01.png' : draft.type === 'Office' ? 'assets/images/properties/property-office-sharq-01.png' : 'assets/images/properties/property-apartment-salmiya-01.png';
    const steps = [L(locale, 'Basics', 'الأساسيات'), L(locale, 'Images', 'الصور'), L(locale, 'Details', 'التفاصيل'), L(locale, 'Advertisement', 'الإعلان'), L(locale, 'Publish', 'النشر')];
    function next() { if (step === 1 && !draft.title.trim()) { window.alert(L(locale, 'Add a property title to continue.', 'أضف عنوان العقار للمتابعة.')); return; } setStep(Math.min(5, step + 1)); }
    function publish() { const result = publishListing(Object.assign({}, draft, { image }), editProperty && editProperty.id); if (result) setComplete(true); }
    if (complete) return h('div', { className: 'wizard-card success-screen' }, h('div', { className: 'success-icon' }, '✓'), h('h2', null, L(locale, 'Property submitted successfully', 'تم إرسال العقار بنجاح')), h('p', null, L(locale, 'Your listing is pending administrator approval. Once approved, it will automatically appear in the marketplace.', 'إعلانك الآن قيد موافقة الإدارة، وبعد الموافقة سيظهر تلقائياً في السوق.')), h('a', { className: 'btn btn-primary', href: '#/office-dashboard/properties' }, L(locale, 'View property management', 'عرض إدارة العقارات')));
    return h('div', { className: 'wizard' },
      h(WorkspaceHeading, { locale, title: editProperty ? L(locale, 'Edit property', 'تعديل العقار') : L(locale, 'Create a property listing', 'إنشاء إعلان عقاري'), subtitle: L(locale, 'A guided publishing flow designed to keep every listing complete.', 'مسار نشر موجه لضمان اكتمال كل إعلان.') }),
      h('div', { className: 'stepper' }, steps.map((s, i) => h('div', { className: `step-item ${i + 1 === step ? 'active' : i + 1 < step ? 'done' : ''}`, key: s }, h('span', { className: 'step-circle' }, i + 1 < step ? '✓' : i + 1), h('span', null, s)))),
      h('div', { className: 'wizard-card' },
        step === 1 && h(React.Fragment, null, h('h2', null, L(locale, 'Basic information', 'المعلومات الأساسية')), h('p', null, L(locale, 'Start with the information seekers use to understand the opportunity.', 'ابدأ بالمعلومات التي تساعد الباحث على فهم العقار.')), h('div', { className: 'form-grid' }, h('div', { className: 'form-group', style: { gridColumn: '1 / -1' } }, h('label', null, L(locale, 'Property title', 'عنوان العقار')), h('input', { className: 'form-control', value: draft.title, onChange: e => update('title', e.target.value), placeholder: L(locale, 'e.g. Sea View Residence', 'مثال: سكن بإطلالة بحرية') })), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Purpose', 'الغرض')), h('select', { className: 'form-control', value: draft.purpose, onChange: e => update('purpose', e.target.value) }, h('option', null, 'Rent'), h('option', null, 'Sale'))), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Property type', 'نوع العقار')), h('select', { className: 'form-control', value: draft.type, onChange: e => update('type', e.target.value) }, ['Apartment','Villa','Office'].map(v => h('option', { key: v }, v)))), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Location', 'المنطقة')), h('select', { className: 'form-control', value: draft.locationId, onChange: e => update('locationId', e.target.value) }, locations.map(l => h('option', { key: l.id, value: l.id }, text(l.name, locale))))), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Price in KWD', 'السعر بالدينار')), h('input', { className: 'form-control', type: 'number', value: draft.price, onChange: e => update('price', Number(e.target.value)) })))),
        step === 2 && h(React.Fragment, null, h('h2', null, L(locale, 'Property images', 'صور العقار')), h('p', null, L(locale, 'The first image becomes the marketplace cover.', 'الصورة الأولى ستكون غلاف الإعلان.')), h('div', { className: 'upload-zone' }, h('div', { style: { fontSize: '30px' } }, '⇧'), h('strong', null, L(locale, 'Upload property photography', 'ارفع صور العقار')), h('small', null, L(locale, 'Static prototype: curated images are selected for the demo.', 'نموذج تجريبي: تم اختيار صور جاهزة للعرض.'))), h('div', { className: 'upload-grid' }, [image, 'assets/images/hero/hero-kuwait-skyline-desktop.png', image].map((src, i) => h('div', { className: 'upload-item', key: i }, h('img', { src, alt: '' }), h('span', null, i === 0 ? L(locale, 'Cover', 'الغلاف') : `0${i + 1}`))))),
        step === 3 && h(React.Fragment, null, h('h2', null, L(locale, 'Property details', 'تفاصيل العقار')), h('p', null, L(locale, 'Add the facts and features that help seekers decide.', 'أضف الحقائق والمزايا التي تساعد الباحث على اتخاذ القرار.')), h('div', { className: 'form-grid' }, ['bedrooms','bathrooms','area'].map(key => h('div', { className: 'form-group', key }, h('label', null, L(locale, key[0].toUpperCase()+key.slice(1), key === 'bedrooms' ? 'غرف النوم' : key === 'bathrooms' ? 'الحمامات' : 'المساحة')), h('input', { className: 'form-control', type: 'number', value: draft[key], onChange: e => update(key, Number(e.target.value)) }))), h('div', { className: 'form-group', style: { gridColumn: '1 / -1' } }, h('label', null, L(locale, 'Description', 'الوصف')), h('textarea', { className: 'form-control', value: draft.description, onChange: e => update('description', e.target.value), placeholder: L(locale, 'Describe the property, surroundings and strongest selling points…', 'صف العقار ومحيطه وأهم مزاياه…') })), h('div', { className: 'form-group', style: { gridColumn: '1 / -1' } }, h('label', null, L(locale, 'Amenities', 'المزايا')), h('div', { className: 'amenity-options' }, ['Sea view','Parking','Security','Gym','Pool','Garden'].map(a => h('label', { className: 'check-chip', key: a }, h('input', { type: 'checkbox', defaultChecked: ['Parking','Security'].includes(a) }), h('span', null, a))))))),
        step === 4 && h(React.Fragment, null, h('h2', null, L(locale, 'Select advertisement', 'اختر نوع الإعلان')), h('p', null, L(locale, `Available balance: ${demo.pointBalance} points`, `الرصيد المتاح: ${demo.pointBalance} نقطة`)), h('div', { className: 'tier-grid' }, window.DAR_DATA.adTiers.map(item => h('div', { className: `tier-card ${draft.adTier === item.id ? 'selected' : ''}`, key: item.id, onClick: () => update('adTier', item.id) }, h('h3', null, text(item.name, locale)), h('div', { className: 'tier-cost' }, `${item.cost} pts`), h('p', null, L(locale, `${item.duration} days · ${item.id === 'standard' ? 'Regular marketplace placement' : item.id === 'featured' ? 'Featured collection and highlighted card' : 'Top placement across high-intent screens'}`, `${item.duration} يوم · ${item.id === 'standard' ? 'ظهور عادي في السوق' : item.id === 'featured' ? 'ضمن المجموعة المميزة وبطاقة بارزة' : 'أولوية الظهور في الصفحات المهمة'}`))))), demo.pointBalance < tier.cost && h('div', { className: 'cost-box', style: { color: 'var(--danger)' } }, L(locale, 'Your balance is too low. Purchase points before publishing.', 'رصيدك غير كافٍ. اشترِ نقاطاً قبل النشر.'))),
        step === 5 && h(React.Fragment, null, h('h2', null, L(locale, 'Review and publish', 'المراجعة والنشر')), h('p', null, L(locale, 'Confirm the property and point deduction before submitting for approval.', 'راجع العقار وخصم النقاط قبل إرساله للموافقة.')), h('div', { className: 'review-summary' }, h('img', { src: image, alt: '' }), h('div', null, h('h3', null, draft.title || L(locale, 'Untitled property', 'عقار بدون عنوان')), h('p', { className: 'muted' }, `${draft.type} · ${text(locations.find(l => l.id === draft.locationId).name, locale)}`), h('div', { className: 'detail-price', style: { fontSize: '25px' } }, money(draft.price, locale)))), h('div', { className: 'cost-box' }, h('div', { className: 'cost-row' }, h('span', null, L(locale, 'Advertisement tier', 'نوع الإعلان')), h('strong', null, text(tier.name, locale))), h('div', { className: 'cost-row' }, h('span', null, L(locale, 'Current balance', 'الرصيد الحالي')), h('strong', null, `${demo.pointBalance} pts`)), h('div', { className: 'cost-row' }, h('span', null, L(locale, 'Point deduction', 'خصم النقاط')), h('strong', { style: { color: 'var(--danger)' } }, `−${tier.cost} pts`)), h('div', { className: 'cost-row' }, h('span', null, L(locale, 'Remaining balance', 'الرصيد المتبقي')), h('strong', null, `${demo.pointBalance - tier.cost} pts`)))),
        h('div', { className: 'wizard-actions' }, h('button', { className: 'btn', disabled: step === 1, onClick: () => setStep(Math.max(1, step - 1)) }, L(locale, 'Back', 'السابق')), step < 5 ? h('button', { className: 'btn btn-primary', onClick: next }, L(locale, 'Continue', 'متابعة')) : h('button', { className: 'btn btn-primary', disabled: demo.pointBalance < tier.cost, onClick: publish }, L(locale, 'Publish property', 'نشر العقار')))
      )
    );
  }

  function PointsPage({ locale, demo, purchasePackage }) {
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Points and visibility', 'النقاط والظهور'), subtitle: L(locale, 'Use points to publish, feature and prioritize listings.', 'استخدم النقاط لنشر الإعلانات وتمييزها وزيادة ظهورها.') }),
      h('div', { className: 'metric-grid' }, h(MetricCard, { label: L(locale, 'Current balance', 'الرصيد الحالي'), value: `${demo.pointBalance} pts`, delta: L(locale, 'Available to spend', 'متاح للاستخدام') }), h(MetricCard, { label: L(locale, 'Points purchased', 'النقاط المشتراة'), value: demo.transactions.filter(t => t.type === 'credit').reduce((a,b) => a + b.points,0).toLocaleString(), delta: L(locale, 'All time', 'إجمالي') }), h(MetricCard, { label: L(locale, 'Points used', 'النقاط المستخدمة'), value: Math.abs(demo.transactions.filter(t => t.type === 'debit').reduce((a,b) => a + b.points,0)), delta: L(locale, 'On advertisements', 'على الإعلانات') }), h(MetricCard, { label: L(locale, 'Featured listings', 'إعلانات مميزة'), value: '4', delta: '+2 this month' })),
      h('div', { className: 'workspace-title-row', style: { marginTop: '34px' } }, h('div', null, h('h2', null, L(locale, 'Choose a point package', 'اختر باقة نقاط')), h('p', null, L(locale, 'Prototype pricing for client presentation.', 'أسعار تجريبية لعرض العميل.')))),
      h('div', { className: 'package-grid' }, window.DAR_DATA.packages.map(pkg => h('article', { className: `package-card ${pkg.featured ? 'featured' : ''}`, key: pkg.id }, h('h3', null, text(pkg.name, locale)), h('div', { className: 'package-price' }, money(pkg.price, locale)), h('div', { className: 'package-points' }, `${pkg.points.toLocaleString()} points`), h('ul', { className: 'feature-list' }, pkg.features[locale].map(f => h('li', { key: f }, f))), h('button', { className: `btn ${pkg.featured ? 'btn-primary' : ''}`, style: { width: '100%' }, onClick: () => purchasePackage(pkg) }, L(locale, 'Purchase package', 'شراء الباقة'))))),
      h('div', { className: 'dashboard-grid', style: { gridTemplateColumns: '1fr', marginTop: '24px' } }, h('section', { className: 'panel' }, h('div', { className: 'panel-head' }, h('h3', null, L(locale, 'Transaction history', 'سجل العمليات'))), h('div', { className: 'transaction-list' }, demo.transactions.map(t => h('div', { className: 'transaction-item', key: t.id }, h('span', { className: 'transaction-sign' }, t.type === 'credit' ? '+' : '−'), h('div', null, h('h4', null, text(t.description, locale)), h('small', null, t.date)), h('span', { className: 'transaction-value', style: { color: t.type === 'credit' ? 'var(--success)' : 'var(--danger)' } }, `${t.points > 0 ? '+' : ''}${t.points} pts`))))))
    );
  }

  function MessagesPage({ locale }) {
    const threads = [
      [L(locale, 'Noura Al Salem', 'نورة السالم'), L(locale, 'Is the sea-view apartment available this week?', 'هل الشقة المطلة على البحر متاحة هذا الأسبوع؟')],
      [L(locale, 'Omar Al Rashid', 'عمر الراشد'), L(locale, 'I would like to arrange a villa viewing.', 'أرغب في ترتيب معاينة للفيلا.')],
      [L(locale, 'Laila Hassan', 'ليلى حسن'), L(locale, 'Can you share the office floor plan?', 'هل يمكن إرسال مخطط المكتب؟')]
    ];
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Inquiry inbox', 'صندوق الاستفسارات'), subtitle: L(locale, 'Keep every property conversation organized.', 'نظّم كل محادثات العقارات في مكان واحد.') }),
      h('div', { className: 'message-layout' }, h('div', { className: 'thread-list' }, threads.map((x,i) => h('div', { className: `thread-item ${i === 0 ? 'active' : ''}`, key: i }, h('span', { className: 'thread-avatar' }, x[0][0]), h('div', null, h('h4', null, x[0]), h('p', null, x[1]))))), h('div', { className: 'conversation' }, h('div', { className: 'conversation-head' }, threads[0][0], ' · ', L(locale, 'Sea View Residence', 'سكن بإطلالة بحرية')), h('div', { className: 'messages' }, h('div', { className: 'bubble' }, threads[0][1]), h('div', { className: 'bubble mine' }, L(locale, 'Yes, it is available. We can arrange a private viewing on Thursday afternoon.', 'نعم، متاحة. يمكننا ترتيب معاينة خاصة مساء الخميس.'))), h('div', { className: 'message-compose' }, h('input', { className: 'form-control', placeholder: L(locale, 'Write a reply…', 'اكتب رداً…') }), h('button', { className: 'btn btn-primary' }, L(locale, 'Send', 'إرسال')))))
    );
  }

  function OfficeProfileSettings({ locale }) {
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Office profile', 'ملف المكتب'), subtitle: L(locale, 'Manage the identity seekers see across the marketplace.', 'أدر الهوية التي يراها الباحثون في السوق.') }),
      h('div', { className: 'settings-card', style: { maxWidth: '900px' } }, h('div', { className: 'office-profile-row', style: { color: 'var(--ink)', marginBottom: '28px' } }, h('div', { className: 'office-logo', style: { width: '72px', height: '72px', background: offices[0].color } }, offices[0].initials), h('div', null, h('h2', { style: { margin: 0 } }, text(offices[0].name, locale)), h('span', { className: 'verified' }, `✓ ${copy[locale].verified}`))), h('div', { className: 'form-grid' }, h('div', { className: 'form-group' }, h('label', null, L(locale, 'Company name', 'اسم الشركة')), h('input', { className: 'form-control', defaultValue: 'Afaq Properties' })), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Phone', 'الهاتف')), h('input', { className: 'form-control', defaultValue: offices[0].phone })), h('div', { className: 'form-group' }, h('label', null, 'WhatsApp'), h('input', { className: 'form-control', defaultValue: offices[0].whatsapp })), h('div', { className: 'form-group' }, h('label', null, L(locale, 'Email', 'البريد')), h('input', { className: 'form-control', defaultValue: offices[0].email })), h('div', { className: 'form-group', style: { gridColumn: '1 / -1' } }, h('label', null, L(locale, 'Office description', 'وصف المكتب')), h('textarea', { className: 'form-control', defaultValue: L(locale, 'Premium residential and commercial property advisors serving Kuwait.', 'مستشارون للعقارات السكنية والتجارية الراقية في الكويت.') }))), h('button', { className: 'btn btn-primary', style: { marginTop: '20px' } }, L(locale, 'Save profile', 'حفظ الملف')))
    );
  }

  function AdminOverview({ locale, demo, approveListing }) {
    const pending = demo.createdListings.filter(p => p.status === 'pending');
    const mix = [['Apartments',46],['Villas',32],['Commercial',22]];
    const queue = pending.length ? h('div',{className:'admin-queue'},pending.map(p=>h('div',{className:'queue-card',key:p.id},
      h('img',{src:p.image,alt:''}),h('div',null,h('h4',null,text(p.title,locale)),h('p',null,`${money(p.price,locale)} · Afaq Properties`)),
      h('div',{className:'row-actions'},h('button',{className:'row-btn success',onClick:()=>approveListing(p.id,'active')},L(locale,'Approve','موافقة')),h('button',{className:'row-btn danger',onClick:()=>approveListing(p.id,'rejected')},L(locale,'Reject','رفض')))
    ))) : h('p',{className:'muted'},L(locale,'Approval queue is clear.','قائمة الموافقات فارغة.'));
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Marketplace overview', 'نظرة عامة على السوق'), subtitle: L(locale, 'Control quality, growth and trust across DAR.KW.', 'تحكم في الجودة والنمو والثقة في دار الكويت.') }),
      h('div', { className: 'metric-grid' }, h(MetricCard, { label: L(locale, 'Registered users', 'المستخدمون'), value: '12,480', delta: '+8.2% this month' }), h(MetricCard, { label: L(locale, 'Approved offices', 'المكاتب المعتمدة'), value: '186', delta: '4 pending review' }), h(MetricCard, { label: L(locale, 'Live properties', 'العقارات المنشورة'), value: properties.length + demo.createdListings.filter(p=>p.status==='active').length, delta: `${pending.length} pending` }), h(MetricCard, { label: L(locale, 'Monthly inquiries', 'استفسارات الشهر'), value: '4,920', delta: '+21.4% growth' })),
      h('div',{className:'dashboard-grid'},
        h('section',{className:'panel'},h('div',{className:'panel-head'},h('h3',null,L(locale,'Marketplace growth','نمو السوق')),h('span',{className:'status-badge status-active'},'+14.7%')),h(MiniChart,{values:[32,44,53,61,75,94]})),
        h('section',{className:'panel'},h('div',{className:'panel-head'},h('h3',null,L(locale,'Property mix','توزيع العقارات'))),mix.map(x=>h('div',{key:x[0],style:{marginBottom:'17px'}},h('div',{className:'cost-row'},h('span',null,x[0]),h('strong',null,`${x[1]}%`)),h('div',{className:'progress-track'},h('div',{className:'progress-fill',style:{width:`${x[1]}%`}})))))
      ),
      h('div',{className:'dashboard-grid'},
        h('section',{className:'panel'},h('div',{className:'panel-head'},h('h3',null,L(locale,'Pending property approvals','عقارات بانتظار الموافقة')),h('a',{className:'text-link',href:'#/admin/properties'},L(locale,'Review all','مراجعة الكل'))),queue),
        h('section',{className:'panel'},h('div',{className:'panel-head'},h('h3',null,L(locale,'Administrative activity','نشاط الإدارة'))),h('div',{className:'activity-list'},[['✓','Three offices approved'],['⌂','Twelve listings published'],['♙','User report resolved']].map((x,i)=>h('div',{className:'activity-item',key:i},h('span',{className:'activity-icon'},x[0]),h('div',null,h('h4',null,x[1]),h('p',null,`${i+1} hour${i?'s':''} ago`))))))
      )
    );
  }

  function AdminProperties({ locale, demo, approveListing }) {
    const rows=demo.createdListings.map(p=>h('tr',{key:p.id},
      h('td',null,h('div',{className:'table-property'},h('img',{src:p.image,alt:''}),h('div',null,h('strong',null,text(p.title,locale)),h('small',null,money(p.price,locale))))),
      h('td',null,'Afaq Properties'),h('td',null,p.adTier||'standard'),h('td',null,h(StatusBadge,{status:p.status})),h('td',null,p.publishedAt),
      h('td',null,h('div',{className:'row-actions'},h('a',{className:'row-btn',href:`#/property/${p.id}`},L(locale,'Preview','معاينة')),p.status==='pending'&&h('button',{className:'row-btn success',onClick:()=>approveListing(p.id,'active')},L(locale,'Approve','موافقة')),p.status==='pending'&&h('button',{className:'row-btn danger',onClick:()=>approveListing(p.id,'rejected')},L(locale,'Reject','رفض'))))
    ));
    return h(React.Fragment, null,
      h(WorkspaceHeading, { locale, title: L(locale, 'Property moderation', 'مراجعة العقارات'), subtitle: L(locale, 'Approve complete listings and protect marketplace quality.', 'وافق على الإعلانات المكتملة وحافظ على جودة السوق.') }),
      h('div',{className:'table-wrap'},h('table',{className:'data-table'},h('thead',null,h('tr',null,[L(locale,'Property','العقار'),L(locale,'Office','المكتب'),L(locale,'Tier','الباقة'),L(locale,'Status','الحالة'),L(locale,'Submitted','التقديم'),L(locale,'Actions','الإجراءات')].map(x=>h('th',{key:x},x)))),h('tbody',null,rows)))
    );
  }

  function AdminUsers({ locale, demo, updateDemo }) {
    function cycle(user) { const current = demo.userStatuses[user.id] || user.status; const next = current === 'active' ? 'suspended' : current === 'suspended' ? 'blocked' : 'active'; updateDemo(Object.assign({}, demo, { userStatuses: Object.assign({}, demo.userStatuses, { [user.id]: next }) })); }
    return h(React.Fragment, null, h(WorkspaceHeading, { locale, title: L(locale,'User management','إدارة المستخدمين'), subtitle: L(locale,'Review marketplace accounts and their current standing.','راجع حسابات السوق وحالتها الحالية.') }), h('div', { className: 'table-wrap' }, h('table', { className: 'data-table' }, h('thead', null, h('tr', null, [L(locale,'User','المستخدم'),L(locale,'Joined','الانضمام'),L(locale,'Inquiries','الاستفسارات'),L(locale,'Status','الحالة'),L(locale,'Action','الإجراء')].map(x=>h('th',{key:x},x)))), h('tbody', null, window.DAR_DATA.users.map((u,i) => { const status = demo.userStatuses[u.id] || u.status; return h('tr', { key:u.id }, h('td', null, h('strong',null,u.name)), h('td',null,u.joined), h('td',null,2+i), h('td',null,h(StatusBadge,{status})), h('td',null,h('button',{className:'row-btn',onClick:()=>cycle(u)},L(locale,'Change status','تغيير الحالة')))); })) )));
  }

  function AdminOffices({ locale, demo, updateDemo }) {
    function setStatus(id,status) { updateDemo(Object.assign({},demo,{officeStatuses:Object.assign({},demo.officeStatuses,{[id]:status})})); }
    return h(React.Fragment,null,h(WorkspaceHeading,{locale,title:L(locale,'Office approvals','اعتماد المكاتب'),subtitle:L(locale,'Verify trusted real estate partners before they publish.','تحقق من شركاء العقارات قبل السماح لهم بالنشر.')}),h('div',{className:'table-wrap'},h('table',{className:'data-table'},h('thead',null,h('tr',null,[L(locale,'Office','المكتب'),L(locale,'Contact','التواصل'),L(locale,'Listings','الإعلانات'),L(locale,'Status','الحالة'),L(locale,'Actions','الإجراءات')].map(x=>h('th',{key:x},x)))),h('tbody',null,offices.map((o,i)=>{const status=demo.officeStatuses[o.id]||(o.verified?'approved':'pending');return h('tr',{key:o.id},h('td',null,h('div',{className:'table-property'},h('span',{className:'office-logo',style:{width:'46px',height:'46px',background:o.color}},o.initials),h('div',null,h('strong',null,text(o.name,locale)),h('small',null,text(o.address,locale))))),h('td',null,o.phone),h('td',null,3+i*2),h('td',null,h(StatusBadge,{status})),h('td',null,h('div',{className:'row-actions'},status==='pending'&&h('button',{className:'row-btn success',onClick:()=>setStatus(o.id,'approved')},L(locale,'Approve','موافقة')),h('button',{className:'row-btn danger',onClick:()=>setStatus(o.id,'suspended')},L(locale,'Suspend','إيقاف')))));})))));
  }

  function SimpleManager({ locale, type }) {
    const data = type === 'categories' ? [['Apartment','شقة',112],['Villa','فيلا',86],['Office','مكتب',64],['Chalet','شاليه',28]] : locations.map(l=>[l.name.en,l.name.ar,l.count]);
    const rows=data.map((x,i)=>h('tr',{key:i},h('td',null,h('strong',null,x[0])),h('td',null,x[1]),h('td',null,x[2]),h('td',null,h('div',{className:'row-actions'},h('button',{className:'row-btn'},L(locale,'Edit','تعديل')),h('button',{className:'row-btn danger'},'×')))));
    return h(React.Fragment,null,
      h(WorkspaceHeading,{locale,title:type==='categories'?L(locale,'Property categories','أنواع العقارات'):L(locale,'Kuwait locations','مناطق الكويت'),subtitle:L(locale,'Maintain the structure used across search and publishing.','أدر البنية المستخدمة في البحث والنشر.'),action:h('button',{className:'btn btn-primary'},`＋ ${L(locale,'Add new','إضافة')}`)}),
      h('div',{className:'table-wrap'},h('table',{className:'data-table'},h('thead',null,h('tr',null,[L(locale,'English name','الاسم بالإنجليزية'),L(locale,'Arabic name','الاسم بالعربية'),L(locale,'Live listings','الإعلانات'),L(locale,'Actions','الإجراءات')].map(x=>h('th',{key:x},x)))),h('tbody',null,rows)))
    );
  }

  function ReportsPage({ locale }) {
    return h(React.Fragment,null,h(WorkspaceHeading,{locale,title:L(locale,'Marketplace analytics','تحليلات السوق'),subtitle:L(locale,'Understand supply, demand and office performance.','افهم العرض والطلب وأداء المكاتب.')}),h('div',{className:'metric-grid'},h(MetricCard,{label:L(locale,'Searches','عمليات البحث'),value:'84.2K',delta:'+24.1%'}),h(MetricCard,{label:L(locale,'Property views','مشاهدات العقارات'),value:'162K',delta:'+18.7%'}),h(MetricCard,{label:L(locale,'Inquiry rate','معدل الاستفسار'),value:'6.8%',delta:'+1.2 pts'}),h(MetricCard,{label:L(locale,'Office response','استجابة المكاتب'),value:'92%',delta:'Under 2 hours'})),h('div',{className:'dashboard-grid'},h('section',{className:'panel'},h('div',{className:'panel-head'},h('h3',null,L(locale,'Demand by month','الطلب حسب الشهر'))),h(MiniChart,{values:[42,55,48,73,68,96]})),h('section',{className:'panel'},h('div',{className:'panel-head'},h('h3',null,L(locale,'Top locations','أهم المناطق'))),locations.slice(0,4).map(l=>h('div',{className:'cost-row',key:l.id},h('span',null,text(l.name,locale)),h('strong',null,l.count))))));
  }

  function RoleHub({ locale }) {
    const roles=[
      {icon:'user',title:L(locale,'Property seeker','باحث عن عقار'),copy:L(locale,'Manage saved properties, inquiries and recommendations.','أدر العقارات المحفوظة والاستفسارات والتوصيات.'),href:'#/user-dashboard',cta:L(locale,'Open seeker dashboard','فتح لوحة الباحث')},
      {icon:'building',title:L(locale,'Real estate office','مكتب عقاري'),copy:L(locale,'Publish listings, buy points and manage property inquiries.','انشر الإعلانات واشترِ النقاط وأدر الاستفسارات.'),href:'#/office-dashboard',cta:L(locale,'Open office dashboard','فتح لوحة المكتب')},
      {icon:'shield',title:L(locale,'Platform administrator','مدير المنصة'),copy:L(locale,'Approve offices and listings, monitor growth and quality.','اعتمد المكاتب والإعلانات وراقب النمو والجودة.'),href:'#/admin',cta:L(locale,'Open admin dashboard','فتح لوحة الإدارة')}
    ];
    return h(React.Fragment,null,h(PageHero,{locale,title:L(locale,'One marketplace. Three focused experiences.','سوق واحد. ثلاث تجارب متخصصة.'),subtitle:L(locale,'Choose a role to demonstrate the complete DAR.KW product story.','اختر دوراً لعرض قصة منتج دار الكويت كاملة.')}),h('section',{className:'page-shell role-hub'},h('div',{className:'container role-grid'},roles.map((r,i)=>h('article',{className:`role-card role-${i}`,key:r.href},h('span',{className:'role-icon'},h(Icon,{name:r.icon,size:28})),h('p',{className:'eyebrow'},i===0?L(locale,'For customers','للعملاء'):i===1?L(locale,'For partners','للشركاء'):L(locale,'For operations','للإدارة')),h('h2',null,r.title),h('p',null,r.copy),h('a',{className:'btn btn-primary',href:r.href},r.cta))))));
  }

  function UserDashboard({ locale, favorites, inquiries, allProperties, toggleFavorite }) {
    const saved=allProperties.filter(p=>favorites.includes(p.id));
    const recommended=allProperties.filter(p=>p.featured).slice(0,3);
    return h('section',{className:'seeker-dashboard'},h('div',{className:'container'},
      h('div',{className:'seeker-top'},h('div',null,h('p',{className:'eyebrow'},L(locale,'Seeker workspace','مساحة الباحث')),h('h1',null,L(locale,'Welcome back, Noura.','مرحباً بعودتك، نورة.')),h('p',null,L(locale,'Your saved homes, inquiries and next best matches in one place.','عقاراتك المحفوظة واستفساراتك وأفضل الخيارات في مكان واحد.'))),h('a',{className:'btn btn-primary',href:'#/search'},h(Icon,{name:'search',size:17}),L(locale,'Explore properties','استكشف العقارات'))),
      h('div',{className:'seeker-metrics'},h(MetricCard,{label:L(locale,'Saved properties','العقارات المحفوظة'),value:saved.length,delta:L(locale,'Your shortlist','قائمتك المختصرة')}),h(MetricCard,{label:L(locale,'Active inquiries','الاستفسارات النشطة'),value:inquiries.filter(i=>i.status!=='closed').length,delta:L(locale,'Direct with offices','مباشرة مع المكاتب')}),h(MetricCard,{label:L(locale,'Unread messages','رسائل غير مقروءة'),value:'2',delta:L(locale,'From Afaq Properties','من آفاق العقارية')}),h(MetricCard,{label:L(locale,'New matches','خيارات جديدة'),value:'12',delta:L(locale,'Based on your activity','بناءً على نشاطك')})),
      h('div',{className:'seeker-actions'},h('a',{href:'#/account/messages'},h(Icon,{name:'chat'}),h('span',null,h('strong',null,L(locale,'Messages','الرسائل')),h('small',null,L(locale,'Continue property conversations','تابع محادثات العقارات')))),h('a',{href:'#/account/saved'},h(Icon,{name:'heart'}),h('span',null,h('strong',null,L(locale,'Saved properties','العقارات المحفوظة')),h('small',null,L(locale,'Review and compare your shortlist','راجع وقارن قائمتك')))),h('a',{href:'#/account/inquiries'},h(Icon,{name:'building'}),h('span',null,h('strong',null,L(locale,'Inquiry history','سجل الاستفسارات')),h('small',null,L(locale,'Track office responses','تابع ردود المكاتب')))),h('a',{href:'#/account/settings'},h(Icon,{name:'user'}),h('span',null,h('strong',null,L(locale,'Preferences','التفضيلات')),h('small',null,L(locale,'Language and notifications','اللغة والتنبيهات'))))),
      h('a',{className:'active-conversation-card',href:'#/account/messages'},h('img',{src:'assets/images/properties/property-apartment-salmiya-01.png',alt:''}),h('div',null,h('p',{className:'eyebrow'},L(locale,'Latest conversation','أحدث محادثة')),h('h3',null,L(locale,'Sea View Residence','سكن بإطلالة بحرية')),h('p',null,L(locale,'Afaq Properties: Yes, it is available. We can arrange a viewing Thursday afternoon.','آفاق العقارية: نعم، العقار متاح ويمكن ترتيب معاينة مساء الخميس.'))),h('span',{className:'conversation-cta'},h('b',null,'2'),L(locale,'Open chat','فتح المحادثة'),' →')),
      h('div',{className:'section-head compact-head'},h('div',null,h('p',{className:'eyebrow'},L(locale,'Recommended for you','موصى به لك')),h('h2',null,L(locale,'Continue your search','تابع بحثك'))),h('a',{className:'text-link',href:'#/search'},L(locale,'View all','عرض الكل'))),
      h('div',{className:'property-grid'},recommended.map(p=>h(PropertyCard,{key:p.id,property:p,locale,favorites,toggleFavorite})))
    ));
  }

  function AuthPage({ locale, mode }) {
    const [role,setRole]=React.useState('user');
    const register=mode==='register';
    const destination=role==='admin'?'#/admin':role==='office'?'#/office-dashboard':'#/user-dashboard';
    function submit(e){e.preventDefault();location.hash=destination.slice(1);}
    return h('section',{className:'auth-page'},h('div',{className:'auth-shell'},
      h('div',{className:'auth-visual'},h(Logo),h('div',null,h('p',{className:'eyebrow'},L(locale,'Kuwait property, simplified','عقارات الكويت ببساطة')),h('h1',null,register?L(locale,'Join the marketplace built for every role.','انضم إلى السوق المصمم لكل دور.'):L(locale,'Welcome back to DAR.KW.','مرحباً بعودتك إلى دار الكويت.')),h('p',null,L(locale,'Explore properties, grow an office portfolio, or manage the entire marketplace from one refined product.','استكشف العقارات أو نمِّ محفظة مكتبك أو أدر السوق بالكامل من منتج واحد.')))),
      h('div',{className:'auth-card'},h('a',{className:'auth-back',href:'#/home'},'← ',L(locale,'Back to marketplace','العودة إلى السوق')),h('h2',null,register?L(locale,'Create your account','إنشاء حساب'):L(locale,'Sign in','تسجيل الدخول')),h('p',null,register?L(locale,'Choose your role to start the right experience.','اختر دورك لبدء التجربة المناسبة.'):L(locale,'Use any demo details—the prototype does not authenticate.','استخدم أي بيانات تجريبية—النموذج لا يسجل دخولاً حقيقياً.')),
        h('div',{className:'auth-role-tabs'},[['user',L(locale,'Seeker','باحث'), 'user'],['office',L(locale,'Office','مكتب'),'building'],['admin',L(locale,'Admin','إدارة'),'shield']].map(x=>h('button',{type:'button',className:role===x[0]?'active':'',onClick:()=>setRole(x[0]),key:x[0]},h(Icon,{name:x[2],size:17}),x[1]))),
        h('form',{onSubmit:submit},register&&h('div',{className:'form-group'},h('label',null,L(locale,'Full name','الاسم الكامل')),h('input',{className:'form-control',required:true,placeholder:L(locale,'Noura Al Salem','نورة السالم')})),h('div',{className:'form-group'},h('label',null,L(locale,'Email address','البريد الإلكتروني')),h('input',{className:'form-control',type:'email',required:true,defaultValue:'demo@dar.kw'})),h('div',{className:'form-group'},h('label',null,L(locale,'Password','كلمة المرور')),h('input',{className:'form-control',type:'password',required:true,defaultValue:'prototype'})),h('button',{className:'btn btn-primary auth-submit',type:'submit'},register?L(locale,'Create account and continue','إنشاء الحساب والمتابعة'):L(locale,'Continue to dashboard','المتابعة إلى لوحة التحكم'))),
        h('p',{className:'auth-switch'},register?L(locale,'Already have an account?','لديك حساب؟'):L(locale,'New to DAR.KW?','جديد في دار الكويت؟'),' ',h('a',{href:register?'#/login':'#/register'},register?L(locale,'Sign in','تسجيل الدخول'):L(locale,'Create account','إنشاء حساب')))
      )
    ));
  }

  function NotFound({ locale }) { return h(React.Fragment,null,h(PageHero,{locale,title:'404',subtitle:L(locale,'This prototype route does not exist.','هذا المسار غير موجود في النموذج.')}),h('section',{className:'page-shell'},h('div',{className:'container'},h(EmptyState,{locale,title:L(locale,'Page not found','الصفحة غير موجودة'),copyText:L(locale,'Return to the marketplace and continue exploring.','عد إلى السوق وتابع الاستكشاف.'),actionHref:'#/home',actionLabel:L(locale,'Back home','العودة للرئيسية')})))); }

  function App() {
    const readJson = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (_) { return fallback; } };
    const [locale, setLocaleState] = React.useState(localStorage.getItem('dar-locale') || 'en');
    const [favorites, setFavorites] = React.useState(readJson('dar-favorites', []));
    const [demo, setDemo] = React.useState(readJson('dar-demo-state-v1', cloneInitialDemo()));
    const [path, setPath] = React.useState(route().split('?')[0]);
    const [toast, setToast] = React.useState('');
    React.useEffect(() => { const handler = () => { setPath(route().split('?')[0]); window.scrollTo(0,0); }; window.addEventListener('hashchange',handler); if(!location.hash) location.hash='#/home'; return()=>window.removeEventListener('hashchange',handler); },[]);
    React.useEffect(() => { document.documentElement.lang=locale; document.documentElement.dir=locale==='ar'?'rtl':'ltr'; document.body.dir=document.documentElement.dir; localStorage.setItem('dar-locale',locale); },[locale]);
    React.useEffect(() => localStorage.setItem('dar-demo-state-v1',JSON.stringify(demo)),[demo]);
    function setLocale(next){ setLocaleState(next); }
    function notify(message){ setToast(message); clearTimeout(window.__darToast); window.__darToast=setTimeout(()=>setToast(''),2600); }
    function toggleFavorite(id){ const next=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id]; setFavorites(next); localStorage.setItem('dar-favorites',JSON.stringify(next)); notify(next.includes(id)?copy[locale].toastSaved:copy[locale].toastRemoved); }
    function addInquiry(propertyId){ const item={id:`inq-${Date.now()}`,propertyId,status:'new',date:'2026-08-28'}; setDemo(s=>({...s,inquiries:[item,...s.inquiries]})); notify(L(locale,'Inquiry sent to the verified office','تم إرسال الاستفسار إلى المكتب الموثق')); }
    function purchasePackage(pkg){ if(!confirm(L(locale,`Purchase ${text(pkg.name,locale)} for ${money(pkg.price,locale)}?`,`شراء ${text(pkg.name,locale)} مقابل ${money(pkg.price,locale)}؟`)))return; setDemo(s=>({...s,pointBalance:s.pointBalance+pkg.points,transactions:[{id:`tx-${Date.now()}`,type:'credit',points:pkg.points,description:pkg.name,date:'2026-08-28'},...s.transactions]})); notify(L(locale,`${pkg.points.toLocaleString()} points added`,`تمت إضافة ${pkg.points.toLocaleString('ar-KW')} نقطة`)); }
    function publishListing(draft,existingId){ const tier=adTiers.find(x=>x.id===draft.adTier)||adTiers[0]; const editing=Boolean(existingId); if(!editing&&demo.pointBalance<tier.cost){location.hash='#/office-dashboard/points';notify(L(locale,'Not enough points—choose a package','النقاط غير كافية—اختر باقة'));return false;} const loc=locations.find(x=>x.id===draft.locationId)||locations[0]; const labels={apartment:{en:'Apartment',ar:'شقة'},villa:{en:'Villa',ar:'فيلا'},office:{en:'Office',ar:'مكتب'},land:{en:'Land',ar:'أرض'}}; const typeKey=String(draft.type||'Apartment').toLowerCase(); const purpose=String(draft.purpose||'Rent').toLowerCase()==='sale'?'Sale':'Rent'; const image=draft.image||'assets/images/properties/property-apartment-salmiya-01.png'; const listing={id:existingId||`demo-${Date.now()}`,title:{en:draft.title||'New Kuwait property',ar:draft.titleAr||draft.title||'عقار جديد في الكويت'},purpose,type:labels[typeKey]||labels.apartment,typeKey,locationId:loc.id,price:Number(draft.price)||850,bedrooms:Number(draft.bedrooms)||2,bathrooms:Number(draft.bathrooms)||2,area:Number(draft.area)||120,description:{en:draft.description||'A premium property presented by a verified Kuwait real estate office.',ar:draft.descriptionAr||'عقار مميز مقدم من مكتب عقاري موثق في الكويت.'},amenities:draft.amenities||['Parking','Security'],officeId:'o1',verified:true,featured:tier.id!=='standard',status:editing?(draft.status||'pending'):'pending',views:0,image,images:[image],adTier:tier.id,publishedAt:'2026-08-28'}; setDemo(s=>({...s,pointBalance:editing?s.pointBalance:s.pointBalance-tier.cost,createdListings:[...s.createdListings.filter(x=>x.id!==listing.id),listing],transactions:editing?s.transactions:[{id:`tx-${Date.now()}`,type:'debit',points:-tier.cost,description:{en:`${text(tier.name,'en')} listing`,ar:`إعلان ${text(tier.name,'ar')}`},date:'2026-08-28'},...s.transactions]})); notify(editing?L(locale,'Listing updated','تم تحديث الإعلان'):L(locale,'Published for admin approval','تم النشر بانتظار موافقة الإدارة')); return true; }
    function moderateListing(id,status){ setDemo(s=>({...s,createdListings:s.createdListings.map(x=>x.id===id?{...x,status}:x)})); notify(status==='active'?L(locale,'Listing approved and now live','تمت الموافقة والإعلان متاح الآن'):L(locale,'Listing rejected','تم رفض الإعلان')); }
    function updateDemo(next){ setDemo(next); }
    function resetDemo(){ if(!confirm(L(locale,'Reset all demo changes?','إعادة ضبط جميع تغييرات العرض؟')))return; const clean=cloneInitialDemo(); setDemo(clean);setFavorites([]);localStorage.removeItem('dar-favorites');location.hash='#/home';notify(L(locale,'Demo restored','تمت استعادة العرض')); }
    const market=[...properties.filter(x=>x.status==='active'),...demo.createdListings.filter(x=>x.status==='active')];
    const mine=[...properties.filter(x=>x.officeId==='o1').slice(0,4),...demo.createdListings];
    let page;
    if(path.startsWith('/office-dashboard')){
      let content;
      if(path==='/office-dashboard')content=h(OfficeOverview,{locale,demo,officeProperties:mine});
      else if(path==='/office-dashboard/properties')content=h(OfficeProperties,{locale,officeProperties:mine,updateDemo,demo});
      else if(path==='/office-dashboard/properties/new')content=h(ListingWizard,{locale,demo,publishListing});
      else if(/^\/office-dashboard\/properties\/[^/]+\/edit$/.test(path)){const id=path.split('/')[3];content=h(ListingWizard,{locale,demo,publishListing,editProperty:mine.find(x=>x.id===id)});}
      else if(/^\/office-dashboard\/properties\/[^/]+\/preview$/.test(path)){const id=path.split('/')[3],item=mine.find(x=>x.id===id);content=item?h(React.Fragment,null,h(WorkspaceHeading,{locale,title:L(locale,'Listing preview','معاينة الإعلان'),subtitle:L(locale,'Marketplace appearance before approval.','شكل الإعلان في السوق قبل الموافقة.')}),h('div',{className:'preview-frame'},h(PropertyCard,{property:item,locale,favorites,toggleFavorite}))):h(NotFound,{locale});}
      else if(path==='/office-dashboard/points')content=h(PointsPage,{locale,demo,purchasePackage});
      else if(path==='/office-dashboard/messages')content=h(MessagesPage,{locale});
      else if(path==='/office-dashboard/profile')content=h(OfficeProfileSettings,{locale});
      else content=h(NotFound,{locale});
      page=h(WorkspaceShell,{kind:'office',locale,setLocale,path,resetDemo,pointBalance:demo.pointBalance},content);
    }else if(path.startsWith('/admin')){
      let content;
      if(path==='/admin')content=h(AdminOverview,{locale,demo,approveListing:moderateListing});
      else if(path==='/admin/properties')content=h(AdminProperties,{locale,demo,approveListing:moderateListing});
      else if(path==='/admin/conversations')content=h(AdminConversations,{locale});
      else if(path==='/admin/users')content=h(AdminUsers,{locale,demo,updateDemo});
      else if(path==='/admin/offices')content=h(AdminOffices,{locale,demo,updateDemo});
      else if(path==='/admin/categories')content=h(SimpleManager,{locale,type:'categories'});
      else if(path==='/admin/locations')content=h(SimpleManager,{locale,type:'locations'});
      else if(path==='/admin/reports')content=h(ReportsPage,{locale});
      else content=h(NotFound,{locale});
      page=h(WorkspaceShell,{kind:'admin',locale,setLocale,path,resetDemo,pointBalance:demo.pointBalance},content);
    }else{
      let content;
      if(path==='/'||path==='/home')content=h(Home,{locale,favorites,toggleFavorite,allProperties:market});
      else if(path==='/search')content=h(SearchPage,{locale,favorites,toggleFavorite,allProperties:market});
      else if(path.startsWith('/property/')){const item=[...properties,...demo.createdListings].find(x=>x.id===path.split('/')[2]);content=item?h(PropertyDetail,{locale,favorites,toggleFavorite,property:item,properties:market,addInquiry}):h(NotFound,{locale});}
      else if(path.startsWith('/office/')){const office=offices.find(x=>x.id===path.split('/')[2]);content=office?h(OfficeProfile,{locale,favorites,toggleFavorite,office,allProperties:market}):h(NotFound,{locale});}
      else if(path.startsWith('/account/'))content=h(AccountPage,{path,locale,favorites,toggleFavorite,inquiries:demo.inquiries,allProperties:market,setLocale});
      else if(path==='/roles')content=h(RoleHub,{locale});
      else if(path==='/user-dashboard')content=h(UserDashboard,{locale,favorites,inquiries:demo.inquiries,allProperties:market,toggleFavorite});
      else if(path==='/login'||path==='/register')content=h(AuthPage,{locale,mode:path.slice(1)});
      else content=h(NotFound,{locale});
      const authRoute=path==='/login'||path==='/register';
      page=h(React.Fragment,null,!authRoute&&h(Header,{locale,setLocale,path}),h('main',{className:authRoute?'auth-main':'public-main'},content),!authRoute&&h(Footer,{locale}),!authRoute&&h(MobileNav,{locale,path}));
    }
    return h(React.Fragment,null,page,toast&&h('div',{className:'toast',role:'status'},h('span',null,'✓'),toast));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
