export default async function() {
    const projectList = useProjectList();

    if (!projectList.value) {
        const supabase = useSupabaseClient();
        const all_projects = await supabase.from('projects')
            .select('*, supervisor:persons(name), areas(*), stats:project_statistics(*), team:project_team(*)')
            .then(( {data, error} ) => {
                if (error) throw createError({ statusCode: 404, statusMessage: `Can't find any project :(` })
                return data;
            });
        projectList.value = all_projects;
    }
    
    return projectList.value;
}