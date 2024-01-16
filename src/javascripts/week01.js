// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Nils Murrugarra-Llerena"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

// Section: JavaScript_1
console.log("----- JavaScript_1 -----")
let x = 10
const PI = 3.14

console.log(x)
console.log(PI)

let ch = "A"
let choice = 'Ok'

let desc = `this
is
a multiline string`

console.log(desc)

let fn = 'John';
let ln = 'Doe';

let name = `My name is ${fn} ${ln}.`
console.log(name)


// Arrays
let numbers = [2,4,5, 12, 34, 67,9,18]
console.log(numbers.length)

console.log('[Init]')
console.log(numbers.map(
  (x) => x * 3
))

numbers.push(22) // Add new element at end
numbers.unshift(11) // Add new element at beginning

console.log('[Update]')
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i] * 3)
}

console.log('[Print 1]')
for(let n of numbers){
  console.log(n * 3)
}

console.log('[Print 2]')
for(let i in numbers){
  console.log(numbers[i] * 3)
}

let self = {
  fn: 'Nils',
  ln: 'Murrugarra-Llerena',
  school: 'WSU'
}

console.log('Print struct')
for(let p in self){
  console.log(`${p}: ${self[p]}`)
}

console.log(self.fn)
console.log(numbers)

// Functions
function getMax(x, y){
  return Math.max(x,y)
}

console.log(getMax(14,11))

const gMax = function(x, y){
  return Math.max(x, y)
}

const gm = (x, y) => Math.max(x, y)

const gm1 = (x, y) => {
  return Math.max(x, y)
}

console.log(gMax(14,11))
console.log(gm(14,11))
console.log(gm1(14,11))

console.log(name)

// Section: JavaScript_2
console.log("----- JavaScript_2 -----")
// Arrays
numbers = [1, 2, 3, 4]
console.log( numbers.length )
console.log('[Init array]')
console.log( numbers )

console.log('[Updated array]')
console.log( numbers.map((x) => x*2) )

numbers.push(5)
numbers.unshift(0)
console.log(numbers)

for(let i=0; i<numbers.length; i++)
{
  console.log('Number: '+numbers[i])
}

let student =
    {
      w_number: 123,
      name: 'student_1',
      age: 20,
      phone_number: 1234,
    }

console.log('Print Struct')
for(let f in student){
  console.log(`${f}: ${student[f]}`)
}

//Functions
let output = getMax(3, 7)
console.log(output)

let output_2 = gm(3, 9)
console.log(output_2)

// // Section: D3_1 - optional
// console.log("----- D3_1 -----")
// import * as d3 from "d3";
// let da = [
//   [18, 'One'],
//   [19, 'Two'],
//   [16, 'Three'],
//   [14, 'Four'],
//   [17, 'Five'],
//   [19, 'Six'],
// ]
//
// d3.select('main')
//   .append('svg')
//   .attr('width',500)
//   .attr('height', 600)
//   .style('background', '#eee') // change background color
//
// //Draw rectangles
// d3.select('svg').selectAll('rect')
//    .data(da)
//    .enter()
//    .append('rect') // draw rectangle
//    .attr('x', 0) // x coordinates
//    .attr('y', function(d, i){
//      return i * 30
//    }) // y coordinates
//    .attr('height', 15)
//    .attr('width', (d)=>{
//      return d[0] * 3
//    })
//
// // Add Text
//  d3.select('svg').selectAll('text')
//    .data(da)
//    .enter()
//    .append('text')
//    .attr('x', function(d){
//      return d[0] * 3 + 10
//    }) // x coordinates
//    .attr('y', function(d, i){
//      return i * 30 + 16
//    }) // y coordinates
//    .text(function(d){
//      return d[1]
//    }) // add text

// // Section: D3_2
console.log("----- D3_2 -----")
import * as d3 from "d3";

