// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    valentineName: "Luna",
    pageTitle: "TOP SECRET QUESTION",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['./media/luna-car-1.png', './media/luna1.png', './media/selfie.PNG', 'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408323/image_z5uogf.webp', 
            'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408297/image_ssanmr.webp', 'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408295/image_ajqwsg.webp', 
            'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408293/image_jyxtn1.webp', 'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408290/image_gzwcyi.webp',
            'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408285/image_ogtnmn.webp', 'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408278/image_lzcac1.webp',
            'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408274/image_zwvy9c.webp', 'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408260/image_rgtmkh.webp',
            'https://res.cloudinary.com/dfn83id6f/image/upload/v1739408240/m1_so2gpw.jpg'
        ],
        hearts2: [ '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🫘', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "WOOOOOOO I'm THE LUCKIEST PERSON IN  THE WORLDDDDDD 🎉💝💖💝💓",
        message: "BIG HUG AND KISS TIME",
        emojis: "🤗💝💋"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#7692ff",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#440381",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#EC9192",     // Button color (should stand out against the background)
        buttonHover: "#dfbe99",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dfn83id6f/video/upload/%C3%81lvaro_D%C3%ADaz_-_Reina_Pepiada_Lyric_Video_-_YoAlvaroDiazVEVO_fou4we.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 