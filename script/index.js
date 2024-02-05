import {setChildren} from 'redom';
import {showCard} from './showCard.js';
import CreditCardInputMask from "credit-card-input-mask";
import RestrictedInput from 'credit-card-input-mask';

setChildren(document.body, showCard());

const cardHolder = document.querySelector('#cardHolder');
const cardName = document.querySelector('.card__name');
const cardNumber = document.querySelector('#cardNumber');
const cardNum = document.querySelector('.card__number');
const cardExpiry = document.querySelector('#cardExpiry')
const cardDate = document.querySelector('.card__date');
const cardCVV = document.querySelector('#cardCVV');

cardHolder.addEventListener('input', () => {
  cardName.textContent = cardHolder.value;
});

const formattedCreditCardInput = new CreditCardInputMask({
  element: document.querySelector("#cardNumber"),
  pattern: "{{9999}} {{9999}} {{9999}} {{9999}}",
});

cardNumber.addEventListener('input', () => {
  cardNum.textContent = cardNumber.value
});

const regexp = /(0*[1-9]|1[012])\/(2[4-9])/g
cardExpiry.addEventListener('input', (e) => {
  e.preventDefault();
  if (!regexp.test(cardExpiry.value)) {
    cardDate.textContent = 'Введите правильный срок действия карты в формате mm/yy';
    cardDate.style.textAlign = 'center';
    cardDate.style.fontSize = '11px'
  }

  cardExpiry.value = cardExpiry.value.replace(regexp, (d) => {
    cardDate.textContent = d;
    cardDate.style.textAlign = 'right'
    cardDate.style.fontSize = '14px'
    return d;
  });
})

cardCVV.addEventListener('input', () => {
  cardCVV.value = '___';
});
