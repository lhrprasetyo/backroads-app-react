import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
    {id:1,href:"#home",text:"home"},
    {id:2,href:"#about",text:"about"},
    {id:3,href:"#services",text:"services"},
    {id:4,href:"#tours",text:"tour"},
];

export const socialLinks = [
    {id:1,href:"https://www.facebook.com",icon:"fab fa-facebook"},
    {id:2,href:"https://www.twitter.com",icon:"fab fa-twitter"},
    {id:3,href:"https://www.twitter.com",icon:"fab fa-squarespace"},
]

export const services = [
    {id:1,title:"saving money",icon:"fas fa-wallet fa-fw",content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:2,title:"endless hiking",icon:"fas fa-tree fa-fw",content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
    {id:3,title:"amazing comfort",icon:"fas fa-socks fa-fw",content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
]

export const tours = [
    {id:1,img:img1,date:'august 26th, 2020',title:'Tibet Adventure',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\
    vitae tempore voluptatum maxime reprehenderit eum quod\
    exercitationem fugit, qui corporis.',location:'China',duration:'6 days',cost:'from $2100'},
    {id:2,img:img2,date:'october 1st, 2020',title:'Best Of Java',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\
    vitae tempore voluptatum maxime reprehenderit eum quod\
    exercitationem fugit, qui corporis.',location:'Indonesia',duration:'11 days',cost:'from $1400'},
    {id:3,img:img3,date:'september 15th, 2020',title:'Explore hongkong',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\
    vitae tempore voluptatum maxime reprehenderit eum quod\
    exercitationem fugit, qui corporis.',location:'Hongkong',duration:'8 days',cost:'from $5000'},
    {id:4,img:img4,date:'december 5th, 2020',title:'Kenya highlights',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\
    vitae tempore voluptatum maxime reprehenderit eum quod\
    exercitationem fugit, qui corporis.',location:'Kenya',duration:'20 days',cost:'from $3300'},
]

export const footerLinks = [
    {id:1,href:'#home',text:'home'},
    {id:2,href:'#about',text:'about'},
    {id:3,href:'#services',text:'services'},
    {id:4,href:'#tours',text:'featured'},
]

export const footerSocial = [
    {id:1,href:'',icon:''}
]