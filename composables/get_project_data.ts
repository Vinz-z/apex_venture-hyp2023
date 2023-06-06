export default function(project_name: String) {
    return {
        name: project_name,
        logo: "/images/projects/logos/sample.png",
        banner: "/images/banners/sports.png",
        office: "London",
        supervisor: "Taddeo Curreri",
        short_overview: "A sports app",
        overview_text: "Airbnb is a global hospitality platform, established in 2008, that connects travelers with local hosts, offering unique accommodations worldwide. By facilitating the rental of homes, apartments, and rooms, Airbnb fosters community and cultural exchange. Through its user-friendly marketplace, millions of people have unlocked the potential of their properties, providing personalized and immersive travel experiences. With a focus on inclusivity, Airbnb continues to reshape the industry, promoting meaningful connections between hosts and guests around the world.",
        impact_text: "Airbnb has revolutionized the hospitality sector by democratizing travel. By creating a peer-to-peer marketplace for accommodations, it empowers individuals to become hosts, unlocking the untapped potential of their properties. Travelers benefit from a diverse range of unique and authentic stays, fostering cultural immersion and meaningful connections. This innovative approach has transformed the sector, promoting inclusivity and redefining the way people experience travel.",
        team: {
            'Software Engineers': [
                'Martina Marchetti',
                'Emma Rousseau',
                'David Muller'
            ],
            'Marketing Specialist': ['Gabriel Lefevre'],
            'Sales Representative': ['Ethan Murphy'],
            'Product Manager': ['Oliver Parker'],
            'Graphic Designer': [
                'Aanya Patel',
                'Ariun Kapoor',
                'Riya Sharma'
            ],
            'Customer Support': ['Liam Davis'],
        },
        team_image: "/images/projects/teams/sample.jpg",
        statistics: [
            { key: 'Customer Satisfaction Rating', value: '95%' },
            { key: 'New Products Launched', value: '3' },
            { key: 'Year-Over-Year Revenue Growth', value: '25%' },
            { key: 'Employees', value: '60+' },
        ],
        areas: [
            { id: 0, name: 'E-Commerce', icon: '/icons/areas/e-commerce.png' },
            { id: 0, name: 'Travelling', icon: '/icons/areas/tourism.png' }
        ],
        previuous: {
            icon: "/icons/previous.png",
            name: "Previous Project",
            banner: "/images/banners/sample.png",
        },
        next: {
            icon: "/icons/next.png",
            name: "Next Project",
            banner: "/images/banners/sample.png",
        },
    }
}

/*export default async function(project: String) {
    const supabase = useSupabaseClient();
    const projects = await supabase.from('Project').select('*').eq('name', project).then(({data, error}) => {
        return error ? [] : data;
    });
    return projects[0];
}*/