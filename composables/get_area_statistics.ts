export default async function(area_id: number) {
    const supabase = useSupabaseClient();
    const area_statistics = await supabase.from('area_statistics').select('caption, value').eq('area_id', area_id).then(({data, error}) => {
        return error ? [] : data;
    });
    return area_statistics;
}