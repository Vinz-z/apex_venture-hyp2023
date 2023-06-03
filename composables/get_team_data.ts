export default function(supabase: any) {
    /*
    const supabase = ;
    const team = await supabase.from('Person').select('*').then(({data, error}) => {
        return error ? [] : data;
    });
    */
    return {
        team: [
            {
                id: 2,
                name: 'Taddeo Curreri',
                image: "/images/team/Luigi-Capello.png",
                role: "Role",
                address: "Address",
                phone: "+39 012 34 56 789",
                email: "taddeo-curreri@apexventure.com",
                birthday: "01/01/1970",
                nationality: "Italian",
                longcv: "Long CV",
                shortcv: "A professional with a strong background in investments and acquisitions, responsible for overseeing the operational management and implementation of the investment strategy."
            },
        ],
    }
}