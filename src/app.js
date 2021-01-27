let app = new Vue({
  el: "#app",
  data:{
    navLinks:[
      {
        name: "solutions",
        link: "#"
      },
      {
        name: "pricing",
        link: "#"
      },
      {
        name:"blog",
        link: "#"
      },
      {
        name: "sign in" ,
        link: "#"
      }
    ],
    firstRowCards:[
      {
        text: "They are hardcore, formal and disconnected",
        img: "hardcore.png"
      },
      {
        text: "They don't encourage regular feedback",
        img: "nofeedback.png"
      },
      {
        text: "They don't make it safe to speak up",
        img: "notsafe.png"
      }
    ]
  }
});
