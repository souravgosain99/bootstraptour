var tour = new Tour({
    debug: true,
    basePath: location.pathname.slice(0, location.pathname.lastIndexOf('/')),
    steps: [
       {
        path:'/home.html',
      element: "#scan",
      title: "step 0",
      content: "this QRscanner"
    }, 
    {
        path:'/home.html',
      element: "#devices",
      title: "step 1",
      content: "press devices button"
    },
    {
      path: '/devices.html',
      waitForTemplate:'/devices.html',  
      element: "#6940",
      title: "step 2",
      content: "press this device"
    },
    {
        path: '/deviceinfo.html',
        waitForTemplate:'/deviceinfo.html',  
        element: "#Home",
        title: "step 3",
        content: " end tour"
      }
  ],
  template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><nav class='popover-navigation'></nav></div>"
  
  
  
});
tour.init();
$('#start-tour').click(function() {
    tour.restart();
    
  });
  
  // Initialize the tour
  
  //tour.start();
  // Start the tour
  