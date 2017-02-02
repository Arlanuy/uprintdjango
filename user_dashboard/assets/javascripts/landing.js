$(document).ready(function() {
  $('.menu .item').tab();
});

function signUpCustomer() {
  $('.signup-customer').css("display", "block");
  $('.signup-shop').css("display", "none");
  $('.sign-up-form').css("display", "none");
  $('.form-padding-signup').css("display", "block");
}

function signUpShop(){
  $('.signup-shop').css("display", "block");
  $('.signup-customer').css("display", "none");
  $('.sign-up-form').css("display", "none");
  $('.form-padding-signup').css("display", "block");
  $('.signup-shop-1').css("display", "block");
  $('.signup-shop-next').css("display", "none");  
}

function signUp(){
  $('.sign-up-form').css("display", "block");
  $('.signup-customer').css("display", "none");
  $('.signup-shop').css("display", "none");
  $('.form-padding-signup').css("display", "none");
}

function signUpShopNext(){
  $('.signup-shop-1').css("display", "none");
  $('.signup-shop-next').css("display", "block");
}
