const assert = require('assert');
Feature('LikingResto');

Before(({I}) => {
  I.amOnPage('/#/like');
});

// Scenario('liking some retsos', ({I}) => {
//   I.seeElement('#posts');
//   I.see('', '#posts');

//   I.amOnPage('/');

//   for (let i = 1; i <= 3; i++) {
//     I.waitForElement('.title a', 20);
//     I.seeElement('.title a');
//     I.click(locate('.title a').at(i));
//     I.waitForElement('#likeButton', 20);
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/like');
//   I.seeElement('#posts');
// });

// Scenario('like and unlike one resto', ({I}) => {
//   // like dulu restonya

//   I.amOnPage('/');
//   I.seeElement('#posts');
//   I.waitForElement('.title a', 20);
//   I.seeElement('.title a');
//   I.click(locate('.title a').first());
//   I.waitForElement('#likeButton', 20);
//   I.click('#likeButton');
//   I.amOnPage('/#/like');

//   // unlike yang sudah di sukai tadi
//   I.seeElement('#posts');
//   I.waitForElement('.title a', 20);
//   I.seeElement('.title a');
//   I.click(locate('.title a').first());
//   I.waitForElement('#likeButton', 20);
//   I.click('#likeButton');
//   I.amOnPage('/#/like');
//   I.see('', '#posts');
//   pause();
// });

Scenario('Customer Review Test', ({I})=> {
  // pilih dulu data yang mau direview
  I.amOnPage('/');
  I.seeElement('#posts');
  I.waitForElement('.title a', 20);
  I.seeElement('.title a');
  I.click(locate('.title a').first());

  // mencoba input
  I.waitForElement('#form-review .form-group #nama', 20);
  I.seeElement('#nama');
  I.fillField('#nama', 'ola');
  I.waitForElement('#form-review .form-group #review', 20);
  I.seeElement('#review');
  I.fillField('#review', 'great');

  // submit hasil
  I.waitForElement('.btn-submit');
  I.seeElement('.btn-submit');
  I.click('.btn-submit');
});
