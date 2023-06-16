export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return {
        name: body.name
    };
});
