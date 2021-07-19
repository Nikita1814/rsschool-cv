1. Name and contacts
Nikita Kravchenko
kravchenko1814@gmail.com - email
https://github.com/Nikita1814 - github
89629418778 - tel

2. Personal qualities, goals and aspirations
A goal-driven, career oriented, linguistics bachelor currently in the process of radically switching my working field in hopes of finding a more gainful, creativity-driven, and mentally stimulating employment than my current educational curriculum offers.
Among my strong sides aside from my rigid focus I could number diligence and punctuality concerning the accomplishment of my duties and their respective timeframes, relative situational adaptability and mental flexibility, an extreme openness to communication especially so in a foreign language (as it remains a passion of mine) as well as a willingness for constant self-development and learning which is to be expected from the Junior web developer position.
My weak sides come as the result of my strengths: a relentless perfectionism and dedication to a successful accomplishment of delegated tasks which has a side effect of me not being able to feel fulfilled or accomplished until the task entrusted to me is completed

3. Skills and aptitudes
  1. A basic understanding of HTML and CSS
  2. A surface level understanding of JS
  3. Relative familiarity with versioning systems (namely Git) and the BEM methodology
  4. Experience of working with the VScode development software


4. Code examples
  * Here is an example of a technical documentation page created as part of a Freecodecamp course evaluation task:
