const fetchTrendingGifs = async (gf, filter, limit = 20,) => {
    try {
        const result = await gf.trending({
            limit : limit,
            type : filter,
            rating : "g",
        });
        return result.data;
      } catch (error) {
        console.error(`trending`, error);
        return [];
      }
}

export default fetchTrendingGifs;