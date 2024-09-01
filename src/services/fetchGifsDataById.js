export async function fetchGifsDataById(gf, favId) {
    try {
        const result = await gf.gifs(favId);
        return result?.data;
      } 
    catch (error) {
        console.error(`gifs`, error);
        return [];
      }
}

export default fetchGifsDataById
