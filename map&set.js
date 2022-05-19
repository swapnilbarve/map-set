function removeDuplicateCharacters(string) {
    return string.split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(removeDuplicateCharacters('abcadeecfb'));


var s = "abcadeecfb";
function prCharWithFreq(s)
{

	var d = new Map();

	s.split('').forEach(element => {

		if(d.has(element))
		{
			d.set(element, d.get(element)+1);
		}
		else
		{
			d.set(element , 1);
		}
	});



s.split('').forEach(element => {

	if(d.has(element) && d.get(element)!=0)
	{
		document.write(element + d.get(element) + " ");
		d.set(element, 0);
	}
});

}
prCharWithFreq(s);
