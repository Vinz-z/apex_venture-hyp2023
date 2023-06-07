export default async function(id: number) {
    const supabase = useSupabaseClient();

    const projects = await supabase.from('projects').select('*').order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    const project_index = projects.findIndex((project) => project.id === id);
    const previous_index = project_index !== 0 ? project_index - 1 : projects.length - 1;
    return projects[previous_index];
}