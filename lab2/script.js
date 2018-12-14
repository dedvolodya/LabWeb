
var textHints = (function () {
  var _words = ["div","head","body","style","background","background-color"];
  var _selectedLine;

  function _getWordLst(inTxt) {
    var newWords = [];
    for (var i = 0; i < _words.length && newWords.length < 10; i++){
 			if (_words[i].indexOf(inTxt) == 0) {
 				newWords.push(_words[i]);
 			}
 	  }
 		return newWords;
  }
  function _downKey() {
    var newSelLine = _selectedLine.nextSibling;
    if (newSelLine) {
		  _selectedLine.removeAttribute('class');
		  newSelLine.setAttribute('class', "selected");
		  _selectedLine = newSelLine;
    }
  }
  function _upKey() {
    var newSelLine = _selectedLine.previousSibling;
    if (newSelLine) {
		  _selectedLine.removeAttribute('class');
		  newSelLine.setAttribute('class', "selected");
		  _selectedLine = newSelLine;
    }
  }
  function _refresh(textObj){
    var txt = textObj.value;
    var lst = document.getElementById("list");
    var first = true;
    var wordLst = _getWordLst(txt);
    while (lst.firstChild) {
		  lst.removeChild(lst.firstChild);
    }

    if (txt != "")
      for (var i = 0; i < wordLst.length; i++){
        var line = document.createElement('li');
        if (first) {
          line.setAttribute('class', "selected");
          _selectedLine = line;
				  first = false;
        }
        line.innerHTML = wordLst[i];
        lst.appendChild(line);
		  }
  }
  function keyProc() {
    var textObj = document.getElementById("textField");
    if (event.keyCode == 40) {
		  _downKey();
    }
    else if (event.keyCode == 38) {
		  _upKey();
    }
    else if (event.keyCode == 13) {
		  textObj.value = _selectedLine.innerHTML;
		  var lst = document.getElementById("list");
		  while (lst.firstChild) {
        lst.removeChild(lst.firstChild);
		  }
    }
    else {
		  _refresh(textObj);
    }
  }
  function add(){
    var textObj = document.getElementById("textField");
    var isWord = false;

    for (var i = 0; i < _words.length; i++) {
      if (textObj.value == _words[i])
        isWord = true;
    }

    if (!isWord)
      _words.push(textObj.value);
  }
  function del(){
    var textObj = document.getElementById("textField");

    for (var i = 0; i < _words.length; i++) {
      if (textObj.value == _words[i])
        _words.splice(i,1);  
    }
  }
  return {
    keyProcess: keyProc,
    addWord: add,
    deleteWord: del
  };
} ());