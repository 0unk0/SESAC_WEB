const url = require('url');
const myUrl = 'https://www.naver.com/path?query=value&key=value&name=hello';

const parsedUrl = url.parse(myUrl, true);
console.log('파싱된 URL: ', parsedUrl);
console.log('호스트: ', parsedUrl.host);
console.log('경로: ', parsedUrl.path);
console.log('쿼리: ', parsedUrl.query);
console.log('---');

const myUrl2 = {
    protocole: 'https',
    hostname: 'www.naver.com',
    pathname: '/search.naver',
    query:{
        query: '새싹'
    }
}

const assembledUrl = url.format(myUrl2);
console.log(assembledUrl);