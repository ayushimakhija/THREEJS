import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
import * as THREE from 'three'

const scene = new THREE.Scene();
console.log(scene);
{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);
const boxGeometry = new THREE.BoxGeometry(1,1,1);
camera.position.z = 5;
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

/*const boxGeometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshPhongMaterial({color:0x44aa88});
const mesh = new THREE.Mesh(boxGeometry,material);
camera.position.z = 5;
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);
  mesh.rotation.x += 0.1;
  mesh.rotation.y += 0.1;
}
scene.add(mesh);
animate();
*/



