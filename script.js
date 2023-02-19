const form = document.getElementById('order-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const size = document.getElementById('size').value;
  
  if (name !== '' && size !== '') {
    alert(`Thank you for your order, ${name}! Your size is ${size}.`);
    form.reset();
  } else {
    alert('Please fill in all required fields.');
  }
});