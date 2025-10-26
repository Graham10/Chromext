const generateHTML = (pageName) => {
    return ` 
    <div class="cloud-container" id="cloudContainer">

    <div class='C'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>GET BACK TO WORK</div>
        <div class='_2'>Working > ${pageName} </div>
    </div>
    </div>`;
};

const generateSTYLING = () => {
    return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
 
    .C {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
   
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }

    .btn {
      background-color: rgb(255, 255, 255);
      position: relative;
      display: inline-block;
      width: 358px;
      padding: 5px;
      z-index: 5;
      font-size: 25px;
      margin: 0 auto;
      color: #33cc99;
      text-decoration: none;
      margin-right: 10px;
    }
    .right {
      float: right;
      width: 60%;
    }

    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    .cloud-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .cloud {
            position: absolute;
            background: white;
            border-radius: 50%;
            filter: blur(8px);
            opacity: 0.9;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
        }

        .cloud::before, .cloud::after {
            content: '';
            position: absolute;
            background: white;
            border-radius: 50%;
        }

        .cloud::before {
            width: 60%;
            height: 60%;
            top: -30%;
            left: 10%;
        }

        .cloud::after {
            width: 40%;
            height: 40%;
            top: -20%;
            right: 10%;
        }
    </style>`;
};

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.facebook.com":
        document.body.innerHTML = "<button>Go Work</button>";
        break;
    case "www.netflix.com":
        document.body.innerHTML = "<button>Go Work</button>";
        break;
    case "www.instagram.com":
        document.body.innerHTML = "<button>Go Work</button>";
        break;
}

 function createClouds() {
            const cloudContainer = document.getElementById('cloudContainer');
            const cloudCount = 20; // Number of clouds
            
            for (let i = 0; i < cloudCount; i++) {
                const cloud = document.createElement('div');
                cloud.classList.add('cloud');
                
                // Random cloud size
                const size = Math.random() * 150 + 50; // Between 50px and 200px
                cloud.style.width = `${size}px`;
                cloud.style.height = `${size * 0.6}px`;
                
                // Random starting position
                const startTop = Math.random() * 80; // 0% to 80% from top
                const startLeft = -20 - (Math.random() * 30); // Start off-screen to the left
                cloud.style.top = `${startTop}%`;
                cloud.style.left = `${startLeft}%`;
                
                // Random animation properties
                const duration = Math.random() * 60 + 30; // Between 30s and 90s
                const delay = Math.random() * 20; // Between 0s and 20s
                
                // Random movement - mostly horizontal with slight vertical variation
                const moveX = 120 + (Math.random() * 40); // Move 120-160% to the right
                const moveY = Math.random() * 40 - 20; // Move -20% to +20% vertically
                
                // Create unique animation for each cloud
                const styleSheet = document.styleSheets[0];
                const keyframes = `
                @keyframes floatCloud-${i} {
                    0% {
                        transform: translate(0, 0);
                        opacity: ${0.7 + Math.random() * 0.3};
                    }
                    100% {
                        transform: translate(${moveX}vw, ${moveY}vh);
                        opacity: ${0.7 + Math.random() * 0.3};
                    }
                }`;
                
                styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
                cloud.style.animation = `floatCloud-${i} ${duration}s linear infinite`;
                cloud.style.animationDelay = `${delay}s`;
                
                cloudContainer.appendChild(cloud);
            }
        }

        // Initialize clouds when page loads
        window.addEventListener('load', createClouds);