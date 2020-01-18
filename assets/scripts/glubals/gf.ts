import { Node } from "cc";
export let gf = {
    addClick: (th: Node, func: any) => {
        th.on("touch-start", func);
    },
    keyDown: (th: Node, func: any) => {
        th.on("keydown", func);
    },
}