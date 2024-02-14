import { Card } from "./Card.js";
import { range } from "./Util.js";

export class FreeCells {

    private freeCells : (Card | null)[] = range(4).map(_ => null);

    get(index : number) {
        return this.freeCells[index];
    }

    set(index : number, card : Card | null) {
        if (!this.validate(this.freeCells[index], card))
            return false;

        this.freeCells[index] = card;
        return true;
    }

    indexOf(card : Card) {
        return this.freeCells.indexOf(card);
    }

    validate(freeCell : Card | null, card : Card | null) {
        return (freeCell !== null && card === null) || (freeCell === null && card !== null);
    }

    getEmptyCellCount() {
        return this.freeCells.filter(x => x === null).length;
    }

    getFirstFreeCellIndex() {
        return this.freeCells.indexOf(null);
    }
}

