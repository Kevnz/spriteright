var SullyMenu = function() {
    
    this._renderThing = 
        new RenderThing(
            0, 10,
            50, 50,
            function() {
                draw_menu_box(this);
                $$.context.fillStyle    = 'white';
                $$.context.font         = '10px Arial';
                $$.context.textBaseline = 'top';
                $$.context.fillText( 'MENU', this.x+5, this.y+5);
                $$.context.fillText( 'ITEM', this.x+5, this.y+15);
                $$.context.fillText( 'LOL', this.x+5, this.y+25);
                $$.context.fillText( 'BUTTS', this.x+5, this.y+35);
            }
        );
        
    this.color = '#000099';
    this.move({
        x : -50,
        y : 10,
        time : 50
    });
}

SullyMenu.prototype = {

    /** From RendertThing **/
    move : function(data) { return this._renderThing.move(data); },
    doMove : function() { return this._renderThing.doMove(); },    
    shouldBeDrawn : function() { return this._renderThing.shouldBeDrawn(); },
    render : function() { return this._renderThing.render(); }

    /** Menu stuff **/
}
