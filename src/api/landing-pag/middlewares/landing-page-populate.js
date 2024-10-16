// 'use strict';
//  const populate={
//    "populate": {
//     "blocks": {
//       "populate": {
//         "image": {},
//         "link": {},
//         "card": {
//           "populate": {
//             "image": {}
//           }
//         },
//         "form": {
//           "populate": {
//             "input": {},
//             "button": {}
//           }
//         }
//       }
//     },
//     "metadata": {
//       "populate": {
//         "metaImages": {}
//       }
//     }
//   },
//   "fields": ["title", "discerption"],
//   "pagination": {
//     "pageSize": 10,
//     "page": 1
//   },
//   "status": "published",
//   "locale": ["en"]
// } 
// module.exports = (config, { strapi }) => {
 
//   return async (ctx, next) => {
//     strapi.log.info('In landing-page-populate middleware.');
//     ctx.query={
//       populate,
//       ...ctx.query,
//     }
//     await next();
//   };
// };
  


 'use strict';

const populate = {
  "populate": {
    "blocks": {
      "populate": {
        "image": {},
        "link": {},
        "card": {
          "populate": {
            "image": {}
          }
        },
        "form": {
          "populate": {
            "input": {},
            "button": {}
          }
        }
      }
    },
    "metadata": {
      "populate": {
        "metaImages": {}
      }
    }
  },
  "fields": ["title", "description"], // Fixed typo "discerption" to "description"
  "pagination": {
    "pageSize": 10,
    "page": 1
  },
  "status": "published",
  "locale": ["en"]
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    
    // Merge populate query into ctx.query
    ctx.query = {
      ...ctx.query,
      ...populate // Ensure that your query contains the populate and other necessary fields
    };
    
    await next();
  };
};
