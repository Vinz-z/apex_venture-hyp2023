export default function(projects: string[]) {
    const projectList = useProjectList();
    useSupabaseClient().from('projects')
        .select('*, supervisor:persons(name), areas(*), stats:project_statistics(*), team:project_team(*)')
        .in('name', projects)
        .then(({ data }) => projectList.value = data);
}