import { colorArray, maxRadius } from '../const/bannerConfig'
import { MousePos } from '../interfaces/MousePos';
export class Circle {
  private x: number
  private y: number
  private dx: number
  private dy: number
  private radius: number
  private minRadius: number
  private color: string
  private r: any
  private g: any
  private b: any
  private c2d: any

  constructor (x: number, y: number, dx:number, dy: number, radius: number, r: any, g: any, b:any, c2d: any) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    this.r = r
    this.g = g
    this.b = b
    this.c2d = c2d
  }

  draw () {
    this.c2d.beginPath();
    this.c2d.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c2d.fillStyle = this.color;
    this.c2d.fill();
  }

  update(mouse: MousePos) {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
    } 
    this.x += this.dx;
    this.y += this.dy;

    
    if (
        mouse.x &&
        mouse.y &&
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;	
      }			
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
      this.draw();
    }

}