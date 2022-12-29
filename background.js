const listOfUrls = ["em4all.net", "liamniso.site", "teslatv.net", "shabeshlft.online",
"flxedfloats.com", "banestess.blogspot.com", "teslado.pro", "appliedprimate.ilmint",
"netfllpl.com", "fixad-float.com", "ramalinyi.com", "kaneshin.shop2.multilingualcart.com", "evil.com"]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var result = isPhisingUrl(details);
      return {cancel: result};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );

  function isPhisingUrl(details){
    console.log(details);
    for(var i = 0; i < listOfUrls.length; i++){
        console.log(listOfUrls[i]);
        if(details.url.indexOf(listOfUrls[i]) != -1){
            alert("This website has been detected as phising site. Your'e welcome:)")
            return true;
        }
    }
    return false;
  }