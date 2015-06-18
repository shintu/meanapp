redjester
=========


## JS Widget

Add the following JS scripts into client websites:

Required the GeoIP2 and jQuery to be included first

```
<script src="https://code.jquery.com/jquery-1.11.1.min.js" type="text/javascript"></script>
<script src="//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js" type="text/javascript"></script>
```

Add the Redjester widget:

```
<script>
(function (window, document, geoip2) {
  var s = document.createElement('script');
  // sample JS snippets located on my Dropbox
  s.src = 'https://dl.dropboxusercontent.com/u/5877351/redjester.js';
  s.type = 'text/javascript';
  s.async = true;
  document.body.appendChild(s);
  })(window, document, geoip2);
</script>
```

