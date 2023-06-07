export default async function(project: String) {
    const supabase = useSupabaseClient();
    const projects = await supabase.from('projects').select('*').eq('name', project).then(({data, error}) => {
        return error ? [] : data;
    });
    return projects[0];
}