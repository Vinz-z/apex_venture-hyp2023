export default async function (name: String) {
    const supabase = useSupabaseClient();
    const supervised_projects = await supabase.from('projects').select('logo_path, name').eq('supervisor', name).then(({data, error}) => {
        return error ? [] : data;
    });
    return supervised_projects;
}