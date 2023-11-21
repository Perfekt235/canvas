
// // Vytažení <canvas></canvas> z dom
//  const canvas = document.getElementById('myCanvas');

// //Nastavení canvas.width a canvas.height na velikost okna prohlížeče zajistí,
// //že canvas pokryje celé okno.
//  canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;

// // vytažení 2d contextu
//  let c = canvas.getContext('2d');




// Obdélníky:

// fillRect(x, y, width, height) - Vytvoří vyplněný obdélník.
// strokeRect(x, y, width, height) - Vytvoří obdélník pouze s obrysem.
// clearRect(x, y, width, height) - Vymaže specifikovanou oblast a činí ji průhlednou.
// Kruhy a Oblouky:

// arc(x, y, radius, startAngle, endAngle, [anticlockwise]) - Vytvoří oblouk nebo kruh. Používá se pro vytvoření kruhových nebo obloukových tvarů.
// arcTo(x1, y1, x2, y2, radius) - Vytvoří oblouk mezi dvěma tangenty.
// Složené Tvary a Cesty:

// beginPath() - Začíná novou cestu nebo resetuje aktuální cestu.
// moveTo(x, y) - Přesune pero na danou x-y souřadnici bez kreslení.
// lineTo(x, y) - Vytvoří čáru od aktuální pozice pera k zadané souřadnici.
// closePath() - Uzavře cestu tím, že ji spojí zpět k počátečnímu bodu.
// Tyto metody lze kombinovat pro vytváření složitějších tvarů, jako jsou mnohoúhelníky, hvězdy, atd.
// Bezierovy Křivky a Kvadratické Křivky:

// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) - Vytvoří Bezierovu křivku.
// quadraticCurveTo(cpx, cpy, x, y) - Vytvoří kvadratickou Bézierovu křivku.
// Text:

// fillText(text, x, y, [maxWidth]) - Vytvoří vyplněný text na určené pozici.
// strokeText(text, x, y, [maxWidth]) - Vytvoří text pouze s obrysem.
// Obrázky a Plátna:

// drawImage(image, dx, dy) - Umožňuje vložit obrázek do plátna.







// // pozadí kontextu

//  c.fillStyle = 'rgba(255, 0, 0, 0.5)'
//  c.fillRect(100, 100, 100, 100);
//  c.fillStyle = 'rgba(255, 0, 0, 0.5)'
//  c.fillRect(400, 100, 100, 100);
//  c.fillRect(500, 400, 100, 100);
//  c.fillRect(300, 300, 100, 100);

//  c.beginPath();
//  c.moveTo(50, 300);
//  c.lineTo(300, 100);
//  c.lineTo(400, 200);
//  c.strokeStyle = '#fa34a3';
//  c.stroke();

//  for(let i=0; i < 5; i++) {
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight
// // Arc / kruh
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = 'blue';
//     c.stroke()
  
//  }



// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx
//   this.dy = dy
//   this.radius = radius

//   this.draw = function() {
//         c.beginPath()
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         c.strokeStyle = 'blue';
//         c.stroke()
//   };

//   this.update = function () {
//       if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
//         this.dx = -this.dx
//       }

//       if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//         this.dy = -this.dy
//       }

//       this.y += this.dy
//       this.x += this.dx

//       this.draw()
//   }
// }



// let circleArray = [];

// for (let i = 0; i < 50; i++) { 
//   let radius = 50;
//   let x = Math.random() * (innerWidth - radius * 2) + radius
//   let y = Math.random() * (innerHeight - radius * 2) + radius
//   let dx = (Math.random() - 0.5) * 5
//   let dy = (Math.random() - 0.5) * 5
//   circleArray.push(new Circle(x, y, dx, dy, radius))
  
  
// }



