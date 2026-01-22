// קובץ הנתונים המלא - data.js
const parashotData = {
    // --- ספר בראשית ---
    "bereshit": {
        title: "סוד ההתחלות החדשות",
        subtitle: "כיצד המילים הראשונות של היקום מעניקות לנו כוח לברוא את עצמנו מחדש בכל יום",
        category: "ספר בראשית",
        image: "https://images.unsplash.com/photo-1506318136072-a12ac3df3317?q=80&w=2000&auto=format&fit=crop",
        author: "הרב יונתן שלום",
        date: "שבת בראשית",
        content: [
            { type: "p", text: "בראשית ברא אלוקים את השמים ואת הארץ. התורה אינה פותחת במצוות או בחוקים, אלא בסיפור היצירה." },
            { type: "quote", text: "״כל עוד הנר דולק, אפשר עוד לתקן - וכל עוד העולם מתחדש, אפשר עוד להתחיל.״" },
            { type: "h3", text: "בין חושך לאור" },
            { type: "p", text: "והארץ הייתה תוהו ובוהו. החושך הוא לא היעדר של אור, אלא ההזדמנות להדליק אותו." }
        ]
    },
    "noach": { title: "פרשת נח", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת נח..." }] },
    "lech-lecha": { title: "פרשת לך לך", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת לך לך..." }] },
    "vayeira": { title: "פרשת וירא", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת וירא..." }] },
    "chayei-sarah": { title: "פרשת חיי שרה", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת חיי שרה..." }] },
    "toledot": { title: "פרשת תולדות", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת תולדות..." }] },
    "vayetze": { title: "פרשת ויצא", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת ויצא..." }] },
    "vayishlach": { title: "פרשת וישלח", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת וישלח..." }] },
    "vayeishev": { title: "פרשת וישב", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת וישב..." }] },
    "mikeitz": { title: "פרשת מקץ", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת מקץ..." }] },
    "vayigash": { title: "פרשת ויגש", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת ויגש..." }] },
    "vayechi": { title: "פרשת ויחי", category: "ספר בראשית", content: [{ type: "p", text: "כאן יופיע המאמר על פרשת ויחי..." }] },

    // --- ספר שמות ---
    "shemot": { title: "פרשת שמות", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "vaera": { title: "פרשת וארא", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "bo": { title: "פרשת בא", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "beshalach": { title: "פרשת בשלח", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "yitro": { title: "פרשת יתרו", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "mishpatim": { title: "פרשת משפטים", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "terumah": { title: "פרשת תרומה", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "tetzaveh": { title: "פרשת תצוה", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "ki-tisa": { title: "פרשת כי תשא", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "vayakhel": { title: "פרשת ויקהל", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },
    "pekudei": { title: "פרשת פקודי", category: "ספר שמות", content: [{ type: "p", text: "בקרוב..." }] },

    // --- ספר ויקרא ---
    "vayikra": { title: "פרשת ויקרא", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "tzav": { title: "פרשת צו", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "shmini": { title: "פרשת שמיני", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "tazria": { title: "פרשת תזריע", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "metzora": { title: "פרשת מצורע", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "acharei-mot": { title: "פרשת אחרי מות", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "kedoshim": { title: "פרשת קדושים", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "emor": { title: "פרשת אמור", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "behar": { title: "פרשת בהר", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },
    "bechukotai": { title: "פרשת בחוקותי", category: "ספר ויקרא", content: [{ type: "p", text: "בקרוב..." }] },

    // --- ספר במדבר ---
    "bamidbar": { title: "פרשת במדבר", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "naso": { title: "פרשת נשא", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "behaalotecha": { title: "פרשת בהעלותך", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "shlach": { title: "פרשת שלח", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "korach": { title: "פרשת קרח", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "chukat": { title: "פרשת חוקת", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "balak": { title: "פרשת בלק", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "pinchas": { title: "פרשת פינחס", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "matot": { title: "פרשת מטות", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },
    "masei": { title: "פרשת מסעי", category: "ספר במדבר", content: [{ type: "p", text: "בקרוב..." }] },

    // --- ספר דברים ---
    "devarim": { title: "פרשת דברים", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "vaetchanan": { title: "פרשת ואתחנן", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "eikev": { title: "פרשת עקב", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "reeh": { title: "פרשת ראה", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "shoftim": { title: "פרשת שופטים", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "ki-teitzei": { title: "פרשת כי תצא", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "ki-tavo": { title: "פרשת כי תבוא", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "nitzavim": { title: "פרשת נצבים", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "vayeilech": { title: "פרשת וילך", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "haazinu": { title: "פרשת האזינו", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] },
    "vezot-haberacha": { title: "וזאת הברכה", category: "ספר דברים", content: [{ type: "p", text: "בקרוב..." }] }
};
                
