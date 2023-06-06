export default function(name: String) {
    const route = `/areas/${name.toLowerCase().replace(/ /g, '-')}`;
    return route;
}