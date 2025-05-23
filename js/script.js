document.addEventListener('DOMContentLoaded', function () {
    const events = [{
        year: "1941",
        title: "Ikkinchi Jahon Urushi boshlanishi",
        description: "1941-yil 22-iyunda Germaniya qo'shinlari SSSRga hujum qildi. Bu 'Barbarossa operatsiyasi' deb nomlangan harbiy rejaning boshlanishi edi. Hujum 4 yil davom etgan ulkan urushga olib keldi. Bu urushda 26 milliondan ortiq sovet fuqarosi halok bo'ldi.",
        image: "images/920__95_107640937.jpg",
        readMore: "https://uz.wikipedia.org/wiki/Ikkinchi_jahon_urushi",
        detailedContent: {
            casualties: "26 milliondan ortiq sovet fuqarosi halok bo'ldi",
            commanders: "Germaniya: Adolf Hitler, Sovet: Joseph Stalin",
            significance: "20-asrning eng dahshatli urushi"
        }
    }, {
        year: "1441",
        title: "Alisher Navoiy tavalludi",
        description: "1441-yil 9-fevralda Hirot shahrida dunyoga kelgan. To'liq ismi - Nizomiddin Mir Alisher. Navoiy o'z davrining eng buyuk allomalaridan biri, turkiy adabiyotning klassigi hisoblanadi.",
        image: "images/936024c2e250dbc8ab0e38048bd6cc29.jpg",
        readMore: "https://uz.wikipedia.org/wiki/Alisher_Navoiy",
        detailedContent: {
            asarlari: "Xamsa, Muhokamat al-lugʻatayn, Majolis un-nafois",
            davri: "Temuriylar davri",
            vafoti: "1501-yil 3-yanvar",
            muhimligi: "O'zbek adabiy tilining asoschisi"
        }
    }, {
        year: "1969",
        title: "Apollo 11 Oyga qo'ndi",
        description: "1969-yil 20-iyulda Neil Armstrong va Buzz Aldrin Oy sirtiga qo'ndi. Armstrong 'Bu kichkina qadam odam uchun, lekin insoniyat uchun ulkan sakrash' degan mashhur gapni aytdi.",
        image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        readMore: "https://uz.wikipedia.org/wiki/Apollo_11",
        detailedContent: {
            duration: "8 kun, 3 soat, 18 minut",
            crew: "Neil Armstrong, Buzz Aldrin, Michael Collins",
            significance: "Insoniyatning Oyga birinchi marta qo'nishi"
        }
    }, {
        year: "1991",
        title: "O'zbekiston mustaqilligini e'lon qildi",
        description: "1991-yil 31-avgustda O'zbekiston Sovet Ittifoqidan mustaqilligini e'lon qildi. 1-sentabr Mustaqillik kuni sifatida nishonlanadi.",
        image: "images/Ozbekiston.jpg",
        readMore: "https://uz.wikipedia.org/wiki/O%60zbekiston_mustaqilligi",
        detailedContent: {
            president: "Islom Karimov birinchi prezident etib saylandi",
            significance: "Markaziy Osiyoda yangi davr boshlanishi"
        }
    }, {
        year: "2001",
        title: "Wikipedia ishga tushirildi",
        description: "2001-yil 15-yanvarda Jimmy Wales va Larry Sanger tomonidan Wikipedia ishga tushirildi. Bugungi kunda 300 dan ortiq tillarda mavjud.",
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        readMore: "https://uz.wikipedia.org/wiki/Wikipedia",
        detailedContent: {
            articles: "60 milliondan ortiq maqola",
            languages: "300+ tillarda",
            significance: "Dunyodagi eng yirik bilimlar manbasi"
        }
    }, {
        year: "2010",
        title: "iPad birinchi marta sotuvga chiqarildi",
        description: "2010-yil 3-aprelda Apple kompaniyasi birinchi avlod iPad planshetini sotuvga chiqardi. Birinchi haftasida 300 mingdan ortiq iPad sotildi.",
        image: "https://images.unsplash.com/photo-1544244015-0e3aabf4fad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        readMore: "https://uz.wikipedia.org/wiki/IPad",
        detailedContent: {
            price: "$499 dan boshlangan narx", significance: "Planshetlar bozorida inqilob"
        }
    }];

    const container = document.getElementById('events-container');

    events.forEach(event => {
        const eventElement = document.createElement('article');
        eventElement.className = 'event-card';

        eventElement.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" loading="lazy">
            </div>
            <div class="event-content">
                <span class="event-year">${event.year}</span>
                <h2 class="event-title">${event.title}</h2>
                <p class="event-description">${event.description}</p>
                <button class="read-more-btn" data-event='${JSON.stringify(event).replace(/'/g, "\\'")}'>
                    Batafsil o'qish <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;

        container.appendChild(eventElement);
    });

    // Add event listeners to all buttons
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const eventData = JSON.parse(this.getAttribute('data-event'));
            showEventDetails(eventData);
        });
    });

    function showEventDetails(event) {
        // Create modal HTML
        const modalHTML = `
            <div class="event-modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${event.title} (${event.year})</h2>
                    <img src="${event.image}" alt="${event.title}">
                    <p>${event.description}</p>
                    
                    ${event.detailedContent ? `
                    <div class="detailed-info">
                        <h3>Qo'shimcha ma'lumotlar:</h3>
                        <ul>
                            ${Object.entries(event.detailedContent).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    <a href="${event.readMore}" target="_blank" class="external-link">
                        Wikipedia sahifasiga o'tish <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add close functionality
        document.querySelector('.close-modal').addEventListener('click', function () {
            document.querySelector('.event-modal').remove();
        });

        // Close when clicking outside content
        document.querySelector('.event-modal').addEventListener('click', function (e) {
            if (e.target === this) {
                this.remove();
            }
        });
    }
});