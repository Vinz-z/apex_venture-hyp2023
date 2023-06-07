export default async function () {
    const supabase = useSupabaseClient();
    const all_areas = await supabase.from('areas').select('*').order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    return all_areas;
}