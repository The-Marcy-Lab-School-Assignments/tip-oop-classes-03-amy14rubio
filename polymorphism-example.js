class Notebook {
  recordedText = [];

  constructor(color, pages) {
    this.color = color;
    this.pages = pages;
  }

  pagesLeft(pagesUsed) {
    return this.pages - pagesUsed;
  }

  recordIn(text) {
    this.recordedText.push(text);
    return `You wrote: '${text}'`;
  }
}

class sketchBook extends Notebook {
  recordedDrawing = [];

  constructor(color, pages) {
    super(color, pages);
  }

  recordIn(drawing) {
    this.recordedDrawing.push(drawing);
    return `Your new drawing is: ${drawing}`;
  }
}

class diary extends Notebook {
  #recordedText = [];

  constructor(color, pages) {
    super(color, pages);
  }

  recordIn(text) {
    this.#recordedText.push(text);
    return `${super.recordIn(text)} in your diary`;
  }
}

class agendaPlanner extends Notebook {
  recordedText = [];

  constructor(color, pages) {
    super(color, pages);
  }

  recordIn(text) {
    this.recordedText.push(text);
    return `${super.recordIn(text)} in your agenda`;
  }
}

class dottedJournal extends Notebook {
  recordedDrawing = [];
  recordedText = [];

  constructor(color, pages) {
    super(color, pages);
  }

  recordDrawing(drawing) {
    this.recordedDrawing.push(drawing);
    return `Your new drawing is: ${drawing}`;
  }

  recordText(text) {
    this.recordedText.push(text);
    return `${super.recordIn(text)} in your journal`;
  }
}
