import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import { Date } from './date.js';

$("#date").submit(function(event) {
  event.preventDefault();
  let day = $("#day").val();
  let month = $("#month").val();
  let year = $("#year").val();
  let date = new Date(day, month, year);
  console.log(date);
});