let svg1 = d3.select('main')
    .append('svg')
    .attr('width',500)
    .attr('height', 600)
    .style('background', '#eee')
    .style("fill", "transparent")
    .attr("fill", 'white');

svg1.append("circle")
    .style("fill", "black")
    .attr("cx", 50)
    .attr("cy", 75)
    .attr("r", 5);

let obj_circle = svg1.append("circle")
    .style("stroke", "black")
    .style("fill", "transparent")
    .attr("cx", 50)
    .attr("cy", 75)
    .attr("r", 100);

// svg - animate
function animate_circle()
{
    // https://www.guidodiepen.nl/2018/07/wrapping-my-head-around-d3-rotation-transitions/
    obj_circle
        .transition()
        .duration(2000)
        .attr('r', 25)
        .transition()
        .duration(2000)
        .attr('r', 100)
        .on("end", animate_circle);
}
animate_circle()

let obj_rect = svg1.append("rect")
    .attr("x",10)
    .attr("y",10)
    .attr("width", 30)
    .attr("height", 30)
    .attr("stroke", 'green')
    .attr("fill", 'green');


// svg - animate Transform
var interpol_rotate = d3.interpolateString( "rotate(0,50,75)", "rotate(90,50,75)" )
function animate_rect()
{
    obj_rect
        // .transition()
        // .attr('transform', 'translate(50, 50)')
        // .duration(1000)
        .transition()
        .attrTween('transform' , function(d,i,a){ return interpol_rotate } )
        .duration(2000)
}
animate_rect()

var svg2 = d3.select('main')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)
    .attr('background', '#a9a9a9') // change background color

svg2.append("circle")
    .style("stroke", "blue")
    .style("stroke-width", 3)
    .style("fill-opacity", 0.5)
    .attr("r", 100)
    .attr("cx", 150)
    .attr("cy", 275);

svg2.append("rect")
    .attr("x",200)
    .attr("y",300)
    .attr("width", 130)
    .attr("height", 150)
    .style("fill", 'blue')
    .style("stroke", 'white')
    .style("stroke-width", 5)
    .style("stroke-dasharray", [15, 5]);

svg2.transition().attr('transform', 'rotate(90)').delay(1000).duration(1000).style("background-color", "gray");

svg1.append('ellipse')
    .attr('cx', 250)
    .attr('cy', 450)
    .attr('rx', 200)
    .attr('ry', 100)
    .style('fill', 'none')
    .style('stroke', 'green')

svg1.append('line')
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 500)
    .attr('y2', 600)
    .style('stroke', 'maroon');

svg1.append("path")
    .style("stroke", "red")
    .style('fill', 'none')
    .style('stroke-width', 3)
    .attr("d", "M100,200 L200,400 L100,400 v-50 h30 Z")

// // Quadratic curve
// svg1.append('circle')
//     .attr('cx', 150) // 150 | 150
//     .attr('cy', 300) // 500 | 300
//     .attr('r', 3)
//     .style('fill', 'blue');
//
// svg1.append("path")
//     .style("stroke", "blue")
//     .style('fill', 'none')
//     .style('stroke-width', 3)
//     .attr("d", "M100,400 Q150,300 400,400") // 500 --> 300
//
// // Cubic curve
// svg1.append('circle')
//     .attr('cx', 150) // 150 | 150
//     .attr('cy', 350) // 550 | 350
//     .attr('r', 3)
//     .style('fill', 'green');
//
// svg1.append('circle')
//     .attr('cx', 400)
//     .attr('cy', 550)
//     .attr('r', 3)
//     .style('fill', 'green');
//
// // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
// svg1.append("path")
//     .style("stroke", "green")
//     .style('fill', 'none')
//     .style('stroke-width', 3)
//     .attr("d", "M100,400 C150,350 400,550 450, 450") // C150,550 --> C150,350
//
// // Animations link: https://www.guidodiepen.nl/2018/07/wrapping-my-head-around-d3-rotation-transitions/