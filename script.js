// Glow on scroll
const heroImage = document.getElementById("hero-img");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    heroImage.classList.add("glow");
  } else {
    heroImage.classList.remove("glow");
  }
});

// Hover skill name
function showSkill(name) {
  document.getElementById("skill-name").textContent = name;
}

function hideSkill() {
  document.getElementById("skill-name").textContent = "";
}

// GSAP Scroll animation
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item) => {
      gsap.fromTo(item.querySelector(".card"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "restart none none none"
          }
        });
    });
  });

  //Particla
  document.addEventListener("DOMContentLoaded", () => {
  let camera, scene, renderer, particles;
  let mouseX = 0;

  init();
  animate();

  function init() {
    const canvas = document.getElementById('particles-canvas');
    const parentHeight = document.getElementById('particles-section').clientHeight;

    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, parentHeight);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / parentHeight, 1, 10000);
    camera.position.z = 1000;
    camera.position.y = 200; 

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 1000; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;
      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');

    const material = new THREE.PointsMaterial({
      color: 0xff66cc, 
      size: 20,
      map: sprite,
      transparent: true,
      alphaTest: 0.5,
      opacity: 0.7,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / 600;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 600);
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.00002 + mouseX * 0.002; 
    renderer.render(scene, camera);
  }
});

  //Contact
  window.addEventListener("scroll", () => {
    const contact = document.getElementById("particles-section");
    if (contact) {
      const rect = contact.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        contact.classList.add("visible");
      }
    }
  });

  // Auto Year
  document.getElementById("year").textContent = new Date().getFullYear();