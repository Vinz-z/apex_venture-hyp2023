export default function(name: String) {
    // from the hostname lowercase and replace spaces with dashes
    const route = `/areas/${name.toLowerCase().replace(/ /g, '-')}`;
    console.log(`Generated route for ${name}: ${route}`);
    return route;
}