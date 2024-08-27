export default async function fetchSearchData (gf, text = "", sort = "recent", limit, filter, page){
    try {
        const result = await gf.search(text, { sort: sort, limit : limit, lang : "en", type : filter, offset: page});
        return result;
      } catch (error) {
        console.error(`search`, error);
        return [];
      }
}