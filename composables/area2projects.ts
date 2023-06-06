export default function (name: string) {
    const route = `/areas/${name.toLowerCase().replace(/ /g, '-')}/projects`;
    return route;
}