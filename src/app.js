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
    ],
    secondRowCards:[
      {
        text:"It's lightweight fun and interconnected ",
        img: "lightweight.png"
      },
      {
        text:"It encourages regular feedback with contextual requests",
        img: "feedbacksuggestions.png"
      },
      {
        text:"It creates a safe environment for dialog",
        img:"safe.png"
      }
    ]
  }
});
