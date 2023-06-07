export default async function(id: number) {
    const supabase = useSupabaseClient();
    const areas_of_project = await supabase.from('Project_Area_mapping').select('area_id').eq('project_id', id).then(({data, error}) => {
        return error ? [] : data;
    });
    const all_areas = await supabase.from('areas').select('*').order('id', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    const filtered_areas = all_areas.filter((area) => areas_of_project.some((area_of_project) => area_of_project.area_id === area.id));
    return filtered_areas;
}