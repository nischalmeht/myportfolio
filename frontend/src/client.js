// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { createClient } from '@sanity/client';

// // require('dotenv').config()
// export const client = createClient({
//   projectId: import.meta.env.PROJECT_ID,
//   dataset: 'production',
//   apiVersion: '2022-02-01',
//   useCdn: true,
//   token: import.meta.env.REACT_APP_SANITY_TOKEN,
// });
// const builder= imageUrlBuilder(client);

// export const urlFor=(source)=>builder.image(source);

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN, // Ensure this is properly set
});
const builder= imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);