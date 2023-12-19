import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function MyThree() {
  const refContainer = useRef(null);

  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparency

    // Calculate the size based on the available space above the Intro text
    var introContainer = refContainer.current;
    var introContainerRect = introContainer.getBoundingClientRect();
    var availableHeight = window.innerHeight - introContainerRect.bottom; // Adjust based on your layout
    renderer.setSize(introContainerRect.width, availableHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black and clear alpha to 0

    // use ref as a mount point of the Three.js scene instead of the document.body
    introContainer && introContainer.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.7 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={refContainer}></div>;
}

export default MyThree;
