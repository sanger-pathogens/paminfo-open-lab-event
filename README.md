# PaM Informatics - Interactive Open Lab Workshop

Welcome to your interactive Software Developer Workshop! Please follow the instructions below:

## Requirements

1. Have [Node.js](https://nodejs.org/en/) installed. 

2. Clone the repository:
```
git clone https://github.com/sanger-pathogens/paminfo-open-lab-event.git
```
3. Install [VSCode](https://code.visualstudio.com/download):

4. Open your project in VSCode and install the suggested Svelte plugin.

5. Run the following in your integrated terminal:
```
npm install
npm run dev
```
4. Visit http://localhost:3000 to see your changes locally/live


## Important

The files you will need to edit are:

- `src/routes/ExerciseOne.svelte`
- `src/routes/ExerciseTwo.svelte`
- `src/routes/ExerciseThree.svelte`

There is no need to explore the rest of the repository contents. 

Follow the instructions you see on: http://localhost:3000

## Exercises

1. Onclick event

- Create a button which displays a "Hello World" message each time the button gets clicked (either as via console log or alert)
- Change the style of your button: e.g. make the background black/the text white

2. Fix the bug

- A 'file_format' object is being imported from `./constant_store.svelte`, but is not properly displaying "name" property values. Troubleshoot the issue so that instead of "undefined", you see the correct object values, meaning:
```
FASTA
FASTQ
BAM
SAM
VCF
GFF
```

3. Create and Populate a table

* Using the imported `file_format` object, display all of the object properties/property values in a table. The style for the table element has already been provided in `src/routes/+page.svelte`.

## Useful links

- [Button Example](https://svelte.dev/repl/f9e5429cd9d343179a44478587a11747?version=3.49.0)
- [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

