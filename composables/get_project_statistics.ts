export default async function(project_id: number) {
    const supabase = useSupabaseClient();
    const project_statistics = await supabase.from('project_statistics').select('caption, value').eq('project_id', project_id).then(({data, error}) => {
        return error ? [] : data;
    });
    return project_statistics;
}