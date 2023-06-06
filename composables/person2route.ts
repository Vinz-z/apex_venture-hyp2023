export default function(name: string) {
    const route = `/team/${name.toLowerCase().replace(/ /g, '-')}`;
    return route;
}