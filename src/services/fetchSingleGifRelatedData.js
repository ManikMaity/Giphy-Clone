async function fetchSingleGifRelatedData(gf, id) {
    try {
        const result = await gf.related(`${id}`);
        return result;
      } catch (error) {
        console.error(`related`, error);
        return [];
      }
}

export default fetchSingleGifRelatedData
