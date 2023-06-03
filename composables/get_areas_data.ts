export default async function () {
    return await useSupabaseClient().from('areas').select('*');
}