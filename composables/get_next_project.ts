export default async function(id: number) {
    const supabase = useSupabaseClient();

    const projects = await supabase.from('projects').select('*').order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    const project_index = projects.findIndex((project) => project.id === id);
    const next_index = project_index !== projects.length - 1 ? project_index + 1 : 0;
    return projects[next_index];
}