export default async function (id: number) {
    const supabase = useSupabaseClient();
    const supervised_id = await supabase.from('Person_Project_mapping').select('*').eq('Person_id', id).then(({data, error}) => {
        return error ? [] : data;
    });
    const supervised_projects = await supabase.from('Project').select('logo_path, name').in('id', supervised_id.map((item: any) => item.Project_id)).then(({data, error}) => {
        return error ? [] : data;
    });
    return supervised_projects;
}