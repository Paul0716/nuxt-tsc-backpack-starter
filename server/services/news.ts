import NewsRepository from '../repositories/news'
const newsRepository = new NewsRepository()

class NewsService {
    getNews(id: string) {
        const result = newsRepository.getNewsById(id)
        if(!result) throw new Error('Post not found.')
        
        return result
    }
}

export default NewsService