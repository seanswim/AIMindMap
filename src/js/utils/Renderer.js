import * as THREE from "three";

class Renderer extends THREE.WebGLRenderer {
  constructor(world) {
    super({ antialias: true, canvas: world.domElement });
    this.world = world;

    this.setSize(this.world.sizer.width, this.world.sizer.height);
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  resize() {
    this.setSize(this.world.sizer.width, this.world.sizer.height);
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  update() {
    const radius = 0.3;
    const angle = Date.now() * 0.0001;
    const theta = 1.3;

    this.world.camera.position.x = radius * Math.sin(theta) * Math.cos(angle);
    this.world.camera.position.z = radius * Math.sin(theta) * Math.sin(angle);
    this.world.camera.position.y = radius * Math.cos(theta);
    this.world.camera.lookAt(0, 0, 0);

    this.render(this.world.scene, this.world.camera);
  }
}

export default Renderer;
