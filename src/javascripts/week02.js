// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Nils Murrugarra-Llerena"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`
console.log("tester")

// [Spring 2024] - D3
// import * as d3 from "d3";
//
// // <svg width="500" height="600" style="background: rgb(232, 207, 207)" fill="transparent">d3.select('main')
// let svg1 = d3.select('main').append('svg')
//     .attr('width', 500)
//     .attr('height', 600)
//     .style('background', '#eee')
//     .style('fill', 'transparent')
//
// // <circle cx="150" cy="125" r="100" stroke="black" fill="transparent" >
// let obj_circle = svg1.append('circle')
//     .attr('cx', 150)
//     .attr('cy', 125)
//     .attr('r', 100)
//     .attr('stroke', 'black')
//     .attr('fill', 'transparent')
//
// // svg - animate
// function animate_circle()
// {
//     obj_circle
//         .transition()
//         .duration(2000)
//         .attr('r', 25)
//         .transition()
//         .duration(2000)
//         .attr('r', 100)
//         .on('end', animate_circle)
// }
// animate_circle()
//
// // <rect x="10" y="10" width="30" height="30" stroke="green" fill="green" >
// let obj_rect = svg1
//     .append('rect')
//     .attr('x', 10)
//     .attr('y', 10)
//     .attr('width', 30)
//     .attr('height', 30)
//     .attr('stroke', 'green')
//     .attr('fill', 'green')
//
// //svg - animateTransform
// let interpol_rotate = d3.interpolateString('rotate(0, 150, 125)', 'rotate(360, 150, 125)')
// function animate_rect()
// {
//     obj_rect
//         .transition()
//         // .attr('transform', 'translate(50, 50)')
//         // .duration(1000)
//         .attrTween('transform', function(d,i,a){return interpol_rotate})
//         .duration(4000)
// }
// animate_rect()
//
// let obj_rect2 = svg1
//     .append('rect')
//     .attr('x', 15)
//     .attr('y', 15)
//     .attr('width', 20)
//     .attr('height', 20)
//     .attr('stroke', 'red')
//     .attr('fill', 'red')
//
// let svg2 = d3.select('main')
//     .append('svg')
//     .attr('width', 500)
//     .attr('height', 500)
//     .style('background', 'green')
//     .style('fill', 'transparent')
//
// svg2.append('circle')
//     .attr('cx', 150)
//     .attr('cy', 125)
//     .attr('r', 100)
//     .attr('stroke', 'black')
//     .attr('fill', 'transparent')
//
// svg2.append('rect')
//     .attr('x', 10)
//     .attr('y', 10)
//     .attr('width', 30)
//     .attr('height', 30)
//     .attr('stroke', 'green')
//     .attr('fill', 'blue')
//
// svg2
//     .transition()
//     .attr('transform', 'rotate(90)')
//     .delay(1000)
//     .duration(1000)
//     .style("background-color", 'gray');

// [Spring 2024] - D3 extended
console.log("----- D3_1 -----")
import * as d3 from "d3";
let da = [
  [18, '1. One'],
  [19, '2. Two'],
  [16, '3. Three'],
  [14, '4. Four'],
  [17, '5. Five'],
  [19, '6. Six'],
]

d3.select('main')
  .append('svg')
  .attr('width',500)
  .attr('height', 600)
  .style('background', '#eee') // change background color

//Draw rectangles
d3.select('svg').selectAll('rect')
   .data(da)
   .enter()
   .append('rect') // draw rectangle
   .attr('x', 0) // x coordinates
   .attr('y', function(d, i){
     return i * 30
   }) // y coordinates
   .attr('height', 15)
   .attr('width', (d)=>{
     return d[0] * 3
   })

// Add Text
 d3.select('svg').selectAll('text')
   .data(da)
   .enter()
   .append('text')
   .attr('x', function(d){
     return d[0] * 3 + 10
   }) // x coordinates
   .attr('y', function(d, i){
     return i * 30 + 16
   }) // y coordinates
   .text(function(d){
     return d[1]
   }) // add text
