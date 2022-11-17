document.addEventListener('DOMContentLoaded', () => {
  const divRating = document.querySelector('.div-rating');
  const divThankYou = document.querySelector('.div-thank-you');
  const ratingBtns = document.querySelectorAll('.list-item-rating > button');
  const submitBtn = document.getElementById('btn-rating-submit');
  const spanRating = document.getElementById('span-user-rating');
  let rating;

  for (let i = 0; i < ratingBtns.length; i++) {
    const ratingBtn = ratingBtns[i];

    ratingBtn.addEventListener('click', (e) => {
      e.preventDefault();

      
      if (rating) {
        const oldSelected = document.getElementById(`rating-${rating}`);
        oldSelected.classList.remove('selected');
      }

      e.target.classList.add('selected');
      rating = e.target.id.slice(-1);
    });
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!rating) return false;

    divRating.classList.add('hide');
    divThankYou.classList.remove('hide');
    spanRating.innerHTML = `You selected ${rating} out of 5`;
  })

});