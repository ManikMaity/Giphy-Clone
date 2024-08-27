export default async function fetchSearchData(gf, text = "", sort = "recent", limit, filter, offset) {
  try {
      const result = await gf.search(text, { 
          sort: sort, 
          limit: limit, 
          lang: "en", 
          type: filter, 
          offset: offset 
      });
      return result;
  } catch (error) {
      console.error("Error during search:", error);
      return { data: [], pagination: { total_count: 0 } };
  }
}
