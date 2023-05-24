export default function(supabase: any) {
    /*
    const supabase = ;
    const projects = await supabase.from('Project').select('*').then(({data, error}) => {
        return error ? [] : data;
    });
    const areas = await supabase.from('Area').select('*').then(({data, error}) => {
        return error ? [] : data;
    });
    */
    return {
        projects: [
            {
                name: 'Project 1',
                logo_path: '/images/logos/sample.png',
                areas: ['car', 'education'],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam. Donec auctor, nisl vitae aliquet ultricies, nisl nisl ultricies nisl, vitae aliquet nisl nisl vitae nisl.',
            },
            {
                name: 'Project 2',
                logo_path: '/images/logos/sample.png',
                areas: ['car', 'education'],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam. Donec auctor, nisl vitae aliquet ultricies, nisl nisl ultricies nisl, vitae aliquet nisl nisl vitae nisl.',
            },
            {
                name: 'Project 3',
                logo_path: '/images/logos/sample.png',
                areas: ['car', 'education'],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam. Donec auctor, nisl vitae aliquet ultricies, nisl nisl ultricies nisl, vitae aliquet nisl nisl vitae nisl.',
            },
        ],
        sectors: [
            {id: 10, name: 'Car', icon: '/icons/areas/car.png'},
            {id: 1, name: 'Education', icon: '/icons/areas/education.png'},
            {id: 2, name: 'Health', icon: '/icons/areas/healthcare.png'},
            {id: 3, name: 'Finance', icon: '/icons/areas/budget.png'},
            {id: 4, name: 'Tourism', icon: '/icons/areas/tourism.png'},
            {id: 5, name: 'E-Commerce', icon: '/icons/areas/e-commerce.png'},
        ],
        technologies: [
            {id: 6, name: 'Green', icon: '/icons/areas/planet-earth.png'},
            {id: 7, name: 'IoT', icon: '/icons/areas/iot.png'},
            {id: 8, name: 'Tourism', icon: '/icons/areas/tourism.png'},
            {id: 9, name: 'VR', icon: '/icons/areas/vr.png'},
        ]
    }
}