

/*
FORMAT:
"ID" : {
    title: "Project Title",
    isImg: true,
    contentPath: "imgs/portfolio.temp_logo_16_9.jpg",
    dates: "date to date",
    techUsed: "Tech",
    content: "lorem ipsum"
}
*/


export const PORTFOLIO_MORE_INFO_MAP = {
    "ID" : {
        title: "Project Title",
        isImg: true,
        contentPath: "imgs/portfolio/temp_logo_16_9.jpg",
        dates: "date to date",
        techUsed: "Tech",
        content: "lorem ipsum"
    },
    "bugnauts_kickback" : {
        title: "Kickback Games (Unofficial Title)",
        isImg: true,
        contentPath: "imgs/portfolio/bugnauts_kickback_16_9.jpg",
        dates: "Aug 2024 - May 2025",
        techUsed: "UE5, Perforce",
        content: "After Bugnauts was released as a demo through USC's Advanced Games Program, the Creative Director was contacted by an indie studio with the suggestion that we should pitch the game to them after putting in some work to redevelop it. We decided to take the opportunity to completely re-image what Bugnauts could be and rebuild it nearly from the ground up.\n" +
            "\n" +
            "I took lead on the design and engineering of this new demo and eventually we brought on extra members to aid with audio, art, UI, and design.\n" +
            "\n" +
            "While the project ultimately had to be sidelined due to difficulty coming back from the loss of my co-founder's house in the LA Wildfires, it was an incredible experience that allowed me to really flex both my engineering and design skills.\n" +
            "\n" +
            " \n" +
            "\n" +
            "Some of my favorite features to work on were:\n" +
            "\n" +
            "The Boss Fight: The demo's Ant Queen boss fight, which I developed all of from the engineering, to combat design, to cutscenes.\n" +
            "\n" +
            "The combat design: In the original demo we struggled with combat feeling flat. With this demo I tried to add more height and space to enemy placement and arena design to give combat more volume.\n" +
            "\n" +
            "The level design: We spent a lot of time developing the levels themselves. My push towards leaving behind the open world in place of set levels allowed us to play a lot more with verticality and hidden paths giving the levels a better sense of exploration."
    },
    "usc_xr_lab" : {
        title: "USC XR Lab",
        isImg: true,
        contentPath: "imgs/portfolio/XRLab_logo_16_9.jpg",
        dates: "Mar 2024 - Jul 2024",
        techUsed: "Unity, Meta Quest",
        content: "Developed parchment simulation for Unity by researching and implementing cloth simulation techniques.\n" +
            "Managed the Unity project to improve the UI, UX, and control of the VR application.\n" +
            "Collaborated with archeologists, historians, and designers to determine technical needs and help create an educational VR application that brings a 15th century manuscript to life."
    },
    "zeromatter" : {
        title: "Zeromatter",
        isImg: true,
        contentPath: "imgs/portfolio/zeromatter_logo_16_9.jpg",
        dates: "May 2023 - Aug 2023",
        techUsed: "Rust, AWS, Github Actions, Docker",
        content: "Took ownership of the company’s internal CI/CD pipeline using Rust, Github Actions, Docker and AWS to maintain, and expand the functionality of the merge-queue used by all engineers."
    },

    "bugnauts_game" : {
        title: "Bugnauts!",
        isImg: true,
        contentPath: "imgs/portfolio/bugnauts_game_16_9.avif",
        dates: "Mar 2023 - May 2024",
        techUsed: "UE5, Perforce",
        content: "Bugnauts is a UE5 game being developed through USC's Advanced Games Program. I act as the Lead Engineer on a team of 40+ members where I lead a team of 5 other engineers and collaborate with various disciplines to bring the game from idea to launch."
    },
    "tale_of_toe" : {
        title: "Tale of Toe",
        isImg: false,
        contentPath: "videos/TaleofToeDemo.mp4",
        dates: "Jan 2023 - Mar 2023",
        techUsed: "Unity",
        content: "The Tale of Toe is a mobile RPG with Tic-Tac-Toe inspired combat. This was a prototype I developed in Unity as part of a pitch to USC's Advanced Games Project program. The game was unfortunately not greenlit, but it was an incredible learning experience that taught me a lot about the game architecture of rpgs and the nuances of developing for mobile verses PC."
    },
    "networked_ue5" : {
        title: "Networked UE5 FPS",
        isImg: false,
        contentPath: "videos/NetworkedUE5.mp4",
        dates: "Oct 2022 - Dec 2022",
        techUsed: "UE5",
        content: "Using the UE5 First Person template as a base, I implemented various features including a chat system, tags players can place around the world that are saved metadata, and multiplayer using the Steam Developer API that allows it to connect to other Steam clients."
    },
    "artist_block" : {
        title: "Artist Block",
        isImg: false,
        contentPath: "videos/ArtistBlockDemo.mp4",
        dates: "Jan 2022 - May 2022",
        techUsed: "Unity",
        content: `Artist Block is a game I developed with artist and producer Amanda Sharkey in collaboration with Berklee College of Music. I handled all in-engine implementation including gameplay, audio, UI, serialization, and telemetry.`
    },

    "pbd_physics_sim" : {
        title: "PBD Physics Sim",
        isImg: false,
        contentPath: "videos/PBDExploration.mp4",
        dates: "May 2025",
        techUsed: "Unity",
        content: "I am implementing the 2006 paper Position Based Dynamics in Unity. I have a physical representation of cloth, sphere & plane collisions, friction, and user interaction. I am currently exploring optimization through compute shaders and Unity's DOTS system."
    },
    "ik_demo" : {
        title: "IK Demo",
        isImg: false,
        contentPath: "videos/IKProject.mp4",
        dates: "April 2024",
        techUsed: "OpenGL, C++",
        content: "With a mesh, skeleton, and skinning weights provided. The character is skinned and animated using IK. Different techniques are compared including Tikhonov regularization and the pseudo-inverse method."
    },
    "mocap_interpolation" : {
        title: "Mocap Interpolation",
        isImg: false,
        contentPath: "videos/MocapExample.mp4",
        dates: "February 2024",
        techUsed: "OpenGL, C++",
        content: "I implemented and analyzed linear and Bezier interpolation methods on both Euler angles and quaternions and expanded on the software used to visualize it adding new camera and rendering functionality."
    },
    "jello_cube" : {
        title: "Jello Cube Mass Spring System",
        isImg: false,
        contentPath: "videos/JelloCubeGIF.mp4",
        dates: "April 2023",
        techUsed: "OpenGL, C++",
        content: "This simulation of a mass spring system simulates an interactive cube of Jello bouncing around various boundaries. It reacts to a user dragging it around the space, gravity, surface friction, and bounces off the walls of the active bounds. Rendered in Open GL."
    },
    "prime_engine" : {
        title: "Prime Engine Development",
        isImg: false,
        contentPath: "videos/PrimeEngineDemo.mp4",
        dates: "Aug 2023 - Dec 2023",
        techUsed: "C++, Python, Lua, Maya, DirectX",
        content: "Using Prime Engine, a game engine developed by Artem Kovalovs, I implemented various features including culling, physics, and a UI editor based on Unity's uGUI system that allows users to place buttons, images, & text in the world and hook them to Lua functions. "
    },
    "custom_engine" : {
        title: "Custom Engine & Deferred Lighting",
        isImg: false,
        contentPath: "videos/DirectXEngine.mp4",
        dates: "Jan 2023 - May 2023",
        techUsed: "C++, DirectX",
        content: "Using DirectX11 and hlsl, I created a multithreaded game engine supporting features including collision detection, physics, level loading, profiling, and support for various shaders."
    },
    "raycast_renderer" : {
        title: "Raycast Renderer",
        isImg: false,
        contentPath: "videos/RayTracingRendererDemo.mp4",
        dates: "November 2022",
        techUsed: "C++",
        content: "With OpenGL and C++ I created a simple raycast engine that can render scenes with triangles, spheres, and point lights and can handle shadows and reflections."
    },

    "portfolio_website" : {
        title: "Portfolio Website",
        isImg: true,
        contentPath: "imgs/portfolio/portfolio_website_16_9.jpg",
        dates: "July 2025",
        techUsed: "React",
        content: "Through the process of being smart, silly, and another word starting with 's' I learned React and refreshed my web dev to create this website"
    },
    "uscheduler" : {
        title: "USCheduler",
        isImg: false,
        contentPath: "videos/201WebsiteDemo.mp4",
        dates: "Feb 2023 - Apr 2023",
        techUsed: "Java, ...",
        content: "USCheduler is a website scheduling application I developed with other students. I designed and created the entire front end using HTML, CSS, and JavaScript. I also integrated it with a backend written in Java by other members of the team."
    },

    "maya" : {
        title: "Maya",
        isImg: true,
        contentPath: "imgs/portfolio/temp_logo_16_9.jpg",
        dates: "Feb 2021 - May 2021",
        techUsed: "Maya",
        content: "In my spring semester of 2021, I took a course that taught the basics of modeling, animating, and rigging to produce a brief animation short of our own creation. I created a brief animation of an adventurer crossing a rickety bridge over a river of lava and losing his hat as he jumps to safety after it collapses. (Please excuse the questionable color palette, freshman year I apparently considered dark brown on dark grey a good idea.)"
    }

}
