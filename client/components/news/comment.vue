<template>
    <div>
        <div class="comment-content">{{content}}</div>
        <div class="comment-author">{{author.name}}</div>
        <div class="comment-author-title">{{author.title}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Comment extends Vue{
    @Prop() contentProp!: string
    @Prop() authorProp!: any

    get content(){
        return this.contentProp
    }

    get author(){
        return this.authorProp
    }
}
</script>


<style scoped>
    .comment-content{
        font-family: Lato;
        font-size: 24px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #2d82e1;
    }

    .comment-author{
        font-size: 14px;
        line-height: 1.71;
        color: #424242;
    }

    .comment-author-title{
        font-size: 14px;
        line-height: 1.71;
        color: #9e9e9e;
    }

</style>
