export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    const projects = [
      {
        id: 1,
        title: "Vue.js And Laravel Dashboard",
        description:
          "",
        github: "https://github.com/islem143/Elearning-web-app",
        img: ["/img/ws_dashboard.webp","/img/map.webp","/img/wassal_products.webp"],
        skills: [
          "Vue.js",
          "Laravel",
          "Docker",
          "Nginx",
          "Aws",
          "RL Database",
          "Ux/Ui",
          "Testing",
          "Ci/Cd"
        ],
        more:true
      },
        
        {
          id: 3,
          title: "Network Attack Visualisation Using The ELK Stack",
          description:
            "This is a system for visualizing attacks generated by IDS where this data is sent through the ELK stack to be processed, stored and finally visualized in a web dashboard so security engineers can have insights about their organization security.",
          github: "https://github.com/islem143/PFE_S",
        
          img: ["/img/vrhost.webp","/img/flow_diagrame.webp",,"/img/kibanaalert.webp","/img/kibanageo.webp","/img/kibanahttp.webp"],
          skills: [
            "Docker",
            "Ansible",
            "Suricata IDS",
            "Virtualisation",
            "Linux",
            "Automations",
          ],
        },
        {
          id: 4,
          title: "File manager",
          description: "",
          github: null,
          img:["/img/file_manager.webp"],
          skills: ["Vue", "Larave", "Ui/Ux","aws s3"],
          
        },
        {
          id: 2,
          title: "E-Learning Web App",
          description:
            "This is a E-Learning web app where teachers create courses and attach different media formats for students. It contains also a chat section where teachers and students can chat each other.",
          github: "https://github.com/islem143/Elearning-web-app",
          img: ["/img/home.webp","/img/stats.webp","/img/admin-dashboard.webp",'/img/chat.webp','/img/modules.webp','/img/quiz.webp','/img/teacher-courses.webp'],
          skills: [
            "Vue.js",
            "Laravel",
            "Docker",
            "Nginix",
            "Redis",
            "Websockets",
            "RL Database",
          ],
        },
       
      ];
   let project;   
   if(id){
     project=projects.find(p=>p.id==parseInt(id));
   }   

   

   return {id,project}
  })