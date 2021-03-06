 window.fbAsyncInit = function() {
    FB.init({
      appId      : '1558239737811345',
      xfbml      : true,
      version    : 'v2.6'
    });

    FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';
          } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
          } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
          }
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    // login with facebook with extra permissions
    function login() {
      FB.login(function(response) {
        if (response.status === 'connected') {
            /*document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';*/
      FB.api('/me', 'GET', {fields: 'birthday,email,id,religion,gender,name,about,picture.width(150).height(150)'}, function(response) {
        document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url+ "'>" ,
        document.getElementById('nama').value=response.name,
        document.getElementById('gender').value=response.gender,

        document.getElementById('fb_id').value=response.id;

      });
          } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
          } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
          }
      }, {scope: 'publish_actions'});
    }
    
    function getInfo() {
        FB.api('/me', 'GET', {fields: 'birthday,email,id,religion,gender,name,about,picture.width(150).height(150)'}, function(response) {
        document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url+ "'>" ,
        document.getElementById('nama').value=response.name,
        document.getElementById('gender').value=response.gender,

        document.getElementById('fb_id').value=response.id;  });

    }
    function post() {
      FB.api('/me/feed', 'post', {message: 'my first status...'}, function(response) {
        document.getElementById('status').innerHTML = response.id;
      });
    }
    function shareLink() {
      FB.api('/me/feed', 'post', {link: 'http://google.com'}, function(response) {
        document.getElementById('status').innerHTML = response.id;
      });
    }

   