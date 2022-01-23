AFRAME.registerComponent("move-box",{
    schema: {
        moveX: {type: "number", default: 1}
    },
    tick: function() {
        this.data.moveX = this.data.moveX + 0.01
        var pus = this.el.getAttribute("position")
        pus.x = this.data.moveX;
        this.el.setAttribute("position", {x:pus.x, y:pus.y, z:pus.z})
    }
    
})