var number = 1;
var count = document.getElementById('count');
var incrementor = document.getElementById('incrementor');
incrementor.addEventListener('click', function onClick() {
	number = plusOne(count, number);
});

function plusOne(count, number) {
  number++;
  count.innerHTML = number;
  
  return number;
}
