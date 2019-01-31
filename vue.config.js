module.exports = {
	baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.boomore.cn/api_prod',
				changeOrigin: true,     // target是域名的话，需要这个参数，
				pathRewrite: {'^/api': ''},
				secure: true,          // 设置支持https协议的代理
			},
		}
	}
};
