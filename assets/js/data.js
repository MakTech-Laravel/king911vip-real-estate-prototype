(function () {
  const asset = (name) => `assets/images/${name}`;

  const locations = [
    { id: 'kuwait-city', name: { en: 'Kuwait City', ar: 'مدينة الكويت' }, count: 128, image: asset('locations/location-kuwait-city-aerial.png') },
    { id: 'salmiya', name: { en: 'Salmiya', ar: 'السالمية' }, count: 94, image: asset('properties/property-apartment-salmiya-01.png') },
    { id: 'hawally', name: { en: 'Hawally', ar: 'حولي' }, count: 72, image: asset('properties/property-villa-pool-01.png') },
    { id: 'sharq', name: { en: 'Sharq', ar: 'شرق' }, count: 65, image: asset('properties/property-office-sharq-01.png') },
    { id: 'jabriya', name: { en: 'Jabriya', ar: 'الجابرية' }, count: 48, image: asset('properties/property-villa-pool-01.png') },
    { id: 'shaab', name: { en: 'Al Shaab', ar: 'الشعب' }, count: 36, image: asset('properties/property-apartment-salmiya-01.png') },
    { id: 'mishref', name: { en: 'Mishref', ar: 'مشرف' }, count: 31, image: asset('properties/property-villa-pool-01.png') },
    { id: 'bneid', name: { en: 'Bneid Al Qar', ar: 'بنيد القار' }, count: 28, image: asset('properties/property-apartment-salmiya-01.png') }
  ];

  const offices = [
    { id: 'o1', name: { en: 'Afaq Properties', ar: 'آفاق العقارية' }, initials: 'AP', verified: true, phone: '+965 2228 4100', whatsapp: '+965 9901 2840', email: 'hello@afaq.demo', address: { en: 'Sharq, Ahmad Al Jaber St.', ar: 'شرق، شارع أحمد الجابر' }, agent: asset('offices/office-agent-01.png'), color: '#c9a35b' },
    { id: 'o2', name: { en: 'Maison Kuwait', ar: 'ميزون الكويت' }, initials: 'MK', verified: true, phone: '+965 2225 9080', whatsapp: '+965 9882 4103', email: 'homes@maison.demo', address: { en: 'Salmiya, Gulf Road', ar: 'السالمية، شارع الخليج' }, agent: asset('offices/office-agent-01.png'), color: '#24836b' },
    { id: 'o3', name: { en: 'Nook Real Estate', ar: 'نوك العقارية' }, initials: 'NR', verified: true, phone: '+965 2290 6642', whatsapp: '+965 9917 0611', email: 'team@nook.demo', address: { en: 'Kuwait City, Al Soor St.', ar: 'مدينة الكويت، شارع السور' }, agent: asset('offices/office-agent-01.png'), color: '#55769c' },
    { id: 'o4', name: { en: 'Dar Al Watan', ar: 'دار الوطن' }, initials: 'DW', verified: false, phone: '+965 2265 1190', whatsapp: '+965 9771 5020', email: 'info@darwatan.demo', address: { en: 'Hawally, Beirut St.', ar: 'حولي، شارع بيروت' }, agent: asset('offices/office-agent-01.png'), color: '#b85c57' },
    { id: 'o5', name: { en: 'Signature Estates', ar: 'سيجنتشر العقارية' }, initials: 'SE', verified: true, phone: '+965 2291 8820', whatsapp: '+965 9962 4431', email: 'hello@signature.demo', address: { en: 'Sharq, Jaber Al Mubarak St.', ar: 'شرق، شارع جابر المبارك' }, agent: asset('offices/office-agent-01.png'), color: '#8d6d39' },
    { id: 'o6', name: { en: 'Sakan Partners', ar: 'شركاء سكن' }, initials: 'SP', verified: true, phone: '+965 2224 3620', whatsapp: '+965 9940 7741', email: 'care@sakan.demo', address: { en: 'Jabriya, Block 1', ar: 'الجابرية، قطعة ١' }, agent: asset('offices/office-agent-01.png'), color: '#6b5d8d' }
  ];

  const propertySeeds = [
    ['Sea View Residence', 'سكن بإطلالة بحرية', 'Apartment', 'شقة', 'salmiya', 1250, 3, 3, 210, 'properties/property-apartment-salmiya-01.png'],
    ['Limestone Garden Villa', 'فيلا حجرية بحديقة', 'Villa', 'فيلا', 'mishref', 3200, 5, 6, 620, 'properties/property-villa-pool-01.png'],
    ['Executive Corner Office', 'مكتب تنفيذي زاوية', 'Office', 'مكتب', 'sharq', 1800, 0, 2, 285, 'properties/property-office-sharq-01.png'],
    ['Marina Light Apartment', 'شقة مارينا المضيئة', 'Apartment', 'شقة', 'salmiya', 980, 2, 2, 155, 'properties/property-apartment-interior-02.png'],
    ['Private Pool Retreat', 'فيلا بمسبح خاص', 'Villa', 'فيلا', 'jabriya', 2850, 4, 5, 510, 'properties/property-villa-courtyard-02.png'],
    ['Skyline Business Suite', 'جناح أعمال بإطلالة', 'Office', 'مكتب', 'kuwait-city', 2400, 0, 3, 360, 'properties/property-office-reception-02.png'],
    ['Gulf Road Penthouse', 'بنتهاوس شارع الخليج', 'Apartment', 'شقة', 'bneid', 2200, 4, 4, 340, 'properties/property-apartment-interior-02.png'],
    ['Modern Family Villa', 'فيلا عائلية حديثة', 'Villa', 'فيلا', 'hawally', 1950, 4, 4, 430, 'properties/property-villa-pool-01.png'],
    ['Al Soor Work Loft', 'لوفت أعمال السور', 'Office', 'مكتب', 'kuwait-city', 1350, 0, 2, 220, 'properties/property-office-sharq-01.png'],
    ['Coastal Two Bedroom', 'شقة ساحلية غرفتين', 'Apartment', 'شقة', 'shaab', 850, 2, 2, 145, 'properties/property-apartment-salmiya-01.png'],
    ['Courtyard Signature Villa', 'فيلا سيجنتشر بفناء', 'Villa', 'فيلا', 'mishref', 3600, 6, 7, 740, 'properties/property-villa-pool-01.png'],
    ['Glass Tower Headquarters', 'مقر في برج زجاجي', 'Office', 'مكتب', 'sharq', 4100, 0, 5, 680, 'properties/property-office-sharq-01.png']
  ];

  const properties = Array.from({ length: 24 }, (_, i) => {
    const s = propertySeeds[i % propertySeeds.length];
    const purpose = i % 5 === 0 ? 'Sale' : 'Rent';
    const multiplier = i >= 12 ? 1.14 : 1;
    return {
      id: `p${i + 1}`,
      title: { en: i >= 12 ? `${s[0]} Collection` : s[0], ar: i >= 12 ? `${s[1]} المميز` : s[1] },
      type: { en: s[2], ar: s[3] },
      purpose,
      locationId: s[4],
      price: Math.round(s[5] * multiplier), bedrooms: s[6], bathrooms: s[7], area: s[8],
      image: asset(s[9]), images: [asset(s[9]), asset('hero/hero-kuwait-skyline-desktop.png'), asset(s[9])],
      officeId: offices[i % offices.length].id,
      featured: i < 6 || i % 7 === 0, verified: i % 4 !== 3,
      status: 'active', views: 840 + i * 137, publishedAt: `2026-08-${String(28 - (i % 18)).padStart(2, '0')}`,
      amenities: ['Sea view', 'Parking', 'Security', s[2] === 'Villa' ? 'Private pool' : 'Gym'],
      description: {
        en: 'A refined Kuwait property designed for effortless contemporary living, with considered materials, generous natural light and direct access to the city’s best amenities.',
        ar: 'عقار راقٍ في الكويت مصمم لحياة عصرية مريحة، بمواد مختارة وإضاءة طبيعية سخية وقرب مباشر من أفضل الخدمات.'
      }
    };
  });

  const packages = [
    { id: 'starter', name: { en: 'Starter', ar: 'البداية' }, points: 500, price: 25, features: { en: ['Standard listings', 'Basic analytics', 'Email support'], ar: ['إعلانات عادية', 'تحليلات أساسية', 'دعم بالبريد'] } },
    { id: 'professional', name: { en: 'Professional', ar: 'الاحترافية' }, points: 1500, price: 60, featured: true, features: { en: ['Featured listings', 'Performance insights', 'Priority support'], ar: ['إعلانات مميزة', 'رؤى الأداء', 'دعم أولوية'] } },
    { id: 'premium', name: { en: 'Premium', ar: 'المميزة' }, points: 5000, price: 150, features: { en: ['Priority placement', 'Office spotlight', 'Dedicated support'], ar: ['ظهور بأولوية', 'إبراز المكتب', 'دعم مخصص'] } }
  ];

  const adTiers = [
    { id: 'standard', name: { en: 'Standard', ar: 'عادي' }, cost: 10, duration: 30 },
    { id: 'featured', name: { en: 'Featured', ar: 'مميز' }, cost: 30, duration: 45 },
    { id: 'priority', name: { en: 'Priority', ar: 'أولوية' }, cost: 50, duration: 60 }
  ];

  const users = Array.from({ length: 12 }, (_, i) => ({ id: `u${i + 1}`, name: ['Noura Al Salem', 'Fahad Al Ajmi', 'Laila Hassan', 'Omar Al Rashid'][i % 4], status: ['active', 'active', 'suspended', 'active'][i % 4], joined: `2026-0${(i % 7) + 1}-12` }));

  window.DAR_DATA = { locations, offices, properties, packages, adTiers, users };
})();
