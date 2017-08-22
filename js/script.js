window.fbAsyncInit = function() {
  FB.init({
    appId            : '122652615051267',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
  FB.AppEvents.logPageView();
};
