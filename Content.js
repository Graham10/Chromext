const generateHTML = (pageName) => {
    return ` <div id="clouds">
        <div class"cloud x1"></div>
        <div class"cloud x2"></div>
        <div class"cloud x1_5"></div>
        <div class"cloud x3"></div>
        <div class"cloud x4"></div>
        <div class"cloud x5"></div>
    </div>
    <div class='C'>
        <div class='_404'>404</div>
        <hr>
        <div class='_1'>GET BACK TO WORK</div>
        <div class='_2'>STUDYING > ${pageName} </div>
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
    </style>`;
};

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.facebook.com":
        document.body.innerHTML = "<button>Go Read</button>";
        break;
    case "www.netflix.com":
        document.body.innerHTML = "<button>Go Read</button>";
        break;
    case "www.instagram.com":
        document.body.innerHTML = "<button>Go Read</button>";
        break;
}