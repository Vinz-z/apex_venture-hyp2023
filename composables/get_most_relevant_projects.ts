export default async function() {
    return await useSupabaseClient().from('projects')
        .select('name, logo')
        .order('name', { ascending: true })
        .limit(5)
        .then(( {data, error} ) => {
            if (error) throw createError({ statusCode: 404, statusMessage: "Can't find relevant projects.", message: error.message})
            return data;
        });
}
