const fetchGifCategories = async (gf) => {
    try {
        const result = await gf.categories();
        return result.data;

      } catch (error) {
        console.log(error)
        return [];
      }
}

export default fetchGifCategories;