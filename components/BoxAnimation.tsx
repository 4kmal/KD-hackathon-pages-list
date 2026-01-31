import React from 'react';

const BoxAnimation = () => {
  return (
    <div className="w-full h-full min-h-[300px] flex justify-center items-center relative z-20 pointer-events-none select-none perspective-[1000px]">
       <style dangerouslySetInnerHTML={{__html: `
        .box-scene {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 900px;
          animation: fadeIn 2s ease-out forwards;
        }

        .box-scene * {
            box-sizing: border-box;
        }

        .box {
          transform-style: preserve-3d;
          position: relative;
          z-index: 2;
          width: 180px;
          height: 249.66px;
          animation: boxLoop 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .intro-wrapper {
          width: 180px;
          height: 249.66px;
          position: relative;
          transform-style: preserve-3d;
          animation: introSequence 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .box__front, .box__back { position: absolute; width: 100%; height: 100%; }
        .box__left, .box__right { position: absolute; top: 0; left: calc(50% - 49.239px / 2); height: 100%; width: 49.239px; background: #ececec; }
        .box__flap { position: absolute; left: calc(50% - 49.239px / 2); top: calc(50% - 49.239px / 2); width: 49.239px; height: 0; transform-origin: 50% 100%; border-bottom: 49.239px solid #dedede; border-left: calc(49.239px / 10) solid transparent; border-right: calc(49.239px / 10) solid transparent; }
        
        .box__lid { position: absolute; z-index: 0; top: calc(50% - 49.239px / 2); width: 180px; height: 49.239px; transform-origin: 50% 100%; transform-style: preserve-3d; transform: translateZ(calc(-49.239px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2 + 0.5px)) rotateY(180deg) rotateX(90deg); animation: openLid 0.5s ease-in-out forwards; animation-delay: 1.4s; }
        .box__lid-inner { position: relative; height: 100%; z-index: 0; transform-style: preserve-3d; }
        .box__lid-top { width: 180px; height: 49.239px; transform-style: preserve-3d; }
        
        .box__lid-top-logo { position: absolute; z-index: 0; top: 0; left: 0; width: 180px; height: 49.239px; background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/coolclub-logo-full.png) white no-repeat center center; background-blend-mode: multiply; background-size: cover; transform: rotateX(0deg); backface-visibility: hidden; }
        .box__lid-top-back { position: absolute; left: 0; top: 0; width: 180px; height: 49.239px; background: #ececec; background-image: linear-gradient(-145deg, rgba(0, 0, 0, 0.2) 0%, rgba(236, 236, 236, 0.5) 72%, rgba(255, 255, 255, 0.3) 73%); transform: rotateX(180deg); backface-visibility: hidden; }
        
        .box__lid-flap { position: absolute; z-index: 0; top: calc(50% - 49.239px / 2); overflow: hidden; width: 100%; height: 100%; transform-origin: 50% 100%; transform-style: preserve-3d; transform: translateY(calc(-49.239px + 1px)) rotateX(120deg); animation: openLidFlap 0.5s ease-in-out forwards; animation-delay: 1.6s; }
        .box__lid-flap-shape { position: absolute; width: 100%; height: 190%; border-radius: 50%/90%; overflow: hidden; background: #ececec; }
        .box__lid-flap-shape-inner { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #ececec; background: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 65%); }
        .box__lid-flap-shape-outer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #ececec; transform: rotateX(180deg); }
        
        .box__flap--left { transform: translateX(calc(-180px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2)) translateZ(0px) rotateY(270deg) rotateX(90deg); animation: openFlapLeft 0.5s ease-in-out forwards; animation-delay: 1.8s; }
        .box__flap--right { transform: translateX(calc(180px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2)) translateZ(0px) rotateY(90deg) rotateX(90deg); animation: openFlapRight 0.5s ease-in-out forwards; animation-delay: 1.8s; }
        
        .box__front { transform-style: preserve-3d; transform: translateZ(calc(-49.239px / 2)); backface-visibility: hidden; }
        .box__front:before { position: absolute; left: 0; top: 0; content: ""; width: 100%; height: 100%; background: #cccbcd; }
        .box__front-face { position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/coolclub-front.png) no-repeat left top; background-size: cover; transform: rotateY(180deg); transform-style: preserve-3d; backface-visibility: hidden; }
        .box__back { z-index: 10; background: transparent; transform: translateZ(calc(49.239px / 2)) rotateY(0deg); background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/coolclub-back-2.png) no-repeat left top; background-size: cover; }
        .box__left { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/coolclub-left.png) no-repeat left top; background-size: cover; transform: translateX(calc(-180px / 2)) rotateY(-90deg); filter: brightness(0.5); animation: lightLeft 8s ease-in-out infinite; animation-delay: 2s; }
        .box__right { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/coolclub-right.png) no-repeat left top; background-size: cover; transform: translateX(calc(180px / 2)) rotateY(90deg); filter: brightness(0.5); animation: lightRight 8s ease-in-out infinite; animation-delay: 2s; }
        .box__bottom { position: absolute; left: 0; top: calc(50% - 49.239px / 2); width: 100%; height: 49.239px; background: #ececec; transform: translateY(calc(249.66px / 2)) rotateX(-90deg); }
        
        .card { position: absolute; left: calc((180px - 162px) / 2); top: 3%; width: 162px; height: 225.8928px; background: black; backface-visibility: hidden; transform-style: preserve-3d; transform-origin: center bottom; animation: cardPopup 8s ease-in-out infinite; animation-delay: 2s; }
        .card:after { position: absolute; content: ""; width: 100%; height: 100%; background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/fwa-cards-back.png) no-repeat left top; background-size: cover; backface-visibility: hidden; transform: rotateY(180deg); transform-style: preserve-3d; }
        .card--1 { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/fwa-cards-01.png) no-repeat left top; background-size: cover; transform: translateZ(0px) rotateY(180deg); }
        .card--2 { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/fwa-cards-02.png) no-repeat left top; background-size: cover; transform: translateZ(3.6px) rotateY(180deg); }
        .card--3 { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/fwa-cards-03.png) no-repeat left top; background-size: cover; transform: translateZ(7.2px) rotateY(180deg); }
        .card--4 { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/fwa-cards-04.png) no-repeat left top; background-size: cover; transform: translateZ(10.8px) rotateY(180deg); }
        .card--5 { background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/fwa-cards-05.png) no-repeat left top; background-size: cover; transform: translateZ(14.4px) rotateY(180deg); }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes introSequence { 0% { transform: translateY(50vh) rotateY(-540deg) scale(0.5); opacity: 0; } 100% { transform: translateY(0) rotateY(0deg) scale(1); opacity: 1; } }
        @keyframes boxLoop { 0%, 5% { transform: rotateY(0deg); } 20%, 60% { transform: rotateY(180deg); } 75%, 100% { transform: rotateY(360deg); } }
        @keyframes cardPopup { 
           0%, 15% { transform: translateZ(0px) rotateY(180deg) translateY(0%) translateX(0%) rotateZ(0deg); } 
           25% { transform: translateZ(0px) rotateY(180deg) translateY(var(--ty)) translateX(0%) rotateZ(0deg); } 
           35%, 50% { transform: translateZ(0px) rotateY(180deg) translateY(var(--ty)) translateX(var(--tx)) rotateZ(var(--rot)); } 
           55% { transform: translateZ(0px) rotateY(180deg) translateY(0%) translateX(0%) rotateZ(0deg); } 
           60% { transform: translateZ(0px) rotateY(180deg) translateY(0%) translateX(0%) rotateZ(0deg); } 
           75%, 100% { transform: translateZ(0px) rotateY(180deg) translateY(0%) translateX(0%) rotateZ(0deg); } 
        }
        @keyframes lightRight { 0%, 5% { filter: brightness(0.5); } 12% { filter: brightness(1.2); } 20%, 100% { filter: brightness(0.5); } }
        @keyframes lightLeft { 0%, 60% { filter: brightness(0.5); } 67% { filter: brightness(1.2); } 75%, 100% { filter: brightness(0.5); } }
        @keyframes openLid { 0% { transform: translateZ(calc(-49.239px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2 + 0.5px)) rotateY(180deg) rotateX(90deg); } 100% { transform: translateZ(calc(-49.239px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2 + 0.5px)) rotateY(180deg) rotateX(-135deg); } }
        @keyframes openLidFlap { 0% { transform: translateY(calc(-49.239px + 1px)) rotateX(120deg); } 100% { transform: translateY(calc(-49.239px + 1px)) rotateX(60deg); } }
        @keyframes openFlapLeft { 0% { transform: translateX(calc(-180px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2)) translateZ(0px) rotateY(270deg) rotateX(90deg); } 100% { transform: translateX(calc(-180px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2)) translateZ(0px) rotateY(270deg) rotateX(-45deg); } }
        @keyframes openFlapRight { 0% { transform: translateX(calc(180px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2)) translateZ(0px) rotateY(90deg) rotateX(90deg); } 100% { transform: translateX(calc(180px / 2)) translateY(calc(-249.66px / 2 - 49.239px / 2)) translateZ(0px) rotateY(90deg) rotateX(-45deg); } }
       `}} />
       
       <div className="box-scene">
          <div className="intro-wrapper">
            <div className="box">
              <div className="box__flap box__flap--left"></div>
              <div className="box__flap box__flap--right"></div>
              <div className="box__back">
                <div className="box__back-face"></div>
              </div>
              <div className="card card--1" style={{'--rot': '50deg', '--tx': '40%', '--ty': '-155%'} as React.CSSProperties}></div>
              <div className="card card--2" style={{'--rot': '25deg', '--tx': '20%', '--ty': '-160%'} as React.CSSProperties}></div>
              <div className="card card--3" style={{'--rot': '0deg', '--tx': '0%', '--ty': '-160%'} as React.CSSProperties}></div>
              <div className="card card--4" style={{'--rot': '-25deg', '--tx': '-20%', '--ty': '-160%'} as React.CSSProperties}></div>
              <div className="card card--5" style={{'--rot': '-50deg', '--tx': '-40%', '--ty': '-155%'} as React.CSSProperties}></div>
              <div className="box__front">
                <div className="box__front-face"></div>
              </div>
              <div className="box__left"></div>
              <div className="box__right"></div>
              <div className="box__bottom"></div>
              <div className="box__lid">
                <div className="box__lid-inner">
                  <div className="box__lid-top">
                    <div className="box__lid-top-logo"></div>
                    <div className="box__lid-top-back"></div>
                  </div>
                  <div className="box__lid-flap">
                    <div className="box__lid-flap-shape">
                      <div className="box__lid-flap-shape-inner"></div>
                      <div className="box__lid-flap-shape-outer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default BoxAnimation;