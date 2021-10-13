// PLEASE BE ADVISED THIS IS AN IMPROV CODE :D 
// refactor, using 10 best practices

let customerInfo = { //5. let instead of var
    address: 'Calea X 26',
  };
  
  function processOrder(customerInfo, basket, options) {
    const isAddressValid = vldAddr(customerInfo.address); //9. isAddressValid instead of ValidateAddress
    
    if (!isAddressValid) { //!variable instead of if variable === false
      return;
    }
  
    applyDiscount(basket.totalPrice);
  
    if (options.paymentMethod.cash) {
      pay(customerInfo.creditCard);
    }
    return `Dear ${customerInfo.name}, your order has been placed succesfully. Carrier service: ${options.carrier}`; //6. `message` instead of message + [...]
  }
  
  function pay(cardDetails) {
    validate_card_details(cardDetails);
    const status = makePayment();  
  
      return (status === 'ok');
      if (status === 'wrong input') { //1. === instead of ==
      return false;
    } else if (status === 'network err') { //1. === instead of ==
      throw new Error('some error :(');
    }
  }

  /* CAN ALSO BE REWRITTEN AS (RULE 8)
  if (status !=== 'ok') {
      if(status === 'wrong input') 
      return false
      else if (status === 'network err)
      throw new Error('some error :('));
  }
  else return true;*/
  
  function validate_card_details(card) {
    if (card.expiryDate > Date.now()) {
      validateName();
      validateCardNumber();
      validateIssuer();
      validateMerchant();
      // some random code, don't mind
      maxLength = Math.max.apply(null, cardType.lengths);
      if (options.maxLength) {
        maxLength = Math.min(options.maxLength, maxLength);
      }
    } else {
      return false;
    }
  }
  
  function vldAddr(address) {
    return (postalCode || address.line1); // a || b instead of a ? a : b
  }
  
  function applyDiscount(basket) {
    if (basket.price > 200 && basket.coupons && basket.coupons.tenOff) { //7. Merge the ifs
        totalPrice -= 10/100 * totalPrice;
    } 
    else {
      return basket.price;
    }
  }