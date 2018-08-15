import news from './staticData/news'

class NewsRepository{
    getNewsById(id: string){
        return news.find(x=> x.id == id);
    }
}

export default NewsRepository