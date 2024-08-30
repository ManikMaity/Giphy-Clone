export default async function fetchCatagoryData(gf, category, subCategory) {
    try {
        const result = await gf.gifs(category, subCategory);
        return result;
      } catch (error) {
        console.error(`gifByCategory`, error);
        return { data: [], pagination: { total_count: 0 } };
    }
}


