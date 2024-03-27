import { client } from '@shineiichijo/anime-news-network-scraper';
(async () => {
  const data = await client.getNewsFeeds();
  console.log(data);
})();
