export default async function() {
    const supabase = useSupabaseClient();
    const team = await supabase.from('Person').select('*').order('id', { ascending: true }).then(({data, error}) => {
        return error ? [] : data;
    });
    return team;
}