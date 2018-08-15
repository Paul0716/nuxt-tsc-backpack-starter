import NewsRepository from '../repositories/news'
const newsRepository = new NewsRepository()

class NewsService{
    getNews(id: string) {
        return newsRepository.getNewsById(id);
    }
}

export default NewsService