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
                areas: [1,2],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
            },
            {
                name: 'Project 2',
                logo_path: '/images/logos/sample.png',
                areas: [8,7],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
            },
            {
                name: 'Project 3',
                logo_path: '/images/logos/sample.png',
                areas: [1,5,9],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
            },
            {
                name: 'Project 4',
                logo_path: '/images/logos/sample.png',
                areas: [2,3,6],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
            },
            {
                name: 'Project 5',
                logo_path: '/images/logos/sample.png',
                areas: [1,9],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
            },
            {
                name: 'Project 6',
                logo_path: '/images/logos/sample.png',
                areas: [2,3,4],
                short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
            }
        ],
        areas: [
            {id: 1, name: 'Education', icon: '/icons/areas/education.png', type: 'sector'},
            {id: 2, name: 'Health', icon: '/icons/areas/healthcare.png', type: 'sector'},
            {id: 3, name: 'Finance', icon: '/icons/areas/budget.png', type: 'sector'},
            {id: 5, name: 'E-Commerce', icon: '/icons/areas/e-commerce.png', type: 'sector'},

            {id: 6, name: 'Green', icon: '/icons/areas/planet-earth.png', type: 'technology'},
            {id: 7, name: 'IoT', icon: '/icons/areas/iot.png', type: 'technology'},
            {id: 8, name: 'Tourism', icon: '/icons/areas/tourism.png', type: 'technology'},
            {id: 9, name: 'VR', icon: '/icons/areas/vr.png', type: 'technology'},
        ]
    }
}