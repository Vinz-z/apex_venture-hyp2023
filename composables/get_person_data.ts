import { createClient } from '@supabase/supabase-js'

export default async function(person: String) {
    const supabase = createClient('https://jeftesraatsfispscczj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplZnRlc3JhYXRzZmlzcHNjY3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NDc1MTIsImV4cCI6MjAwMDMyMzUxMn0.UyYIaAbALZgg_HR0oYNPiehWgMcTRreiRkWfXjgoGio')
    const team = await supabase.from('Person').select('*').eq('name', person).then(({data, error}) => {
        return error ? [] : data;
    });
    return team[0];
}