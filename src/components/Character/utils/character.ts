import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const avatarPalette = {
  skin: new THREE.Color("#d6a284"),
  hand: new THREE.Color("#cc9a7e"),
  hair: new THREE.Color("#101114"),
  eyebrow: new THREE.Color("#17181c"),
  shirt: new THREE.Color("#8b4513"),
  pants: new THREE.Color("#111111"),
};

const asStandardMaterial = (material: THREE.Material) =>
  material.clone() as THREE.MeshStandardMaterial;

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                if (mesh.material) {
                  if (mesh.name === "BODY.SHIRT") {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = avatarPalette.shirt;
                    newMat.roughness = 0.95;
                    mesh.material = newMat;
                  } else if (mesh.name === "Pant") {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = avatarPalette.pants;
                    newMat.roughness = 0.98;
                    mesh.material = newMat;
                  } else if (
                    ["Face.002", "Ear.001", "Neck"].includes(mesh.name)
                  ) {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = avatarPalette.skin;
                    newMat.roughness = 0.92;
                    newMat.metalness = 0.02;
                    mesh.material = newMat;
                  } else if (mesh.name === "Hand") {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = avatarPalette.hand;
                    newMat.roughness = 0.95;
                    mesh.material = newMat;
                  } else if (mesh.name === "Hair") {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = avatarPalette.hair;
                    newMat.roughness = 1;
                    mesh.material = newMat;
                    mesh.scale.set(1.12, 1.18, 1.08);
                    mesh.position.set(0.02, 0.2, 0.04);
                    mesh.rotation.set(0.03, -0.08, -0.14);
                  } else if (mesh.name === "Eyebrow") {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = avatarPalette.eyebrow;
                    newMat.roughness = 0.9;
                    mesh.material = newMat;
                    mesh.position.set(0, 0.02, 0);
                  } else if (
                    mesh.name === "CAP.001" ||
                    mesh.name === "CAP.002"
                  ) {
                    mesh.visible = false;
                  } else if (mesh.name === "Shoe") {
                    const newMat = asStandardMaterial(
                      mesh.material as THREE.Material
                    );
                    newMat.color = new THREE.Color("#101010");
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
