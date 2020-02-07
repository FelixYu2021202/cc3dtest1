import * as cc from "cc"
const { ccclass, property } = cc._decorator;

@ccclass("sc3")
export class sc3 extends cc.Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property({ type: cc.ParticleSystemComponent })
    private ps1: cc.ParticleSystemComponent = null;

    public colors = [
        cc.color(225, 0, 0),//red
        cc.color(0, 255, 0),//green
        cc.color(0, 0, 255),//blue
        cc.color(255, 255, 0),//yellow
        cc.color(255, 0, 255),//pink
        cc.color(0, 255, 255),//turquoise
        cc.color(255, 255, 255),//white
        cc.color(0, 0, 0)//black
    ]
    public colorsLength = this.colors.length - 1;

    start() {
        // this.ps1.colorOverLifetimeModule.color;
        // Your initialization goes here.
        this.schedule(() => {
        }, 2, this.colorsLength + 1 * 10)
    }

    turnColor() {
        this.ps1.colorOverLifetimeModule.color = this.colors;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
