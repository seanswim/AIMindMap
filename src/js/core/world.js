import Renderer from "../utils/Renderer";
import Camera from "../utils/Camera";
import Sizer from "../utils/Sizer";
import * as THREE from "three";
import Particles from "../../classes/Particles";
import dataSet from "../../data/data.json";

class World {
  constructor(canvasEl) {
    this.domElement = canvasEl;
    this.sizer = new Sizer();
    this.scene = new THREE.Scene();
    this.renderer = new Renderer(this);
    this.camera = new Camera(this);
    this.helper = new THREE.AxesHelper(4); // Change the size of the axes if needed

    this.particles = new Particles(this, dataSet);

    this.scene.add(this.helper);

    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.renderer.resize();
    this.camera.resize();
  }

  update() {
    this.renderer.update();
    requestAnimationFrame(() => {
      this.update();
    });
  }
}

const SWorld = new World(document.querySelector("#canvas"));

export default SWorld;
