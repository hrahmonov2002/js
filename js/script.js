var intro = alert("Xush kelibsz!");
var first_name = prompt ("Ismingizni kiriting", "Hayitbek");
var age = prompt("Iltimos yoshingizni kiriting", 18);
var minAge = 16;

console.log(`Ismingiz: ${first_name}
Yoshingiz: ${age}`);

if (age >= minAge) {
    alert('Saytimizga xush kelibsz')
  } else if (age <= minAge) {
    alert('Uzr sayt faqat kottalar uchun')
  };
    
 

// var intro = alert("Xush kelibsz!");
// var first_name = prompt("Ismingiz nima?"). trim();
// var last_name = prompt("Familyangiz nima?"). trim();
// var age = prompt("Yoshingiz nechida?"). trim();
// var job = prompt("Kasbingizni kiriting!"). trim();
// var home = prompt("Yashash joyingizni kiriting?"). trim();
// var alert = alert("Rahmat");

// console.log(`Ismingiz: ${first_name} 

// Familyangiz: ${last_name} 

// Yoshingiz: ${age} 

// Kasbingiz: ${job} 

// Yashash manzilingiz: ${home}`);