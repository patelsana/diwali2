$('p').textillate({
    in:{
      effect: "fadeInUp",
      delayScale: 0.2
    }
  });
  
  $('h2').textillate({
    in:{
      effect: "fadeInUp",
      delayScale: 2.5
    }
  });
  
  TweenMax.from(".lamp", 2, {
    delay: 0.18,
    y: 100,
    ease: Expo.easeInOut,
    opacity: 0
  });