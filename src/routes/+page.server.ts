export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const file = data.get('avatar');
        console.log(file.size)
    }
};