export default function (supabase: any) {
    return {
        sectors: [
            {
                iconUrl: '/icons/areas/healthcare.png',
                title: 'Health',
                caption: 'Invest in medical devices, telemedicine solutions, and software to improve healthcare outcomes and manage health data.'
            },
            {
                iconUrl: '/icons/areas/planet-earth.png',
                title: 'Green',
                caption: 'Invest in clean energy production, waste management, and sustainable mobility solutions to address environmental challenges.'
            },
            {
                iconUrl: '/icons/areas/education.png',
                title: 'Education',
                caption: 'Invest in online learning, professional training, and education management software to improve access to education.'
            },
            {
                iconUrl: '/icons/areas/e-commerce.png',
                title: 'Finance',
                caption: 'Invest in digital payment solutions, fintech, and trading platforms to promote efficient and secure financial transactions.'
            },
            {
                iconUrl: '/icons/areas/balls-sports.png',
                title: 'Sports',
                caption: 'Invest in technologies to improve athlete performance, manage the fan experience, and commercialize sports rights for a better sports industry.'
            }
        ],
        technologies: [
            {
                iconUrl: '/icons/areas/iot.png',
                title: 'IoT',
                caption: 'Invest in solutions for smart homes, Industry 4.0, and mobility that leverage the connection of physical objects to the internet for data collection and exchange.'
            },
            {
                iconUrl: '/icons/areas/analytics.png',
                title: 'Artificial Intelligence',
                caption: 'Invest in machine learning algorithms, robotics, and automation software to create intelligent machines capable of tasks that require human intelligence.'
            },
            {
                iconUrl: '/icons/areas/blockchain.png',
                title: 'Blockchain',
                caption: 'Invest in decentralized applications, cryptocurrencies, and supply chain management solutions using an immutable and secure digital record-keeping system.'
            },
            {
                iconUrl: '/icons/areas/vr.png',
                title: 'Augmented Reality',
                caption: 'Invest in applications that overlay digital elements onto the real world for gaming, education, and tourism.'
            }
        ]
    }
}