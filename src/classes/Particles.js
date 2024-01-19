import * as THREE from "three";

class Particles {
  constructor(world, dataSet) {
    this.world = world;

    this.particles = new THREE.Group();

    this.init(dataSet);

    this.world.scene.add(this.particles);
  }

  init(dataSet) {
    const length = dataSet.length;

    for (let i = 0; i < length; i++) {
      const { metadatas, embeddings, ids } = dataSet[i];

      const id = ids.split("_")[0];
      let color = "white";
      if (id === "Asiana") color = new THREE.Color("#FF004D");
      if (id === "BNK") color = new THREE.Color("#43766C");
      if (id === "DongilSteel") color = new THREE.Color("#FF6C22");
      if (id === "Ecopro") color = new THREE.Color("#3A4D39");
      if (id === "GS") color = new THREE.Color("#11009E");
      if (id === "Hybe") color = new THREE.Color("#FF9800");
      if (id === "Hyundai") color = new THREE.Color("#65B741");
      if (id === "kakao") color = new THREE.Color("#C21292");
      if (id === "Kiwoom") color = new THREE.Color("#F4CE14");
      if (id === "Korean") color = new THREE.Color("#005B41");
      if (id === "LG") color = new THREE.Color("#6B240C");
      if (id === "Mirae") color = new THREE.Color("#5D12D2");
      if (id === "NAVER") color = new THREE.Color("#C70039");
      if (id === "POSCO") color = new THREE.Color("#2B3499");
      if (id === "Samsung") color = new THREE.Color("#088395");
      if (id === "Sinhan") color = new THREE.Color("#39A7FF");
      if (id === "SK") color = new THREE.Color("#FF9130");

      const geometry = new THREE.BufferGeometry();
      const material = new THREE.PointsMaterial({
        size: 0.001,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthTest: true,
        color: color,
      });
      const vertices = new Float32Array(embeddings);
      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

      const particle = new THREE.Points(geometry, material);

      this.particles.add(particle);
    }
  }
}

export default Particles;
