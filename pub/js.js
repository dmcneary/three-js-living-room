function init() {
    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer({ antialias: true});
    let camera = new THREE.PerspectiveCamera(55, 1024/908, 45, 30000);

    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load('./images/living-room_ft.jpg');
    let texture_bk = new THREE.TextureLoader().load('./images/living-room_bk.jpg');
    let texture_up = new THREE.TextureLoader().load('./images/living-room_up.jpg');
    let texture_dn = new THREE.TextureLoader().load('./images/living-room_dn.jpg');
    let texture_rt = new THREE.TextureLoader().load('./images/living-room_rt.jpg');
    let texture_lf = new THREE.TextureLoader().load('./images/living-room_lf.jpg');

    camera.position.set(-900, -200, -900);
    renderer.setSize(600, 400);
    document.getElementById('render-container').appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', renderer);
    controls.minDistance = 100;
    controls.maxDistance = 1500;


    function animate() {
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
        }

    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

    for (let i = 0; i < 6; i++) {
            materialArray[i].side = THREE.BackSide;
            let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
            let skybox = new THREE.Mesh( skyboxGeo, materialArray );
            scene.add( skybox );  
            animate();
        }
    }
init();