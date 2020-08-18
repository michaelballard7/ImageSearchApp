import axios from 'axios';


	export default 	axios.create({

		baseURL:'https://api.unsplash.com',

		headers: {
					Authorization:"Client-ID a449f2964e383beff10fce5eaff42470babdaba50ca470ae853d2c1626f3e86b"
				}
	})