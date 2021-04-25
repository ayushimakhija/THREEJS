import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
import * as THREE from 'three'
import { seededRandom } from 'three/src/math/MathUtils';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);
console.log(scene);
{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}
const spread = 15;
//Cube Geometry
const boxGeometry = new THREE.BoxGeometry(1,1,1);

/*
function makeInstance(Geometry, color, x) {
  const material = new THREE.MeshPhongMaterial({color});

  const cube = new THREE.Mesh(Geometry, material);
  scene.add(cube);

  cube.position.x = x;

  return cube;
}

const cubes = [
  makeInstance(boxGeometry, 0x44aa88,  0),
  makeInstance(boxGeometry, 0x8844aa, -2),
  makeInstance(boxGeometry, 0xaa8844,  2),
];

function render(time) {
  time *= 0.001;  // convert time to seconds

  cubes.forEach((cube, ndx) => {
    const speed = 1 + ndx * .1;
    const rot = time * speed;
    cube.rotation.x = rot;
    cube.rotation.y = rot;
  });
  requestAnimationFrame(render);
  renderer.render(scene,camera);
}
render(0.01);

*/

const material = new THREE.MeshPhongMaterial({color:0x44aa88});

const cube = new THREE.Mesh(boxGeometry,material);

camera.position.z = 5;
//Circle Geometry
const radius = 2;  

const segments = 8;  

const circleGeometry = new THREE.CircleGeometry(radius, segments);

const material1 = new THREE.MeshPhongMaterial({color:0x44aa88});

const Circle = new THREE.Mesh(circleGeometry,material1);



//Cone Geometry

//const radius = 6;  

//const height = 8;  

//const radialSegments = 16;  

const ConeGeometry = new THREE.ConeGeometry(2, 2, 6);

const material2 = new THREE.MeshPhongMaterial({color:0x44aa88});

const Cone= new THREE.Mesh(ConeGeometry,material2);
//Cylinder Geometry

//const radiusTop = 4;  

//const radiusBottom = 4;  

//const height = 8;  

//const radialSegments = 12;  

const cylinderGeometry = new THREE.CylinderGeometry(
    2, 2, 2, 8);

 const material3 = new THREE.MeshPhongMaterial({color:0x44aa88});

const Cylinder = new THREE.Mesh(cylinderGeometry,material3);

//DodecahedronGeometry

//const radius = 7;  

//const detail = 2;  

const dodecahedronGeometry = new THREE.DodecahedronGeometry(2, 2);

const material4 = new THREE.MeshPhongMaterial({color:0x44aa88});
const Dodecahedron = new THREE.Mesh(dodecahedronGeometry,material4);

//function animate
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;
  Cone.rotation.x += 0.005;
  Cone.rotation.y += 0.005;
  Circle.rotation.x += 0.001;
  Circle.rotation.y += 0.001;
  Cylinder.rotation.x += 0.005;
  Cylinder.rotation.y += 0.005;
  Dodecahedron.rotation.x += 0.001;
  Dodecahedron.rotation.y += 0.001;
}
scene.add(cube);
scene.add(Cone);
scene.add(Circle);
scene.add(Dodecahedron);
scene.add(Cylinder);
animate();

