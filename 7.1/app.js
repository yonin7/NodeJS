const request = require('request');
const axios = require('axios');
const got = require('got');

const url = `https://api.fbi.gov/wanted/v1/list`;

// const data = async (address, callback) => {
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback();
//     } else if (response.body.error) {
//       console.log('ggd');
//     } else {
//       await console.log(response.data);
//       const data = response.body.current;
//     }
//   });
// };
// data(url);

request(url, { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  console.log(body.items[0]);
});

const getData = async () => {
  try {
    const res = await axios.get(url);
    console.log(res.data.items[0]);
  } catch (error) {
    console.log(error);
  }
};
getData();

got(url, { json: true })
  .then((response) => {
    console.log(response.body.items[0]);
  })
  .catch((error) => {
    console.log(error.response.body);
  });
