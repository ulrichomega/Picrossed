export class PicrossBoard {

    // The board itself, if true block is filled in
    // TODO: Encapusalte contents of each cell to allow more interesting contents?
    private board: boolean[][];

    // The possibilities for columns, first index is column
    private columnPossiblities: number[][];

    // The possibilities for row, first index is row
    private rowPossiblities: number[][];

    /**
     * constructor
     */
    public constructor(filename: string) {
        this.ReadFromFile(filename);
    }

    /**
     * Solve
     */
    public Solve() {
        // TODO: Solve the puzzle
    }

    /**
     * ReadFromFile
     */
    public ReadFromFile(filename: string): boolean {

        // Currently unimplemented
        return false;
    }
}
