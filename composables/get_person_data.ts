export default async function(person: String) {
    const supabase = useSupabaseClient();
    const team = await supabase.from('Person').select('*').eq('name', person).then(({data, error}) => {
        return error ? [] : data;
    });
    return team[0];
}