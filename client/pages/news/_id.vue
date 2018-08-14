<template>
    <div class="container-fluid">
        <div class="row">
            <div class="feature-image"></div>
        </div>
        <div class="row">
            <div class="article">
                <div class="article-title">Full steam ahead for Fortunium!</div>
                <span class="article-date"><em class="date-icon"></em>2018 Jun. 20</span>
                <div class="article-content" v-html="content"></div>
                <hr/>
                <div>
                    <div class="comment-content">“It is a very exciting time for us, with the release of our first official Stormcraft Studios game. Microgaming did an amazing job of launching Fortunium at ICE Totally Gaming in London earlier this year, which has created quite a buzz of expectation in the industry. There has been a very positive response to our prioritising of the portrait play experience on mobile, which we believe is a key differentiator for our studio.”</div>
                    <div class="comment-author">Terence Igesund</div>
                    <div class="comment-author-title">Creative Director at Stormcraft Studios</div>
                </div>
                <hr/>
                <div class="back-button"><div class="back-button-text">Back</div></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
@Component
export default class SingleNews extends Vue{
    readonly articleContent = `ISLE OF MAN – Microgaming presents Fortunium, created by Stormcraft Studios, a new independent game studio that will be supplying exclusive content to Microgaming.

Made up of industry pioneers with decades of experience and a legacy of commercial success, Stormcraft Studios is dedicated to crafting epic gaming content which will be available exclusively to Microgaming operators.

Microgaming proudly presents Fortunium, a five by five reel, steampunk themed slot, and the first official release under the new Stormcraft Studios brand. Loaded with thrilling features brought to life by stunning artwork, the thriving metropolis of Fortunium is the ultimate destination for innovators and entrepreneurs seeking acclaim and fortune.

Welcoming players to the city are its famous founders, Victoria, expert navigator and acclaimed explorer, and Maximillian, industrious inventor of mechanical marvels. Both characters can appear as super stacked symbols in the game, vividly portrayed in portrait mode with incredible graphics that have been finely tuned to give players a premium mobile experience.

Opulence and opportunity await in base game, where super stacked Mystery Symbols can reveal a random wild, low or high symbol, granting players the chance to win big across multiple lines.

Daring explorers can upgrade Mystery Symbols with the Win Booster™ device. When activated, the feature will increase the player’s wager by 50% and turn the Mystery Symbols into only high and wild symbols. Boosted Mystery Symbols will carry over into free spins, where they will remain boosted throughout the round.

Fortunium’s soaring skyline provides the backdrop in free spins, which can contain up to three Mystery Reels™. These special reels are loaded with never-ending stacks of Mystery Symbols that can appear on every spin. Landing scatters during the feature will extend the free spins experience, giving players the opportunity to supercharge their rewards.

Hidden fortunes await in the golden city of Fortunium, which is now live on all platforms`

    get content () {
        return this.articleContent.replace(/\n/g, "<br />")
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

    .feature-image{
        height: 635px;
        width: 100vw;
        background: teal;
    }

    .article{
        margin: 70px auto;
        width: 1080px;
    }

    .article-title {
        width: 725px;
        height: 28px;
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
        width: 1080px;
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
