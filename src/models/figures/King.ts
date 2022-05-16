import { Figure, FigureNames } from "./Figure"
import blackLogo from '../../assets/b_king_png_128px.png'
import whiteLogo from '../../assets/w_king_png_128px.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";


export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target) )
            return false
        if(this.cell.isEmptyVertical(target) 
        && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1))
            return true;
        if(this.cell.isEmptyHorizontal(target) 
        && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1))
            return true;
        if(this.cell.isEmptyDiagonal(target)
        && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1 || target.x === this.cell.x + 1 || target.x === this.cell.x - 1))
            return true;
    return false
    }
}