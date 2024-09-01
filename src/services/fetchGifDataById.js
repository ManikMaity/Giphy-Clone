async function fetchGifDataById(gf, id) {
    try {
        const result = await gf.gifs([id]);
        return result?.data[0];
      } 
      catch (error) {
        console.log(error);
        return [];
      }
}

export default fetchGifDataById;
