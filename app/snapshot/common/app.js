var app = {

    getElt: function(id) {
        var elt;
        
        if (id) {
            if (typeof $ !== "undefined") {
                elt = $(id);
                if (elt && elt[0]) {
                    return elt[0];
                }
            } else {
                if (typeof id === "object") {
                    return id;
                    
                } else if (typeof id === "string") {
                    return document.querySelector(id);
                }
            } 
        } 
        return undefined;
    },
    
    draw: function (x, y) {
        var canvas = app.getElt('#paper');
        if (canvas && canvas.getContext) {
            var ctx = canvas.getContext('2d');

            y = (y || parseInt(canvas.height / 2));
            x = (x || parseInt(canvas.width / 2));

            ctx.beginPath();
            ctx.arc(x, y, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.stroke();
            ctx.closePath();

            ctx.moveTo(x + 35, y);
            ctx.beginPath();
            ctx.arc(x, y, 35, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.stroke();
            ctx.closePath();

            ctx.moveTo(x - 10, y - 10);
            ctx.beginPath();
            ctx.fillStyle = '#454545';
            ctx.arc(x - 15, y - 10, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.moveTo(x + 25, y - 10);
            ctx.beginPath();
            ctx.fillStyle = '#454545';
            ctx.arc(x + 20, y - 10, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.textBaseline = "top";
            ctx.shadowColor = "#676767";
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 1;
            ctx.shadowBlur = 5;

            ctx.font = "12px Arial";
            ctx.fillText("Powered by catjs", x + 50, y + 50);
            ctx.stroke();
            ctx.closePath();
        } else {
            console.warn("[app] failed to resolve the canvas element");
        }
    }
};