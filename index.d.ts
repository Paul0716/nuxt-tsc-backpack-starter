declare module '*.vue' {
    import Vue from 'vue'
    const _default: Vue
    export default _default
}

declare module 'nuxt'{
    export const Nuxt;
    export const Builder;
}