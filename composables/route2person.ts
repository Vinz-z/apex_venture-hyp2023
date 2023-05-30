export default function(route: string) {
    // from the hostname lowercase and replace spaces with dashes
    const name = `${route.replace(/-/g, ' ',)
                         .split(' ')
                         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                         .join(' ')}`;
    return name;
}