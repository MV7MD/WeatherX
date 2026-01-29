const translations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_climate: "Climate Change", nav_causes: "Causes", nav_effects: "Effects", nav_weather: "Weather", nav_contact: "Contact",
        hero_title: 'Protect Our <span class="highlight">Future</span>',
        hero_desc: "Join the global movement to combat climate change and secure a sustainable planet.",
        btn_learn: "Learn More",
        about_title: "About Us",
        about_desc: "EcoWorld is a non-profit initiative dedicated to raising awareness about the urgent need for climate action. We believe that through education and technology, we can inspire a global community.",
        stat_countries: "Countries", stat_members: "Members",
        climate_title: "What is Climate Change?",
        climate_desc: "Climate change refers to long-term shifts in temperatures and weather patterns. Since the 1800s, human activities have been the main driver.",
        causes_title: "Causes of Climate Change",
        cause_1_title: "Fossil Fuels", cause_1_desc: "Burning coal, oil and gas generates greenhouse gases that act like a blanket wrapped around the Earth.",
        cause_2_title: "Deforestation", cause_2_desc: "Cutting down forests creates emissions and reduces the planet's capability to absorb CO2.",
        cause_3_title: "Industrial Activity", cause_3_desc: "Manufacturing and industry produce emissions, mostly from burning fossil fuels to produce energy.",
        effects_title: "Effects on the Planet",
        effect_1_title: "Hotter Temperatures", effect_1_desc: "Nearly all land areas are seeing more hot days and heat waves.",
        effect_2_title: "Rising Ocean", effect_2_desc: "The ocean soaks up most of the heat from global warming, melting ice sheets and raising sea levels.",
        effect_3_title: "Severe Storms", effect_3_desc: "Changes in temperature cause changes in rainfall. This results in more severe and frequent storms.",
        weather_title: "Global Weather", search_placeholder: "Enter city (e.g., London, Dubai)",
        btn_switch_unit: "Switch to °F", contact_title: "Contact Us", btn_send: "Send Message"
    },
    ar: {
        nav_home: "الرئيسية", nav_about: "من نحن", nav_climate: "تغير المناخ", nav_causes: "الأسباب", nav_effects: "الآثار", nav_weather: "الطقس", nav_contact: "تواصل معنا",
        hero_title: 'احمِ <span class="highlight">مستقبلنا</span>',
        hero_desc: "انضم للحركة العالمية لمكافحة تغير المناخ وتأمين كوكب مستدام.",
        btn_learn: "اعرف المزيد",
        about_title: "من نحن",
        about_desc: "EcoWorld هي مبادرة غير ربحية تهدف لرفع الوعي حول الحاجة الملحة للعمل المناخي. نؤمن بأن التكنولوجيا هي مفتاح المستقبل المستدام.",
        stat_countries: "دولة", stat_members: "عضو",
        climate_title: "ما هو تغير المناخ؟",
        climate_desc: "يشير تغير المناخ إلى التحولات طويلة الأجل في درجات الحرارة. منذ القرن التاسع عشر، كانت الأنشطة البشرية هي المحرك الرئيسي.",
        causes_title: "أسباب تغير المناخ",
        cause_1_title: "الوقود الأحفوري", cause_1_desc: "حرق الفحم والنفط يولد غازات دفيئة تعمل كغطاء حول الأرض.",
        cause_2_title: "إزالة الغابات", cause_2_desc: "قطع الغابات يقلل من قدرة الكوكب على امتصاص ثاني أكسيد الكربون.",
        cause_3_title: "النشاط الصناعي", cause_3_desc: "التصنيع ينتج انبعاثات ناتجة عن حرق الوقود للطاقة.",
        effects_title: "الآثار على الكوكب",
        effect_1_title: "ارتفاع الحرارة", effect_1_desc: "تشهد معظم مناطق اليابسة موجات حر متزايدة.",
        effect_2_title: "ارتفاع المحيطات", effect_2_desc: "تمتص المحيطات الحرارة مما يذيب الجليد ويرفع منسوب البحر.",
        effect_3_title: "عواصف شديدة", effect_3_desc: "التغير في الحرارة يسبب تغيرات في الأمطار وعواصف مدمرة.",
        weather_title: "الطقس العالمي", search_placeholder: "ادخل اسم المدينة (دبي، القاهرة...)",
        btn_switch_unit: "تحويل لـ °F", contact_title: "تواصل معنا", btn_send: "إرسال الرسالة"
    }
};


const langBtn = document.getElementById('lang-toggle');
let currentLang = 'en';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    langBtn.textContent = currentLang === 'en' ? 'Ar' : 'En';
    
    if (currentLang === 'ar') document.body.classList.add('rtl');
    else document.body.classList.remove('rtl');

    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    
    document.getElementById('city-input').placeholder = translations[currentLang].search_placeholder;
    updateUnit(); 
});


const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        
        sections.forEach(s => s.classList.remove('active-section'));
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active-section');

        
        navLinksContainer.classList.remove('active');
    });
});


const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
    themeBtn.querySelector('i').classList.toggle('fa-sun');
    themeBtn.querySelector('i').classList.toggle('fa-moon');
});


const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const tempEl = document.getElementById('temperature');
const cityEl = document.getElementById('city-name');
let tempC = 0;
let isC = true;


fetchWeather(30.04, 31.23, "Cairo, Egypt");

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    if (!city) return;
    
    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        const geoData = await geoRes.json();
        
        if (!geoData.results) { alert("City not found!"); return; }

        const { latitude, longitude, name, country } = geoData.results[0];
        fetchWeather(latitude, longitude, `${name}, ${country}`);
    } catch (error) { console.error(error); alert("Error finding city."); }
});

async function fetchWeather(lat, long, label) {
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`);
        const data = await res.json();
        
        tempC = data.current_weather.temperature;
        cityEl.textContent = label;
        document.getElementById('wind-speed').textContent = data.current_weather.windspeed;
        document.getElementById('description').textContent = "Live Data";
        updateUnit();
    } catch (err) { console.error("Weather Error", err); }
}

function updateUnit() {
    const unitEl = document.getElementById('unit');
    const toggleBtn = document.getElementById('unit-toggle');
    
    if (isC) {
        tempEl.textContent = tempC;
        unitEl.textContent = "°C";
        toggleBtn.textContent = currentLang === 'en' ? "Switch to °F" : "تحويل لـ °F";
    } else {
        tempEl.textContent = ((tempC * 9/5) + 32).toFixed(1);
        unitEl.textContent = "°F";
        toggleBtn.textContent = currentLang === 'en' ? "Switch to °C" : "تحويل لـ °C";
    }
}

document.getElementById('unit-toggle').addEventListener('click', () => { isC = !isC; updateUnit(); });