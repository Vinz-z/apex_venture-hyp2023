export default function(name: string) {
    // from the hostname lowercase and replace spaces with dashes
    const route = `/team/${name.toLowerCase().replace(/ /g, '-')}`;
    console.log(`Generated route for ${name}: ${route}`);
    return route;
}