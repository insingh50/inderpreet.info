var newsFromSrc = (source) => "Https://newsapi.org/v2/top-headlines?sources=" + source + "&apiKey=9dc668131a774b19beba0889446aaeeb";

var cnbcNews;

var req = new Request(newsFromSrc('cnbc'));

var NewsGetter = function(){
    this.getNews = function(source){
        console.log("news retreival started");
        // const HttpRequest = new XMLHttpRequest();
        axios.get(newsFromSrc(source))
          .then(function(response){
            console.log(response);
            newsArray = response.data.articles;
            console.log('getting ' + source + ' news');
            newsArray = newsArray.slice(0, 4);
            putNewsIntoList(source, newsArray);
          })
          .catch(function(error){
            console.log(error);
          });

        function putNewsIntoList(source, newsArray){
            let headlines = document.getElementById(source + '-headlines');
            newsArray.forEach(article => {
                let li = document.createElement('li');
                let anchor = document.createElement('a');
                anchor.innerText = article.title;
                anchor.href = article.url;
                anchor.target = '_blank';
                li.appendChild(anchor);
                headlines.appendChild(li);
            });
        }
    }
};

var newsGetter = new NewsGetter();
var getAllNews = () => {
    newsGetter.getNews('cnbc');
    newsGetter.getNews('bloomberg');
    newsGetter.getNews('fox-news');
    newsGetter.getNews('reuters');
}
window.onload = getAllNews;