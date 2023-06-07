export default async function() {
    const supabase = useSupabaseClient();
    const all_projects = await supabase.from('projects').select('*').order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    return all_projects.slice(0, 5);
}
