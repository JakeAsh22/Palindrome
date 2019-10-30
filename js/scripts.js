var flippedWord=[];
var paliChecker = true;
$(document).ready(function()
{
  $("form#formInput").submit(function(event)
  {
    event.preventDefault();
    var word=$("#wordInput").val();
    var ogWord=word.split('');
    console.log(ogWord.length)
    var count=0;
    for(var i=ogWord.length-1;i>=0;i--)
    {
      flippedWord[i]=ogWord[count];
      count++;
    }
    for (var j = 0; j < ogWord.length; i++)
    {
      if (flippedWord[count]!=ogWord[count])
      {
        paliChecker = false;
        break;
        console.log(paliChecker);
      }
    }
    console.log(flippedWord);
  })
})
