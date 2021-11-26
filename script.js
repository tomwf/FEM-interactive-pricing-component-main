const pricing = [
  { pageview: '10K pageviews', price: 8 },
  { pageview: '50K pageviews', price: 12 },
  { pageview: '100K pageviews', price: 16 },
  { pageview: '500k pageviews', price: 24 },
  { pageview: '1M pageviews', price: 36 }
];

$('.range__slider').change(function() { 
  const index = this.value;
  $('.pageview').html(pricing[index].pageview.toUpperCase());
  $('.cost').html(pricing[index].price.toFixed(2));
});
