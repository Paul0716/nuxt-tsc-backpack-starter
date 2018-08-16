<template>
    <div class="container-fluid">
        <div class="row">
            <div class="feature-image"><img :src="`${baseUrl}${news.featureImage}`"/></div>
        </div>
        <div class="row">
            <div class="article">
                <div class="article-title">{{news.title}}</div>
                <span class="article-date"><em class="date-icon"></em>{{news.date}}</span>
                <div class="article-content" v-html="content"></div>
                <div class="back-button"><div class="back-button-text">Back</div></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { News } from '../../models'
import { Getter } from 'vuex-class'

@Component
export default class SingleNews extends Vue{
    @Getter('news/loadedNews') news!: News

    async asyncData ({ env }: any) {
      return {
        baseUrl: env.baseUrl
      }
    }

    async fetch ({ store, params }:any) {
        await store.dispatch('news/getNews', params.id)
    }

    baseUrl = ''

    get content () {
        return this.news.content.replace(/\n/g, "<br />")
    }
}
</script>


<style scoped>
    .feature-image{
        height: 635px;
        width: 100vw;
    }

    .feature-image img{
        height: 100%;
        width: 100%;
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
        border: solid 1px transparent;
        background-origin: border-box;
        background-clip: content-box, border-box;
        background: rgba(255, 255, 255, 0.6) linear-gradient(to left, #44d1b9, #2d82e1 32%, #b255af 65%, #fc5168);
        box-shadow:  rgba(189, 189, 189, 0.5) 0 0 10px;
        color: #424242;
    }

    .back-button:hover{
        box-shadow: 0 2px 4px 0 rgba(189, 189, 189, 0.5);
        background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), linear-gradient(to left, #44d1b9, #2d82e1 32%, #b255af 65%, #fc5168);
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
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .article{
            max-width: 944px;
        }

        .feature-image{
            height: 451.6px;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
        .article{
            max-width: 688px;
        }

        .feature-image{
            height: 341px;
        }
    }

    @media screen and (max-width: 320px) {
        .article{
            max-width: 288px;
        }

        .feature-image{
            height: 340px;
        }
    }
   
</style>
