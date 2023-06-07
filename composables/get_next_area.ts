export default async function(id: number, type: string) {
    const supabase = useSupabaseClient();

    const areas = await supabase.from('areas').select('*').eq('type', type).order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    const area_index = areas.findIndex((area) => area.id === id);
    const next_index = area_index !== areas.length - 1 ? area_index + 1 : 0;
    return areas[next_index];
}