//  const animate = () => {
//     requestAnimationFrame(animate)
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     for (let i = 0; i < circleArray.length; i++) {
//       circleArray[i].update()
      
//     }
    

//  }

//   animate()

// console.log(canvas)


// //čip

// var can = document.getElementById("myCanvas");
// var ctx = can.getContext("2d");
// can.width = window.innerWidth;
// can.height = window.innerHeight;
// can.style.background = "black";
// var p = []
// function Clear() {
// ctx.fillStyle="rgba(0,0,0,0.07)"
// ctx.fillRect(0,0,can.width,can.height);
// } 
// function particle(x,y,speed,c) {
// this.x = x
// this.y = y
// this.speed = speed
// this.upd = function() {
// ctx.strokeStyle = c;
// ctx.lineWidth = 1
// ctx.lineCap = "round"
// ctx.beginPath()
// ctx.moveTo(this.x,this.y)
// this.x += this.speed.x
// this.y += this.speed.y
// ctx.lineTo(this.x,this.y)
// ctx.stroke()
//  this.ang = Math.atan2(this.speed.y,this.speed.x)
// this.mag = Math.sqrt(this.speed.x**2 + this.speed.y**2)
// var op = [this.ang+Math.PI/4,this.ang-Math.PI/4]
// var ch = Math.floor(Math.random()*op.length)
// if(Math.random() < 0.05) {
// this.speed.x = Math.cos(op[ch])*this.mag
// this.speed.y = Math.sin(op[ch])*this.mag
// }
// }
// }
// var speed = 5
// var period = 1000
// function pulse() {
// setTimeout(pulse,period)
// var h = Math.random()*(210-150) + 150
// for(var i = 0; i < 56; i++) {
// p.push(new particle(can.width/2,can.height/2,
// {
// x:Math.cos(i/8*2*Math.PI)*speed,
// y:Math.sin(i/8*2*Math.PI)*speed
// },"hsl(" + h + ",100%,50%)"))
// }
// }
// function gameMove(){
// requestAnimationFrame(gameMove)
// Clear()
// for(var i = 0; i < p.length; i++) {
// p[i].upd();
// if(p[i].x < 0 || p[i].x > can.width || p[i].y < 0 || p[i].y > can.height) {
// p.splice(i,1)
// }
// }
// }
// pulse()
// gameMove()


// // 0 1 effect

// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// let particlesArr = [];
// let hue = 0;
// let lastTime = 0;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // koordinate misa koje nam sluze kao startna pozicija partikla. posto kreiramo partikle na svaki pomeraj misa u isto vreme radimo update
// // mouse.x i mouse.y
// const mouse = {
//     x: 0,
//     y: 0
// };

// // update koordinata misa i kreiranje niza partikla od klase
// canvas.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
//   hue += 5;
//   let currentTime = new Date().getTime();
//   if (currentTime - lastTime > 5) { // Kontrola, zda uplynulo alespoň 100 ms od posledního vytvoření partiklu
//       particlesArr.push(new Particle());
//       lastTime = currentTime;
//   }
// });

// // blueprint za svaki pojedinacni partikl
// class Particle {
//   constructor() {
//     this.x = mouse.x;
//     this.y = mouse.y;
//     this.size = Math.random() * 60;
//     this.directionX = Math.random() * 5 - 2.5;
//     this.directionY = Math.random() * 5 - 2.5;
//     this.color = "#20e3a2";
//     this.deg = 0;
//     this.number = Math.random() < 0.5 ? '0' : '1'; // Uložíme číslici při vytvoření instance
// }

//     // crtamo partikl
//     draw() {
        
//         // ctx.beginPath();
//         // ctx.save();
//         // ctx.translate(this.x - this.size/2 , this.y - this.size/2 );
//         // ctx.rotate(this.deg);
//         // ctx.roundRect(0, 0, this.size, this.size, 2);
//         // // ctx.moveTo(0,0)
//         // ctx.stroke();
//         // ctx.restore();
//         // ctx.closePath();
//         // ctx.strokeStyle = this.color;

//         const number = Math.random() < 0.5 ? '0' : '1'; // Náhodně vybere '0' nebo '1'

//         ctx.font = `${this.size}px Arial`;
//         ctx.fillStyle = this.color;
//         ctx.fillText(this.number, this.x, this.y); // Použijeme uloženou číslici
//     }

//     // pomeramo partikle od startne pozicije + smanjujemo velicnu partikla
//     update() {
//         this.x += this.directionX;
//         this.y += this.directionY - 2;
//         this.deg += 0.2;
//         if (this.size > 1) {
//             this.size -= 0.5;
//         }
      
//     }
// }

// // prolazi kroz svaki partikl pojedinacno. Kreiramo 5 partikala na svaki pomeraj misa. Zapravo "factory"  bi bio taj lup gore.
// // u ovoj funkciji pozivamo metode klase na svakom partiklu pojedinacno, ubijamo partikle i crtamo linije izmedju dva partikla.
// function particlesFactory() {
//     for (let i = 0; i < particlesArr.length; i++) {
//         particlesArr[i].draw();
//         particlesArr[i].update();

//         //brisemo partikle iz niza.
//         if (particlesArr[i].size <= 1) {
//             particlesArr.splice(i, 1);
//             i--;
//         }
        
//     }
// }

// function start() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     requestAnimationFrame(start);
//     particlesFactory();
// }

// start();












class Particle{
  constructor({
      ctx,
      width,
      height,
      scale,
      color,
      connectDistance,
      isMouseParticle = false,
      speed,
  }){
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.scale = scale;
      this.color = color;
      this.velocity = {
          x: (Math.random() - 0.5) * speed,
          y: (Math.random() - 0.5) * speed
      };
      this.connectDistance = connectDistance;
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.isMouseParticle = isMouseParticle;
  }

  update(){
      if (this.isMouseParticle){
          return;
      }

      if (this.x > this.width || this.x < 0){
          this.velocity.x *= -1;
      }

      if (this.y > this.height || this.y < 0){
          this.velocity.y *= -1;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
  }

  draw(distance){
      if (distance > this.connectDistance && this.isMouseParticle == false){
          return;
      }

      if (this.isMouseParticle){
          distance = 0;
      }

      this.ctx.beginPath();
      this.ctx.fillStyle = this.hexToRgb(this.color, 1 - distance / this.connectDistance);
      this.ctx.arc(this.x, this.y, this.scale, 0, 2 * Math.PI);
      this.ctx.fill();
  }

  hexToRgb(hex, opacity) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      const rgba = {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: opacity
      };

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  }
}

class NetworkParticle{
  constructor({
      ctx,
      width,
      height,
      targetFPS = -1,
      particleAmount,
      particleColor,
      particleScale,
      particleConnectDistance,
  }){
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.lastUpdateTime = 0;
      this.updateInterval = targetFPS / 1000;
      this.updateTimer = 0;
      this.animation = null;
      this.particleAmount = particleAmount;
      this.particleColor = particleColor;
      this.particleScale = particleScale;
      this.particleConnectDistance = particleConnectDistance;
      this.createParticles();
      this.mousePosition = {x: 0, y: 0};
      window.addEventListener('mousemove', (e) => {
          this.mousePosition = {
              x: e.pageX,
              y: e.pageY
          };
      });
  }

  createParticles(){
      this.particles = [];

      const mouseParticle = new Particle({
          ctx: this.ctx,
          width: this.width,
          height: this.height,
          scale: this.particleScale,
          color: this.particleColor,
          connectDistance: this.particleConnectDistance,
          isMouseParticle: true,
          speed: 1,
      });
      this.particles.push(mouseParticle);

      for (let i = 0; i < this.particleAmount; i++){
          const particle = new Particle({
              ctx: this.ctx,
              width: this.width,
              height: this.height,
              scale: this.particleScale,
              color: this.particleColor,
              connectDistance: this.particleConnectDistance,
              speed: 1,
          });
          this.particles.push(particle);
      }
  }

  update(deltaTime){
      for (let i = 0; i < this.particleAmount; i++){
          const particle = this.particles[i];

          const mpDistance = (Math.pow(particle.x - this.mousePosition.x, 2) +
                              Math.pow(particle.y - this.mousePosition.y, 2)) / 1000;
          
          if (particle.isMouseParticle){
              particle.x = this.mousePosition.x;
              particle.y = this.mousePosition.y;
          }

          particle.update();
          particle.draw(mpDistance);

          for (let j = this.particleAmount - 1; j > i; j--){
              const dx = this.particles[i].x - this.particles[j].x,
                    dy = this.particles[i].y - this.particles[j].y,
                    distance = (dx ** 2 + dy ** 2) / 100;

              if (distance > this.particleConnectDistance * 2){
                  continue;
              }

              this.connect({
                  x: this.particles[i].x,
                  y: this.particles[i].y,
              }, {
                  x: this.particles[j].x,
                  y: this.particles[j].y,
              },
                  distance);
          }
      }
  }

  connect(a, b, distance){
      const c = {
          x: (a.x + b.x) / 2,
          y: (a.y + b.y) / 2
      };

      const mpDistance = (Math.pow(c.x - this.mousePosition.x, 2) +
                          Math.pow(c.y - this.mousePosition.y, 2)) / 1000;

      if (mpDistance > this.particleConnectDistance){
        return;
      }

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.hexToRgb(this.particleColor, (this.particleConnectDistance - distance) / this.particleConnectDistance * (1 - mpDistance / this.particleConnectDistance));
      this.ctx.moveTo(a.x, a.y);
      this.ctx.lineTo(b.x, b.y);
      this.ctx.stroke();
  }

  hexToRgb(hex, opacity) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      const rgba = {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: opacity
      };

      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
  }

  animate(timeStamp = 0){
      const deltaTime = timeStamp - this.lastUpdateTime;
      this.lastUpdateTime = timeStamp;

      if (this.updateTimer > this.updateInterval){
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.update(deltaTime);
      }else{
          this.updateTimer += deltaTime;
      }

      this.animation = requestAnimationFrame(this.animate.bind(this));
  }

  cancelAnimation(){
      if (this.animation == null){
          return;
      }

      cancelAnimationFrame(this.animation);
      this.animation = null;
  this.createParticles();
  }

  resize(width, height){
      this.width = width;
      this.height = height;
  }
}

const canvas = document.getElementById('myCanvas');
const networkParticle = new NetworkParticle({
  ctx: canvas.getContext('2d'),
  width: window.innerWidth,
  height: window.innerHeight,
  targetFPS: 60,
  particleAmount: 256,
  particleScale: 1.8,
  particleColor: '#00FFA3',
  particleConnectDistance: 90,
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ibg').forEach((e) => {
      const img = e.querySelector('img');
      e.style.backgroundImage = `url('${img.src}')`;
  });

  const bgImg = document.querySelector('.bg-img');
  window.addEventListener('mousemove', (e) => {
      const screen = {
          x: window.innerWidth,
          y: window.innerHeight
      };
      
      const amplitude = 1.8;

      const deltaX = (e.clientX - screen.x / 2) / screen.x * 2 * amplitude,
            deltaY = (e.clientY - screen.y / 2) / screen.y * 2 * amplitude;


      bgImg.style.transform = `scale(1.05) translate(${deltaX}px, ${deltaY}px)`;
  });

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  networkParticle.animate();
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  networkParticle.cancelAnimation();
  networkParticle.resize(window.innerWidth, window.innerHeight);
  networkParticle.animate();
});
