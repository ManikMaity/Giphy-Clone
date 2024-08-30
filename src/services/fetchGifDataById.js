async function fetchGifDataById(gf, id) {
    try {
        const result = await gf.gifs([id]);
        return result?.data[0] || result?.data;
      } 
      catch (error) {
        return [];
      }
}

export default fetchGifDataById;
