document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            year: "1941",
            title: "Ikkinchi Jahon Urushi boshlanishi",
            description: "1941-yil 22-iyunda Germaniya qo'shinlari SSSRga hujum qildi. Bu 'Barbarossa operatsiyasi' deb nomlangan harbiy rejaning boshlanishi edi. Hujum 4 yil davom etgan ulkan urushga olib keldi. Bu urushda 26 milliondan ortiq sovet fuqarosi halok bo'ldi.",
            image: "https://images.unsplash.com/photo-15702979942-7d1a7a6a1c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readMore: "#"
        },
        {
            year: "1969",
            title: "Apollo 11 Oyga qo'ndi",
            description: "1969-yil 20-iyulda Neil Armstrong va Buzz Aldrin Oy sirtiga qo'ndi. Armstrong 'Bu kichkina qadam odam uchun, lekin insoniyat uchun ulkan sakrash' degan mashhur gapni aytdi. Bu missiya AQSh va SSSR o'rtasidagi kosmik poygada muhim g'alaba bo'ldi.",
            image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readMore: "#"
        },
        {
            year: "1991",
            title: "O'zbekiston mustaqilligini e'lon qildi",
            description: "1991-yil 31-avgustda O'zbekiston Sovet Ittifoqidan mustaqilligini e'lon qildi. 1-sentabr Mustaqillik kuni sifatida nishonlanadi. Islom Karimov respublikaning birinchi prezidenti etib saylandi. Bu voqea Markaziy Osiyo tarixida yangi davrni boshlab berdi.",
            image: "https://images.unsplash.com/photo-1580130732478-4d0392a9eb86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readMore: "#"
        },
        {
            year: "2001",
            title: "Wikipedia ishga tushirildi",
            description: "2001-yil 15-yanvarda Jimmy Wales va Larry Sanger tomonidan Wikipedia ishga tushirildi. Bu erkin mazmunli, hamkorlikda yoziladigan onlayn ensiklopediya bo'lib, tez orada dunyodagi eng yirik bilimlar manbasiga aylandi. Bugungi kunda Wikipedia 300 dan ortiq tillarda mavjud.",
            image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readMore: "#"
        },
        {
            year: "2010",
            title: "iPad birinchi marta sotuvga chiqarildi",
            description: "2010-yil 3-aprelda Apple kompaniyasi birinchi avlod iPad planshetini sotuvga chiqardi. Bu mahsulot planshetlar bozorida inqilob yasadi va mobil texnologiyalarning rivojlanishida yangi bosqichni boshlab berdi. Birinchi haftasida 300 mingdan ortiq iPad sotildi.",
            image: "https://images.unsplash.com/photo-1544244015-0e3aabf4fad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readMore: "#"
        }
    ];

    const container = document.getElementById('events-container');

    events.forEach(event => {
        const eventElement = document.createElement('article');
        eventElement.className = 'event-card';

        eventElement.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <div class="event-content">
                <span class="event-year">${event.year}</span>
                <h2 class="event-title">${event.title}</h2>
                <p class="event-description">${event.description}</p>
                <a href="${event.readMore}" class="read-more">Batafsil o'qish <i class="fas fa-arrow-right"></i></a>
            </div>
        `;

        container.appendChild(eventElement);
    });
});