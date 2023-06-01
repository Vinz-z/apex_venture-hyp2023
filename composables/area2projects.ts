export default function (name: string) {
    // from the hostname lowercase and replace spaces with dashes
    const route = `/areas/${name.toLowerCase().replace(/ /g, '-')}/projects`;
    console.log(`Generated route for ${name}: ${route}`);
    return route;
}