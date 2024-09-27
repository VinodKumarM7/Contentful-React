
import { createClient } from 'contentful';

const client = createClient({
    space: 'q3q4qxs0gg0e',
    accessToken: '0LyHiYZlKs3G73IyFMOVbedeX1HrkiS5bmAVdu1M5uE',
});

export default client;

// client
//   .getEntry('4naKz0QtYj3elYuiEmgdy')
//   .get
//   .then((entry) => console.log("got values",entry))
//   .catch((err) => console.log(err))

//   client.getEntry('4naKz0QtYj3elYuiEmgdy').then(function (entry) {
//     // logs the entry metadata
//     console.log(entry.sys);
  
//     // logs the field with ID title
//     console.log(entry.fields.logo.fields.file.url);
//   });

//   client.getEntries().then(function (entries) {
//     const saved = content_type: 'headerModel',
//     console.log(saved)
//   });

  // client
  // .getEntries({
  //   content_type: 'header',
  // })
  // .then(function (entries) {
  //   console.log('jsone',JSON.stringify(entries));
  //   entries.items.forEach(function (entry) {
  //     console.log(JSON.stringify(entry.fields.companyName));
  //   });
  // });