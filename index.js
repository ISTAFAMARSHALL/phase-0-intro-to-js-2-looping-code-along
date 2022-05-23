const gifts = ["teddy bear", "drone", "doll"];
const giftCard = []

function writeCards(gifts) {
  
    for (let i = 0; i < gifts.length; i++) {

     giftCard[i] = `Thank you, ${gifts[i]}, for the wonderful surprise gift!`;

    };

return giftCard;

}

function countDown(count) {
    for (let i = count; count >= 0 ;count-1) {
        console.log(count--);
    }

}

