export default async function(id: number, type: string) {
    const supabase = useSupabaseClient();

    const areas = await supabase.from('areas').select('*').eq('type', type).order('name', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    const area_index = areas.findIndex((area) => area.id === id);
    const previous_index = area_index !== 0 ? area_index - 1 : areas.length - 1;
    return areas[previous_index];
}