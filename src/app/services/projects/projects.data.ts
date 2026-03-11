import { ProjectDTO } from "../../models/projects/projectDTO";

export const PROJECTS_DATA: ProjectDTO[] = [
    {
        id: "1", name: { en: "Sector 7 Ecommerce", es: "Sector 7 Ecommerce" },
        img: "assets/projects/sector7.jpg",
        technologies: ["Angular", "CSS", "Java", "Spring"],
        description:
        {
            es: ['Desarrollé el frontend de un E-commerce para Sector 7 Gamers utilizando Angular 18 y SCSS. Este proyecto marcó mi inicio como desarrollador freelance, permitiéndome perfeccionar habilidades en el manejo de estados de usuario, integración de APIs y despliegue con Docker. Me apasiona el ecosistema de Angular y los desafíos de arquitectura que propone.'],
            en: ['I developed the frontend for a Sector 7 Gamers e-commerce platform using Angular 18 and SCSS. This project marked my debut as a freelance developer, allowing me to hone my skills in user state management, API integration, and deployment with Docker. I am deeply passionate about the Angular ecosystem and the architectural challenges it presents.']
        },

        links: {
            "sector7gamers.com.ar": "https://sector7gamers.com.ar/",
        }
    },
    {
        id: "2",
        name:
        {
            en: "Restful API for Scooters",
            es: "API RestFull de Monopatines"
        },
        "img": "assets/projects/Scooters.jpg",
        technologies: ["Java", "Spring", "Postman"],
        description:
        {
            es: ["Este proyecto, realizado como parte de la materia de Arquitectura de Software en la tecnicatura universitaria en Desarrollo de Aplicaciones Informáticas en UNICEN, destaca la implementación de un sistema basado en Spring Boot. El sistema permite el alquiler de monopatines e incluye servicios para usuarios y administradores, con diferentes roles definidos. Se adoptó un enfoque de microservicios utilizando Spring Boot Cloud, lo que proporciona escalabilidad y modularidad al sistema. Además, se ha proporcionado una completa documentación que incluye consultas realizables a través de Postman, facilitando así la comprensión y el uso del sistema, todo contenido en un archivo con extensión Postman dentro del propio proyecto."],
            en: ["This project, carried out as part of the Software Architecture course in the university degree program in Computer Application Development at Unicent, highlights the implementation of a system based on Spring Boot. The system allows for skateboard rental and includes services for both users and administrators, with different defined roles. A microservices approach was adopted using Spring Boot Cloud, providing scalability and modularity to the system. Additionally, comprehensive documentation has been provided, including queryable requests through Postman, thereby facilitating understanding and usage of the system, all contained within a Postman extension file within the project itself."]
        },
        links: {
            github: "https://github.com/JesusDiazDeveloper/Microservices_Scooters",
        }
        ,
    },

    /* {
      id: "2", name: { en: "Higa-Hiemi Hospitals Cooperative", es: "Cooperativa de Hospitales Higa-Hiemi" },
      img: "assets/projects/Higa_Hiemi.jpg",
      technologies: ["React", "CSS", "Java", "Spring"],
      description:
      {
        es: ['Proyecto Add Honorem para el desarrollo de la página web para la cooperativa de hospitales de Mar del Plata, "Higa-Hiemi". En este proyecto, mi rol principal fue como desarrollador Frontend, utilizando React y CSS como las tecnologías principales. Sin embargo, también tuve la valiosa oportunidad de contribuir al Backend utilizando Spring Boot. Este proyecto no solo ha sido una oportunidad para aplicar mis habilidades en desarrollo web, sino que también me ha permitido continuar mi aprendizaje en profundidad sobre ReactJS. Disfruto enormemente trabajando con esta tecnología y los desafíos que conlleva. Además, valoro la oportunidad de seguir colaborando en este proyecto, ya que me permite aplicar mis nuevos conocimientos y avances en ReactJS mientras contribuyo al crecimiento y desarrollo de la cooperativa. Cada día, estoy emocionado de poder aportar mi pequeño grano de arena para mejorar la experiencia digital de la cooperativa y hacer una diferencia significativa en la comunidad de salud de Mar del Plata.'],
        en: ['Add Honorem Project for the development of the website for the Mar del Plata hospitals cooperative, "Higa-Hiemi". In this project, my main role was as a Frontend developer, using React and CSS as the primary technologies. However, I also had the valuable opportunity to contribute to the Backend using Spring Boot. This project has not only been an opportunity to apply my skills in web development, but it has also allowed me to continue my in-depth learning about ReactJS. I greatly enjoy working with this technology and the challenges it brings. Additionally, I value the opportunity to continue collaborating on this project, as it allows me to apply my newfound knowledge and advancements in ReactJS while contributing to the growth and development of the cooperative. Every day, I am excited to contribute my small part to enhance the digital experience of the cooperative and make a significant difference in the healthcare community of Mar del Plata.']
      },

      links: {
        github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
        netlify: "https://web-para-un-artista.netlify.app/",
      }
    }, */

    {
        id: "3",
        name:
        {
            en: "Landing Page with Advanced JavaScript and CSS",
            es: "Landing Page con Javascript y CSS Avanzado"
        },
        "img": "assets/projects/Speedy.jpg",
        technologies: ["JS", "CSS", "HTML"],
        description:
        {
            es: ["Este proyecto se enfoca en la aplicación de técnicas avanzadas de CSS, como Parallax, transiciones y efectos, así como el uso de Sprite Sheets, para mejorar la experiencia visual del usuario en una landing page diseñada para un juego basado en los personajes de Spidey. Además, se utilizó ampliamente JavaScript, profundizando en su uso para agregar interactividad y funcionalidad dinámica al sitio. La combinación de estas técnicas y herramientas proporciona una experiencia visualmente atractiva y altamente funcional para los usuarios, lo que contribuye a aumentar el atractivo y la participación en el sitio web del juego."],
            en: ["This project focuses on applying advanced CSS techniques such as Parallax, transitions, and effects, along with the use of Sprite Sheets, to enhance the user's visual experience on a landing page designed for a game based on Spidey characters. Additionally, JavaScript was extensively utilized, delving into its usage to add interactivity and dynamic functionality to the site. The combination of these techniques and tools provides a visually appealing and highly functional experience for users, contributing to increased attractiveness and engagement on the game website."]
        },
        links: {
            netlify: "https://interfaces-2023.netlify.app/tp4",
        }
        ,
    },

    {
        id: "4", name: { en: "Php Server Side Rendering", es: "Php Server Side Rendering" },
        img: "assets/projects/Movies.jpg",
        technologies: ["Php", "Postman"]
        ,
        description:
        {
            es: ["Aplicación desarrollada en PHP que emplea Server Side Rendering y cuenta con un enfoque basado en el patrón de diseño Modelo-Vista-Controlador (MVC). Destacando la implementación personalizada de un enrutador (router), permite la gestión completa de películas a través de operaciones CRUD, incluyendo la creación, visualización, actualización y eliminación de registros."],
            en: ["An application developed in PHP that utilizes Server Side Rendering and follows a Model-View-Controller (MVC) design pattern approach. Highlighting the custom implementation of a router, it allows for complete management of movies through CRUD operations, including creation, viewing, updating, and deletion of records."]
        },
        links: {
            github: "https://github.com/JesusDiazDeveloper/Web2TPE-ServerSideRendering-PHP-MVC",
        }
    },


    {
        id: "5",
        name:
        {
            en: "Tomy y Dally, 4 en linea!",
            es: "Tomy y Dallly, Conect 4!"
        },
        "img": "assets/projects/Tomy_&_Dally.jpg",
        technologies: ["JS", "CSS", "HTML"],
        description:
        {
            es: ["Emocionante juego desarrollado utilizando HTML, CSS y JavaScript, con un enfoque en Programación Orientada a Objetos (POO). A través de la integración de la plataforma Canva, diseñamos meticulosamente fichas y tableros personalizados, junto con la implementación de la lógica de juego. Este proyecto representa una página web de juegos, con el título destacado siendo el clásico juego de estrategia '4 en línea', protagonizado por los queridos personajes de Los Simpsons, Tommy y Dally."],
            en: ["exciting game developed using HTML, CSS, and JavaScript, with a focus on Object-Oriented Programming (OOP). Through the integration of the Canva platform, we meticulously designed custom tokens and boards, along with implementing the game logic. This project represents a gaming website, with the highlighted title being the classic strategy game 'Connect 4', featuring the beloved characters from The Simpsons, Tommy and Dally."]
        },
        links: {
            netlify: "https://interfaces-2023.netlify.app/tp3",
        }
        ,
    },

    {
        id: "6",
        name:
        {
            en: "Webpage for an artist from my city",
            es: "Pagina web para un artista de mi ciudad"
        },
        "img": "assets/projects/web_para_un_artista.png",
        technologies: ["JS", "CSS", "HTML"],
        description:
        {
            es: ["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.", "Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario."],
            en: ["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.", "Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions."]
        },
        links: {
            github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
            netlify: "https://web-para-un-artista.netlify.app/",
        }
        ,
    },
    {
        id: "7",
        name:
        {
            en: "Mockup in Figma for Tomy and Dally Games Page",
            es: "Maquetado en Figma para pagina de juegos(Tomy y Dally)"
        },
        "img": "assets/projects/Speedy_Figma.jpg",
        technologies: ["Figma", "UX_UI"],
        description:
        {
            es: ["Antes de sumergirme en el código, comprendí la importancia de establecer un sólido diseño visual para mi proyecto. A través de esta experiencia, desarrollé mi propio Design System para crear una página web desde cero. Este proyecto me brindó una comprensión profunda del proceso de diseño organizado y efectivo. Comenzamos esbozando nuestras ideas en papel, diseñando las interfaces de usuario de manera iterativa. Luego, pasamos a crear los wireframes para visualizar la estructura y navegación del sitio. Finalmente, llevamos a cabo el diseño en alta fidelidad para asegurarnos de que nuestras visiones se materializaran con precisión.        Destaco el uso de la herramienta Figma en este proceso, en la cual me sumergí profundamente. Completé varios cursos y obtuve certificaciones, ya que disfruto enormemente de esta faceta del diseño. Figma no solo facilitó la creación de diseños de alta calidad, sino que también promovió la colaboración y la comunicación efectiva dentro del equipo. Este proyecto no solo me permitió mejorar mis habilidades de diseño, sino que también sentó las bases para un desarrollo web más eficiente y centrado en el usuario."],
            en: ["Before diving into the code, I understood the importance of establishing a solid visual design for my project. Through this experience, I developed my own Design System to create a website from scratch. This project gave me a deep understanding of the organized and effective design process. We began by sketching our ideas on paper, iteratively designing the user interfaces. Then, we moved on to creating wireframes to visualize the site's structure and navigation. Finally, we carried out high-fidelity design to ensure our visions were accurately materialized. Highlight the use of the Figma tool in this process, which I delved into deeply. I completed various courses and obtained certifications, as I greatly enjoy this aspect of design. Figma not only facilitated the creation of high-quality designs but also promoted collaboration and effective communication within the team. This project not only allowed me to enhance my design skills but also laid the groundwork for more efficient and user-centered web development."]
        },
        links: {
            netlify: "https://interfaces-2023.netlify.app/tp2",
        }
        ,
    },


    {
        id: "8", name: { en: "Jesus Diaz Portfolio ", es: "Portfolio de Jesus Diaz" }, "img": "assets/projects/Portfolio.jpg", technologies: ["Angular", "PrimeNG", "CSS", "HTML"]
        ,
        description:
        {
            es: ["Mi portfolio es una representación de mi experiencia y habilidades en el desarrollo web moderno. Fue construido utilizando Angular con un enfoque en responsive design y mobile first, garantizando una experiencia de usuario óptima en una amplia gama de dispositivos y tamaños de pantalla. Una de las características destacadas es la internacionalización, lograda mediante el uso de ngx_translate, lo que me permitió ofrecer contenido en múltiples idiomas y llegar a una audiencia global. Además, para mejorar la estética y funcionalidad del sitio, integré PrimeNG y Bootstrap, aprovechando sus componentes y estilos predefinidos para crear una interfaz atractiva y fácil de usar. Este proyecto no solo me permitió fortalecer mis habilidades en Angular, sino que también me proporcionó una comprensión más profunda de las prácticas de desarrollo web modernas y la importancia de ofrecer una experiencia de usuario de alta calidad."],
            en: ["My portfolio is a representation of my experience and skills in modern web development. It was built using Angular with a focus on responsive design and mobile-first approach, ensuring an optimal user experience across a wide range of devices and screen sizes. One of the standout features is internationalization, achieved through the use of ngx_translate, allowing me to provide content in multiple languages and reach a global audience. Additionally, to enhance the aesthetics and functionality of the site, I integrated PrimeNG and Bootstrap, leveraging their components and predefined styles to create an attractive and user-friendly interface. This project not only allowed me to strengthen my skills in Angular but also provided me with a deeper understanding of modern web development practices and the importance of delivering a high-quality user experience."]
        },

        links: {
            netlify: "https://jesusdiaz.netlify.app/",
        }
    },
]