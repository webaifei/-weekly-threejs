import { GUI } from '/jsm/libs/dat.gui.module';
import * as THREE from '/build/three.module.js';
// add gui controller
const gui = new GUI();
// create an Scene（创建一个场景）
const scene = new THREE.Scene();
// create an camera (创建摄像机)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
const cameraGui = gui.addFolder('camera-position');
cameraGui.add(camera.position, 'z', 1, 100);
cameraGui.add(camera.position, 'x', -2, 2, 0.03);
cameraGui.add(camera.position, 'y', -1, 1, 0.03);
// create an geometry(创建一个图形)
const boxGeometry = new THREE.BoxGeometry();
// create an material(创建材质)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(boxGeometry, material);
const cubeGui = gui.addFolder('cube-rotation');
cubeGui.add(cube.rotation, 'x', -1, 1, 0.05);
cubeGui.add(cube.rotation, 'y', -1, 1, 0.05);
cubeGui.add(cube.rotation, 'z', -1, 1, 0.05);
scene.add(cube);
// create an webgl renderer（创建一个渲染器）
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
