import {el, setChildren} from 'redom';

export const showCard = () => {
  const card = el('div', {className: 'card'})
  const p = el('p', {className: 'secure'}, 'Secure Checkout');
  const creditCard = el('div', {className: 'credit-card'},
    el('span', {className: 'card__number'}, 'xxxx xxxx xxxx xxxx'),
    el('div', {className: 'card__personal'},
      el('span', {className: 'card__name'}, 'John Doe'),
      el('span', {className: 'card__date'}, '04/24')));

  const form = el('form', {className: 'form', action: '#', id: 'form'})
  setChildren(form,
    el('div', {className: 'form__input-wrap form__input-wrap_holder'},
      el('label', {className: 'form__label form__holder-label'}, 'Card Holder'),
      el('input', {className: 'input input__holder', type: 'text', id: 'cardHolder'})),

    el('div', {className: 'form__input-wrap form__input-wrap_number'},
      el('label', {className: 'form__label form__number-label', for: 'cardNumber'}, 'Card Number'),
      el('input', {className: 'input input__number', id: 'cardNumber'})),

    el('div', {className: 'form__input-wrap form__input-wrap_date'},
      el('label', {className: 'form__label form__date-label', for: 'cardExpiry'}, 'Card Expiry'),
      el('input', {className: 'input input__date', id: 'cardExpiry', type: 'text'})),

    el('div', {className: 'form__input-wrap form__input-wrap_cvv'},
      el('label', {className: 'form__label form__cvv-label', for: 'cardCVV'}, 'CVV'),
      el('input', {className: 'input input__cvv', id: 'cardCVV', type: 'text'})),

    el('button', {className: 'form__button'}, 'CHECK OUT')
    );



  setChildren(card, p, creditCard, form);

  return el('div', {className: 'wrapper'}, card);
}

