const checkIfPathClear = require('./utils/checkIfPathClear');

function checkIfValidTarget(targetTile, sourceUnit, board, units){
    if(targetTile.isPassable && sourceUnit.actionsLeft >= 2){
        return checkIfPathClear(targetTile, sourceUnit, board);
    }else{
        return false;
    }
}
function useAction(targetTile, sourceUnit, game){
    console.log('Moving Unit');
    game.setUnit(sourceUnit.id, {
        x:targetTile.x,
        y:targetTile.y,
        actionsLeft:sourceUnit.actionsLeft-2
    });
}
module.exports={
    checkIfValidTarget:checkIfValidTarget,
    useAction:useAction,
    color:"white",
    name:"move",
    ref:"move",
    img:"move.svg"
}