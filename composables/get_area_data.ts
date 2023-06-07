export default async function(area: String) {
    const supabase = useSupabaseClient();
    const areas = await supabase.from('areas').select('*').eq('name', area).then(({data, error}) => {
        return error ? [] : data;
    });
    return areas[0];
}