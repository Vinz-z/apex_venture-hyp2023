export default async function(person: String) {
    const supabase = useSupabaseClient();
    const { data, error } = await supabase.from('Person').select('*').eq('name', person).single();
    if (error) throw createError({ statusCode: 404, statusMessage: `${person} is not a team member` });
    return data;
}