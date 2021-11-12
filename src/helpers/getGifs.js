export const getGifs = async( category ) => {
    const APIKey = "o2jFEQeA5I0nwBWGLDuFJf2uKY2Zi1m8";
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=15&api_key=${APIKey}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}