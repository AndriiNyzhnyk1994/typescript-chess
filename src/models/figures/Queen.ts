import { Figure, FigureNames } from "./Figure"
import blackLogo from '../../assets/b_queen_png_128px.png'
import whiteLogo from '../../assets/w_queen_png_128px.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";


export class Queen extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN
    }
}