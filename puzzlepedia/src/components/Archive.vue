<template>
  <v-card>
    <v-card-title>
      Puzzle Archive
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="Puzzles"
      :search="search"
    >
      <template v-slot:item.instruction="{ item }">
        <v-btn
          icon
          :href="item.instruction_url"
          target="_blank"
        >
          <v-icon>
            mdi-link-variant
          </v-icon>
        </v-btn>
      </template>

      <template v-slot:item.puzzle="{ item }">
        <v-btn
          icon
          :href="item.puzzle_url"
          target="_blank"
        >
          <v-icon>
            mdi-link-variant
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Point', value: 'point' },
          { text: 'Total', value: 'total' },
          { text: 'Contest', value: 'contest' },
          { text: 'Category', value: 'category' },
          { text: 'Instruction', sortable: false, value: 'instruction'},
          { text: 'Puzzle', value: 'puzzle' },
          { text: 'Password', value: 'password' },
        ],
        Puzzles: [
          {
            name: 'Simple Loop',
            point: 4,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Simple Loop',
            point: 7,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Skyscrapers',
            point: 8,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Skyscrapers',
            point: 18,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Skyscrapers(Encoded)',
            point: 70,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Shikaku(Off-by-One)',
            point: 18,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Shikaku(Off-by-One)',
            point: 20,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Products(Off-by-One)',
            point: 31,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Products(Off-by-One)',
            point: 95,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Tapa',
            point: 17,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Tapa',
            point: 37,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Tapa(LITS)',
            point: 67,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Snake(Myopia)',
            point: 13,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Pentominoes(Myopia)',
            point: 34,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Pentominoes(Myopia)',
            point: 27,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Yajilin',
            point: 31,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Yajilin',
            point: 47,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Yajilin(Battleships)',
            point: 51,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Spiral Galaxies',
            point: 44,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Spiral Galaxies',
            point: 46,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Spiral Galaxies(Tetrominoes)',
            point: 79,
            total: 764,
            contest: 'PGP2019R1',
            category: 'PGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf',
          },
          {
            name: 'Classic Sudoku',
            point: 21,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Classic Sudoku',
            point: 27,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Classic Sudoku',
            point: 28,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Classic Sudoku',
            point: 30,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Classic Sudoku',
            point: 35,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Diagonal Sudoku',
            point: 21,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Quadruple Sudoku',
            point: 24,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Product Sudoku',
            point: 33,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Anti-Windoku',
            point: 65,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Big Bands Sudoku',
            point: 66,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Battenburg Little Killer Sudoku',
            point: 77,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Irregular Alternating Stripes Sudoku',
            point: 85,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
          {
            name: 'Distance Sudoku',
            point: 88,
            total: 600,
            contest: 'SGP2020R1',
            category: 'SGP',
            instruction_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf',
            puzzle_url: 'https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf',
          },
        ],
      }
    },
  }
</script>

