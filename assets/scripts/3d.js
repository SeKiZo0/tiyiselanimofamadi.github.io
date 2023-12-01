import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js';


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: hero3D, antialias: true });
renderer.setSize(sizes.width, sizes.height);
//document.body.appendChild( renderer.domElement );
//const controls = new OrbitControls( camera, renderer.domElement );

renderer.setClearColor(0x000000, 0)

const loader = new GLTFLoader();

loader.load('/3D objects/gaming_desktop_pc/scene.gltf', function (gltf) {
    gltf.scene.rotation.y = 4.72
    gltf.scene.rotation.x = 0.07
    scene.add(gltf.scene);
    gltf.scene.traverse(function (child) {

        if (child.isMesh) {

            child.castShadow = true;
            child.receiveShadow = true;

        }

    });

}, undefined, function (error) {

    console.error(error);

});


var spotLight = new THREE.SpotLight(0xffffff, 1 );
spotLight.position.set(10, 30, 20);
spotLight.angle = 0.4;
spotLight.penumbra = 0.05;
spotLight.decay = 1;
spotLight.distance = 2000;

spotLight.castShadow = true;
scene.add(spotLight);

spotLight.target.position.set(3, 0, - 3);
scene.add(spotLight.target);
camera.position.set(-3, 3.1, 1.1)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//controls.update();

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    renderer.setSize(sizes.width, sizes.height);
    camera.updateProjectionMatrix()
    animate()
});

THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
    // All textures are finished loading when loaded === total
    console.log(loaded)
    console.log(total)

};

gsap.registerPlugin(ScrollTrigger);

let car_anim = gsap.timeline()


// Full Height

car_anim.to(camera.position, {
    z: 10, ease: "power1.inOut", scrollTrigger: {

        trigger: "#htmlContent",
        scrub: 1,

        start: "top top",
        end: "bottom bottom",
        markers: true,
        pin: "#hero3D"
    }
})

function animate() {
    requestAnimationFrame(animate);
    //
    renderer.render(scene, camera);
}
animate();