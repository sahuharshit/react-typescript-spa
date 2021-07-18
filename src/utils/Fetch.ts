export async function getNewsArticle(
  page = 1,
  search?: string
): Promise<NewsArticle[]> {
  let compiled: NewsArticle[] = Array.from({ length: 10 }, (_, offset) => {
    const article: NewsArticle = {
      id: offset,
      thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
      title: `Title ${offset + 1}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicingelit",
    };
    return article;
  });
  if (search) {
    compiled = compiled.filter((each) => each.title.includes(search));
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
