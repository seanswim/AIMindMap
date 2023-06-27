import * as THREE from 'three';

export default function () {
  
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  const container = document.querySelector('#container')
  container.appendChild(renderer.domElement);

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  renderer.setSize(canvasSize.width, canvasSize.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, 
    canvasSize.width / canvasSize.height,
    0.1,
    100,
  );

  const createObject = () => {
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const geometry = new THREE.PlaneGeometry(1, 1)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  }

  const resize = () => {
    canvasSize.width = window.innerWidth
    canvasSize.height = window.innerHeight

    camera.aspect = canvasSize.width / canvasSize.height
    camera.updateProjectionMatrix()

    renderer.setSize(canvasSize.width, canvasSize.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  const addEvent = () => {
    window.addEventListener('resize', resize)
  }

  const draw = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(() => {
      draw()
    })
  }

  const initialize = () => {
    addEvent()
    createObject()
    draw()
    resize()
  }
  
  camera.position.set(0,0,3)

  initialize()
}