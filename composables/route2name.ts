export default function(route: string) {
    return route.replace(/-/g, ' ',)
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}