```html
<!DOCKTYPE html>

    <head>
        <meta charset="utf-8">
        <link href="Portfolio-style.css" rel="stylesheet">
    </head>

    <body>

        <header>
            <nav>
                <div class="links">
                    <a class="top-link">About</a>
                    <a class="top-link">Work</a>
                    <a class="top-link">Contact</a>
                </div>
            </nav>
        </header>
        <main>
            <section class="hey" id="welcome-section">
                <h1>Hey, I am a jobless foreign languages student</h1>
                <h2>Fml right?</h2>
            </section>
            <section class="portfolio">
                <h1 class="presenting">These are some of my projects</h1>
                <div class="projects">
                    <a href="https://codepen.io/No11814/pen/LYxLMbO" target="_blank" class="project-item"
                        class="item-1">
                        <img src="Tribte-page.png" width="200px" height="200px">
                        <p class="link-text">Tribute Page</p>
                    </a>
                    <a href="https://codepen.io/No11814/pen/MWJEVWQ" target="_blank" class="project-item"
                        class="item-2">
                        <img src="Form-page.png" width="200px" height="200px">
                        <p class="link-text">Form Page</p>
                    </a>
                    <a href="https://codepen.io/No11814/pen/BapraKe" target="_blank" class="project-item"
                        class="item-3">
                        <img src="Landing-page.png" width="200px" height="200px">
                        <p class="link-text">Product Landing Page</p>
                    </a>
                    <a href="https://codepen.io/No11814/pen/RwKJGzN" target="_blank" class="project-item"
                        class="item-4">
                        <img src="Techdoc-page.png" width="200px" height="200px">
                        <p class="link-text">Technical Documentation page</p>
                    </a>
                    <a href="" target="_blank" class="project-item" class="item-5">
                        <img src="What-I-Started from.png" width="200px" height="200px">
                        <p class="link-text">The first page i ever created</p>
                    </a>
                    <a class="project-item" class="item-6" href="" target="_blank">
                        <img src="Nothing yet.png" width="200px" height="200px">
                        <p class="link-text">Work in Progress</p>
                    </a>
                </div>
                <a href="https://codepen.io/your-work" class="btn">Show all &gt;</a>
            </section>
            <section class="contacts">
                <h1>Here are my contacts</h1>
                <p>be so kind as to click them</p>
                <div class="contact-buttons">
                    <a class="single-contact-button"><img src="Facebook.png" class="contact-icons" width="50px"
                            height="50px">
                        <p>Facebook</p>
                    </a>
                    <a class="single-contact-button"><img src="git.png" class="contact-icons" width="50px"
                            height="50px">
                        <p>GitHub</p>
                    </a>
                    <a class="single-contact-button"><img src="Twitter.png" class="contact-icons" width="50px"
                            height="50px">
                        <p>Twitter</p>
                    </a>
                    <a class="single-contact-button"><img src="mail.png" class="contact-icons" width="50px"
                            height="50px">
                        <p>Send a mail</p>
                    </a>
                    <a class="single-contact-button"><img src="phone.png" class="contact-icons" width="50px"
                            height="50px">
                        <p>Call me</p>
                    </a>
                </div>
                
            </section>
        </main>
        <footer>
            <p>**This is just a fake portfolio I made for practice. All the projects may be real,but the contact details
                given are not .</p>
            <p>An unassuming copyright</p>
        </footer>

    </body>
    

    </html>
```
```CSS
body{
background-color:white;    
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
a{text-decoration:none;}

nav{
position:fixed;
justify-content:center;
top:0;
left:0;
display:flex;
justify-content:flex-end ;
width:100%;
min-height: 50px;
padding-bottom: 10px;
background-color:rgba(238, 55, 55, 0.973);    
}

.links{
display:flex;
flex-direction:row;
padding-right:50px; 
padding-left:100px;  
justify-content:space-between;
width: 20%;
height:20%;
padding-top:20px;
padding-bottom:20px;
font-size: 20px;
color:whitesmoke;
}
.top-link{
display:block;    
}
.top-link:hover{
background-color:rgb(13, 13, 243);    
}
main{
padding-top:50px;
}
.hey{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
width:100%; 
background-image:linear-gradient(60deg, rgba(34, 32, 32, 0.712)0%, rgb(78, 74, 74) 100%);
color:whitesmoke
}
.portfolio{
 width:100%;
 background-image:linear-gradient(60deg, rgb(77, 77, 165) 0%, rgb(56, 56, 88) 100%); 
 color:whitesmoke;
 height:auto;
 
 text-align:center;
 padding-top:10%;
 padding-bottom:10%;
}
.projects{
display:grid;
grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));  
width:100%;
text-align:center;
grid-gap:4rem;
margin-bottom:3%;

}

.project-item{
color:whitesmoke;   
border: 1px;
}
.presenting{
text-align:center; 
}
.contacts{
     
    width:100%; 
}
.link-text{
background-color:rgba(34, 32, 32, 0.712); 


}
.btn{
text-align:center;
background-color:rgba(34, 32, 32, 0.712);
color:whitesmoke;
display:inline-block;
padding:1rem;
}
.btn:hover{
background-color:rgba(238, 55, 55, 0.973);
transition-duration:0.5s;
transition-timing-function:linear;
}
.contacts{
background-image:linear-gradient( 60deg, rgba(34, 32, 32, 0.712)0%, rgb(78, 74, 74) 100%);
width:100%;
text-align:center;
padding-top:10%;
padding-bottom:10%;
color:whitesmoke;
}
.contact-buttons{
display:flex;
flex-direction:row;
justify-content:space-between;
margin-left:10%; 
margin-right:10%;
font-size: large;
}
.single-contact-button{
text-align:center;
font-size:2rem; 
}
.single-contact-button:hover{
transform:translateY(5px);
transition-duration:1s;    
}
.contacts h1{
font-size:6rem;    
}
.contacts p{
 margin-bottom:2rem;   
}
footer{
background-image:linear-gradient(60deg, rgba(34, 32, 32, 0.712)0%, rgb(78, 74, 74) 100%);    
color:whitesmoke;
border-top-color:rgba(238, 55, 55, 0.973);
border-top-style:solid;
border: top width 3px;
}
.portfolio h1{
font-size:4rem;    
}
.hey h1{
font-size:4rem;    
}
.hey h2{
font-size:2rem;    
}

```
  * you may find more examples of the pages I created for similar tasks on my codepen page:  https://codepen.io/No11814/pens/showcase

5. Working experience
  * I possess no working experience yet due to me still studying  
  * I have completed a Responsive Web design course at freecodecamp.co. certification link - https://www.freecodecamp.org/certification/fcc1bfd14d8-d4e1-418f-9406-6d23b599a315/responsive-web-design
  * codepen.io link with related projects -  https://codepen.io/No11814/pens/showcase

6. Education
  * Feecodecamp Responsive web design course - https://www.freecodecamp.org/certification/fcc1bfd14d8-d4e1-418f-9406-6d23b599a315/responsive-web-design
  * JS / FRONT-END. STAGE 0 at RS school [in progress] 

7. Languages
  * English - C1(Advanced) 
  * French - B1(Intermediate)
  * I am currently studying for my bachelor's degree in Intercultural Communication at the Institute  Of  foreign languages at МГПУ (Московский Городской Педагогический Университет)(Final year) which gives me ample opportunity for daily language practice


