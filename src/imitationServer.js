const api = {}
if (!localStorage.getItem('goods')) {
	localStorage.setItem('goods', JSON.stringify([
	      {
	        title:"Apple iPhone X 256 ГБ «серый космос»",
	        image:'/assets/img/products/iphone.jpg',
	        newPrice:75990,
	        oldPrice:89990,
	        isDiscount:true
	      },
	      {
	        image:'/assets/img/products/iphone.jpg', 
	        title:"Apple iPhone X 256 ГБ «серый космос»", 
	        price:89990,
	        isNew:true,
	        isFavorites:true
	      },
	      {
	        image:'/assets/img/products/iphone.jpg', 
	        title:"Apple iPhone X 256 ГБ «серый космос»",
	        price:89990,
	        isNew:true 
	      },
	      {
	        image:'/assets/img/products/iphone.jpg', 
	        title:"Apple iPhone X 256 ГБ «серый космос»",
	        price:89990
	      } 
	    ])
	)
}

api.getGoods = () => {
		return new Promise(async (resolve, reject) => {
			await delay(500)
			const json = localStorage.getItem('goods')
			const goods = JSON.parse(json)

			resolve(goods)
		})
}
export default api

function delay (milliseconds) {
	return new Promise(resolve => {
		setTimeout(resolve, milliseconds)
	})
}
