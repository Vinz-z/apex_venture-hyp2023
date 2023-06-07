export default async function(area: String) {
    const supabase = useSupabaseClient();

    const area_id = await supabase.from('areas').select('id').eq('name', area).then(({data, error}) => {
        return error ? [] : data[0].id;
    });
    const projects_of_area = await supabase.from('project_areas_mapping').select('project_id').eq('area_id', area_id).then(({data, error}) => {
        return error ? [] : data;
    });
    const all_projects = await supabase.from('projects').select('*').order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    const filtered_projects = all_projects.filter((project) => projects_of_area.some((project_of_area) => project_of_area.project_id === project.id));
    return filtered_projects;
}