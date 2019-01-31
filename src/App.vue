<template>
    <div id="app">
        <swiper>
            <swiper-slide class="slide-item" v-for="x in slideData">
                <img :src="x.img_path" alt="">
                {{x.title}}
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>

	// import HelloWorld from './components/HelloWorld.vue'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'

	export default {
		name: 'app',
		data() {
			return {
				slideData: [],
			}
		},

		created() {
			this.axios.post('/api/booklist/get_topic_list',
				this.qs.stringify({openid: 'oSrdV47XurWKLdhjheQ_9U1UKrWQ'}),
			).then(res => {
				// console.log(res);
				if (res.data.state === 1) {
					this.slideData = res.data.data;
				}
			});
		},

		methods: {},

		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .slide-item img {
        width: 100%;
    }
</style>
