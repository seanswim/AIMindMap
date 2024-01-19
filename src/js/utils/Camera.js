import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Camera extends THREE.PerspectiveCamera {
  constructor(world) {
    super(75, world.sizer.width / world.sizer.height, 0.1, 100);
    this.world = world;
    this.position.set(0.2, 0.3, 0.2);
    this.controls = new OrbitControls(this, this.world.renderer.domElement);
  }

  resize() {
    this.aspect = this.world.sizer.width / this.world.sizer.height;
    this.updateProjectionMatrix();
  }
}

export default Camera;
