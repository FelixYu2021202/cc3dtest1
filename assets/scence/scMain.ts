import * as cc from "cc"
const { ccclass, property } = cc._decorator;

@ccclass("scMain")
export class scMain extends cc.Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    @property({ type: cc.Prefab })
    public pfChurch: cc.Prefab = null;
    // serializableDummy = 0;

    start() {
        // Your initialization goes here.
        let church = cc.instantiate(this.pfChurch);
        church.scale.x = 302
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
