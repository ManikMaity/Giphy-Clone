export default async function fetchCatagoryData(gf, category) {
    try {
        const result = await gf.gifs(category, category);
        return result;
      } catch (error) {
        console.error(`gifByCategory`, error);
        return { data: [], pagination: { total_count: 0 } };
    }
}


