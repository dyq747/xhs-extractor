const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

async function fetchHTML(url) {
  const {data} = await axios({
    methods: 'get',
    url: url,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      'Content-Type': 'text/html; charset=UTF-8'

    }
  })
  return data;
}