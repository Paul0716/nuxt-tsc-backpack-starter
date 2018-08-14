<template>
    <div class="container-fluid">
        <div class="row">
            <div class="feature-image"></div>
        </div>
        <div class="row">
            <div class="article">
                <div class="article-title">{{news.title}}</div>
                <span class="article-date"><em class="date-icon"></em>{{news.date}}</span>
                <div class="article-content" v-html="content"></div>
                <div v-for="(comment,index) in news.comments" :key="index">
                    <hr/>
                    <Comment :contentProp="comment.content" :authorProp="comment.author"/>
                </div>
                <div class="back-button"><div class="back-button-text">Back</div></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import Comment from '../../components/news/comment.vue'
import UserComment from '../../models/comment'
import News from '../../models/news'
import { Getter } from 'vuex-class'

@Component({
    components:{
        Comment
    }
})
export default class SingleNews extends Vue{
    @Getter('news/allNews') allNews!: News[]

    async fetch ({ store, params }:any) {
        await store.dispatch('news/getAllNews')
    }

    get news() {
        return this.allNews.length > 0 ? this.allNews[0] : new News()
    }

    get content () {
        return this.news.content.replace(/\n/g, "<br />")
    }
}
</script>


<style scoped>
    .feature-image{
        height: 635px;
        width: 100vw;
        background: teal;
    }

    .article{
        margin: 70px auto;
        max-width: 1080px;
    }

    .article-title {
        font-family: Lato;
        font-size: 36px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.67;
        letter-spacing: normal;
        color: #424242;
    }

    .article-date {
        width: 88px;
        height: 17px;
        font-family: Lato;
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #9e9e9e;
    }

    .article-content {
        margin-top: 40px;
        margin-bottom: 36px;
        font-family: Lato;
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #212121;
    }

    .date-icon {
        width: 18px;
        height: 18px;
        background-color: #9e9e9e;
    }

    .back-button {
        width: 160px;
        height: 44px;
        border-radius: 35px;
        box-shadow: 0 2px 4px 0 rgba(189, 189, 189, 0.5);
        border: solid 1px transparent;
        background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), linear-gradient(to left, #44d1b9, #2d82e1 32%, #b255af 65%, #fc5168);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }


    .back-button-text {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        font-family: Lato;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: normal;
        text-align: center;
        color: #424242;
    }
</style>
