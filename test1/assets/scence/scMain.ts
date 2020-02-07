import { _decorator, Component, Node, AnimationComponent, SystemEvent, EventMouse, systemEvent } from "cc";
import { gv } from "../scripts/glubals/gv";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    @property({ type: AnimationComponent })
    cubeAnim: AnimationComponent = null;
    @property({ type: Node })
    cube: Node = null;
    // serializableDummy = 0;

    start() {
        // gv.gf.keyDown(this.cube, (event: EventMouse) => {
        //     this.cubeAnim.play("scMain");
        // });
        systemEvent.on(SystemEvent.EventType.TOUCH_START, (event: EventMouse) => {
            console.log(1);
            if (event.getButton() === 0 || event.getButton() === 2) console.log(2);
        });
        systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, (event: EventMouse) => {
            console.log(3);
            if (event.getButton() === 0 || event.getButton() === 2) console.log(4);
        });

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
