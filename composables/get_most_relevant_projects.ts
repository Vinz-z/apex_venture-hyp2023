export default function() {
    return [
        {
            name: 'Project 1',
            logo_path: '/images/projects/logos/sample.png',
            areas: [1,2],
            short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
        },
        {
            name: 'Project 2',
            logo_path: '/images/projects/logos/sample.png',
            areas: [8,7],
            short_overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl ultricies aliquam.',
        }
    ]
}

/*export default async function() {
    const supabase = useSupabaseClient();
    const all_projects = await supabase.from('Project').select('*').order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    return all_projects.slice(0, 5);
}*/
