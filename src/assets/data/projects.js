import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/Weather_App.png';
import Portfolio from '../images/Portfolio.png'
import UTrackerImg from '../images/Paint_rental.jpeg';
import GreenCtgImg from '../images/Akatsuki.png';
import CoinTrackerImg from '../images/Faculty_db.png';
import CavinImg from '../images/Battle_of_Neighbouroods.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Paint Rental Application',
    desc:
      'An e-commerce platform for renting or purchasing paintings using ReactJS and ExpresssJS for front-end and back-end.',
    img: UTrackerImg,
    url: 'https://github.com/mani60/Paint_Rental_Application',
  },
  {
    id: uuidv4(),
    name: 'Akatsuki',
    desc:
      'An e-commerce website for anime merchandise, such as shirts, toys, books, and posters, with a focus on providing a smooth.',
    img: GreenCtgImg,
    url:'https://github.com/mani60/Akatsuki',
  },
  {
    id: uuidv4(),
    name: 'Faculty Dashboard',
    desc:
      'An interactive web application where Faculty can manage their classes, courses and students etc., in colleges.',
    img: CoinTrackerImg,
    url:'https://github.com/mani60/faculty_db',
  },
  {
    id: uuidv4(),
    name: 'Battle of the Neighborhoods',
    desc:
      'Using K-means clustering to identify suitable locations for gyms in Athens, Greece.',
    img: CavinImg,
    url:'https://github.com/mani60/Battle-of-the-Neighborhoods/blob/master/Battle-of-the-Neighborhoods.ipynb',
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'A responsive weather app using the AccuWeather API, which provides real-time weather updates.',
    img: ProjectImg,
    url:'https://mani60.github.io/WeatherApp.github.io/',
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'The first version of my portfolio is heavily inspired by Harry Potter and built using HTML, CSS, and JS.',
    img: Portfolio,
    url:'https://github.com/mani60/Manikanta-portfolio',
  },
];

export default projects;
