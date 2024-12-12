export const load = async ({ fetch }) => {
    const response = await fetch('https://cssday.nl/data.json');
    const data = await response.json();

    console.log(data);

    return {
        data
    };
};