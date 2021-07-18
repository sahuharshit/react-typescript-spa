export async function getNewsArticle(
  page = 1,
  search?: string
): Promise<NewsArticle[]> {
  let compiled: NewsArticle[] = Array.from({ length: 100 }, (_, offset) => {
    const article: NewsArticle = {
      id: offset,
      thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
      title: `Title ${offset}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicingelit",
    };
    return article;
  });
  if (search) {
    compiled = compiled.filter((each) =>
      each.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(compiled);
  }
  compiled = compiled.slice(page * 10, page * 10 + 10);
  return compiled;
}

export type NewsArticle = {
  thumbnail: string;
  title: string;
  description: string;
  id: number;
};
