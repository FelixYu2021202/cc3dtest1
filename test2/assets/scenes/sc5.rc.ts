import { _decorator, Component, CameraComponent, ModelComponent, systemEvent, Mesh, geometry, EventTouch, SystemEventType, director, Touch } from "cc";
const { ccclass, property } = _decorator;

@ccclass("sc5rc")
export class sc5rc extends Component {

    @property({ type: CameraComponent })
    cameraComp: CameraComponent = null;
    @property({ type: ModelComponent })
    cube: ModelComponent = null;

    @property({ type: Mesh })
    mesh: Array<Mesh> = [];

    ray: geometry.ray = new geometry.ray()

    onEnable() {
        systemEvent.on(SystemEventType.TOUCH_START, this.touchStarted, this);
    }
    onDisable() {
        systemEvent.off(SystemEventType.TOUCH_START, this.touchStarted);
    }
    touchStarted(touch: Touch, event: EventTouch) {
        this.cameraComp.screenPointToRay(touch._point.x, touch._point.y, this.ray);
        let scene = director.getScene().renderScene;
        if (scene.raycastSingleModel(this.ray, this.cube.model)) {
            let model = scene.rayResultSingleModel;
            for (let i = 0; i < model.length; i++) {
                const one = model[i];
                if (one.node.uuid == this.cube.node.uuid) {
                    this.turnMesh(this.cube, this.mesh);
                }
            }
        }
    }
    turnMesh(modelComp: ModelComponent, meshs: Array<Mesh>): Mesh {
        let backMesh = modelComp.mesh;
        modelComp.mesh = meshs[Math.floor(Math.random() * meshs.length)];
        if (modelComp.mesh == backMesh) {
            return this.turnMesh(modelComp, meshs);
        } else {
            return modelComp.mesh;
        }
    }
}
