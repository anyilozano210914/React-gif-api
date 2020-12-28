

export const getGifs = async( category ) => {
    const apiKey = 'DoYzQVEUIu5PUG1RBM5X9ho5qmUsFao8'
    const url = `https://api.giphy.com/v1/gifs/search?=q=${ encodeURI(category) }&limit=10&api_key=${ apiKey }`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = await data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}
