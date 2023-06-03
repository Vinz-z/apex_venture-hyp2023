import { createClient } from '@supabase/supabase-js'

export default async function (id: number) {
    const supabase = createClient('https://jeftesraatsfispscczj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplZnRlc3JhYXRzZmlzcHNjY3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NDc1MTIsImV4cCI6MjAwMDMyMzUxMn0.UyYIaAbALZgg_HR0oYNPiehWgMcTRreiRkWfXjgoGio')
    const supervised_id = await supabase.from('Person_Project_mapping').select('*').eq('Person_id', id).then(({data, error}) => {
        console.log(data);
        return error ? [] : data;
    });
    const supervised_projects = await supabase.from('Project').select('logo_path, name').in('id', supervised_id.map((item: any) => item.Project_id)).then(({data, error}) => {
        console.log(data);
        return error ? [] : data;
    });
    return supervised_projects;
}