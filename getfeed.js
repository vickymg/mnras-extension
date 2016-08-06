$(document).ready(function(){
  $("#feed").PaRSS("http://mnras.oxfordjournals.org/rss/mfr.xml",
  5,
  "M jS g:i a",
  true);

  window.addEventListener('click', function(e) {
    if (e.target.href !== undefined) {
      chrome.tabs.create({ url: e.target.href })
    }
  });
});
