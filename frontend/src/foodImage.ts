
export function getFoodImage(
  name: string,
  description = "",
  category = ""
): string {
  const dish = `${name} ${description} ${category}`.toLowerCase();

  // Specific salad images
  if (/paneer tikka salad/.test(dish))
    return "/images/panner-tikka-salad.jpg";

  if (/chicken tikka salad/.test(dish))
    return "/images/chicken-tikka-salad.jpg";

  if (/veg salad/.test(dish))
    return "/images/veg-salad.jpg";

  // Specific fried chicken images
  if (/chicken lollipop/.test(dish))
    return "/images/chicken-lollipop.jpg";

  if (/chicken wings/.test(dish))
    return "/images/chicken-wings.jpg";

  if (/chicken drumstick/.test(dish))
    return "/images/chicken-drumstick.jpg";

  if (/bucket chicken/.test(dish))
    return "/images/bucket-chicken.jpg";

  if (/boneless chicken strip/.test(dish))
    return "/images/boneless-chicken-strips.jpg";

  if (/chicken popcorn/.test(dish))
    return "/images/chicken-popcorn.jpg";

  if (/chicken strips/.test(dish))
    return "/images/chicken-strips.jpg";

  // Existing image mappings
  if (/waffle|biscoff crisp/.test(dish))
    return "/images/waffles.jpg";

  if (/pancake|hotcake/.test(dish))
    return "/images/pancakes.jpg";

  if (/burger|cheeseburger/.test(dish))
    return "/images/burger.jpg";

  if (/pizza|margherita|pepperoni/.test(dish))
    return "/images/pizza.jpg";

  if (/momos?|dumpling/.test(dish))
    return "/images/momos.jpg";

  if (/roll|wrap|shawarma|frankie|kathi/.test(dish))
    return "/images/rolls.jpg";

  if (/sandwich|submarine|panini|toastie/.test(dish))
    return "/images/sandwich.jpg";

  if (/soup|broth|rasam/.test(dish))
    return "/images/soup.jpg";

  if (/brownie|cake|cheesecake|pastry|cupcake|donut|doughnut|muffin|tart|lava cake/.test(dish))
    return "/images/cake.jpg";

  if (/ice cream|icecream|gelato|sundae|sorbet|kulfi/.test(dish))
    return "/images/ice-cream.jpg";

  if (/biryani|fried rice|pulao|pilaf|rice bowl|curd rice|lemon rice/.test(dish))
    return "/images/rice.jpg";

  if (/noodles?|pasta|spaghetti|macaroni|ramen|lasagna|penne|alfredo/.test(dish))
    return "/images/noodles.jpg";

  if (/salad|healthy bowl|veggie bowl|sprouts/.test(dish))
    return "/images/salad.jpg";

  if (/chicken|mutton|lamb|fish|seafood|prawn|shrimp|crab|meat|steak|kebab|kabab/.test(dish))
    return "/images/non-veg.jpg";

  if (/paneer|dal|curry|masala|dosa|idli|naan|roti|chapati|parotta|paratha|thali|korma|kofta|tikka|tandoori|vada|uttapam|sambar/.test(dish))
    return "/images/indian.jpg";

  if (/milkshake|shake|smoothie|juice|lemonade|mojito|iced tea|cold coffee|coffee|tea|latte|cappuccino|hot chocolate|beverage|drink/.test(dish))
    return "/images/drinks.jpg";

  // Sandwiches
if (/sandwich/.test(dish))
  return "/images/sandwich.jpg";

// Snacks
if (/fries|nuggets|toast|omelette|samosa/.test(dish))
  return "/images/snacks.jpg";

// Chaat
if (/chaat|bhel puri|pani puri|aloo tikki/.test(dish))
  return "/images/chaat.jpg";

// Maggi
if (/maggi/.test(dish))
  return "/images/maggi.jpg";

// Rolls
if (/\broll\b/.test(dish))
  return "/images/rolls.jpg";

// Wraps
if (/wrap/.test(dish))
  return "/images/wraps.jpg";

// Momos
if (/momos?/.test(dish))
  return "/images/momos.jpg";

// Milkshakes
if (/Shake|milkshake/.test(dish))
  return "/images/shakes.jpg";

// Juices
if (/juice/.test(dish))
  return "/images/juice.jpg";

// Other drinks
if (/rose milk|soda|fresh lemon|lime mint/.test(dish))
  return "/images/drinks.jpg";

if (/hakka.*noodle|noodle.*hakka/i.test(dish))
  return "/images/hakka-noodles.jpg";

if (/schezwan.*(rice|noodle)|(rice|noodle).*schezwan/i.test(dish))
  return "/images/schezwan-rice.jpg";

if (/thai.*curry|red.*curry|green.*curry/i.test(dish))
  return "/images/thai-curry.jpg";

if (/grill.*paneer/i.test(dish))
  return "/images/grilled-paneer.jpg";

if (/grill.*chicken/i.test(dish))
  return "/images/grilled-chicken.jpg";

if (/curd rice/i.test(dish))
  return "/images/curd-rice.jpg";

if (/sambar rice|sambhar rice|dal khichdi|dal tadka/i.test(dish))
  return "/images/comfort-food.jpg";

if (/poori bhaji|aloo paratha|dosa|idli|vada|indian breakfast/i.test(dish))
  return "/images/indian-breakfast.jpg";

if (/salad/i.test(dish))
  return "/images/salad.jpg";

if (/paneer tikka/i.test(dish))
  return "/images/paneer-tikka.jpg";

if (/chicken tikka|tandoori chicken|chicken 65|chilli chicken/i.test(dish))
  return "/images/chicken-starters.jpg";

if (/biryani/i.test(dish))
  return "/images/biryani.jpg";

if (/naan|kulcha|chapatti|chapati|phulka|tandoori roti/i.test(dish))
  return "/images/indian-breads.jpg";

if (/paneer curry|paneer makhani|kadhai paneer|dal makhani/i.test(dish))
  return "/images/paneer-curry.jpg";

if (/chicken curry|butter chicken|kadhai chicken|chettinad chicken/i.test(dish))
  return "/images/chicken-curry.jpg";

if (/fish curry|meen moilee|grill fish/i.test(dish))
  return "/images/fish-curry.jpg";

if (/potato wedges/i.test(dish))
  return "/images/potato-wedges.jpg";

// Nuggets
if (/nuggets?/.test(dish))
  return "/images/nuggets.jpg";

// Snacks
if (/fries|toast|omelette/.test(dish))
  return "/images/snacks.jpg";

//Samosa
if (/samosa/i.test(dish)) return "/images/samosa.jpg";

// Nuggets
if (/nuggets?/i.test(dish))
  return "/images/nuggets.jpg";

// Maggi
if (/maggi/i.test(dish)) {
  return "/images/maggi.png";
}

// Chaat
if (/chaat|bhel puri|pani puri/.test(dish))
  return "/images/chaat.jpg";

// Fresh juices
if (/juice/.test(dish))
  return "/images/juice.jpg";

// Other drinks
if (/rose milk|fresh lemon|soda|jaljeera|lime mint/.test(dish))
  return "/images/drinks.jpg";

if (/waffle|waffles/.test(dish))
  return "/images/waffle.jpg";

if (/\bsoup\b/.test(dish))
  return "/images/soup.jpg";

if (/fries/i.test(dish)) return "/images/fries.jpg";

if (/tender/i.test(dish)) return "/images/tenders.jpg";

if (/garlic bread/i.test(dish)) return "/images/breads.jpg";

if (/ice cream/i.test(dish)) return "/images/ice-cream.jpg";

if (/wing/i.test(dish)) return "/images/wings.jpg";

if (/strip/i.test(dish)) return "/images/strips.jpg";

if (/drumstick|drip/i.test(dish)) return "/images/drumsticks.jpg";

  return "/images/default.jpg";
}
