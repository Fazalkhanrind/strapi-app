// 'use strict';

// const middlewares = require('../../../../config/middlewares');
// const { find } = require('../../../../config/middlewares');

// /**
//  * landing-pag router
//  */

// // @ts-ignore
// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::landing-pag.landing-pag',{
//     config:{
//         find:{middlewares:['api::landing-pag.landing-page-populate']},
//         findOne:{middlewares:['api::landing-pag.landing-page-populate']}
//     }
// });
'use strict';

// @ts-ignore
const { createCoreRouter } = require('@strapi/strapi').factories;

/**
 * landing-page router
 */
module.exports = createCoreRouter('api::landing-pag.landing-pag');
// , {
//   config: {
//     find: {
//       middlewares: ['api::landing-pag.landing-page-populate'], // Link to the middleware
//     },
//     findOne: {
//       middlewares: ['api::landing-pag.landing-page-populate'], // Link to the middleware
//     },
//   },
// }