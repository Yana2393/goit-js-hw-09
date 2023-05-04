import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');



form.addEventListener('submit', (event) => {
  event.preventDefault();
  const stepValue = form.elements.step.value;
  const delayValue = form.elements.delay.value;
  const amountValue = form.elements.amount.value;
  for (let i = 0; i <= amountValue - 1; i++){
    createPromise(i, +delayValue + (+stepValue * i))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }   
    }, delay);
  })
}
