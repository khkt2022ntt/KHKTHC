const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();

loader.load("model.glb", (gltf) => {
  scene.add(gltf.scene);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
