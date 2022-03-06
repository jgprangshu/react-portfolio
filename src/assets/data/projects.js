import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import PizzaStoreImg from '../images/pizzaStore1.JPG';
import DoctorDealImg from '../images/doctorDeal.JPG';
import Covid19TrackerImg from '../images/covidApp.PNG';
import PJGImg from '../images/portfolio.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Pizza Store',
    desc:
      'A pizza store for a local delivery chain with React.js & FireBase!',
    img: PizzaStoreImg,
  },
  {
    id: uuidv4(),
    name: 'Pharma Deals',
    desc:
      'An app to help people get awesome deals on Pharma Products & Doctor Booking!',
    img: DoctorDealImg,
  },
  {
    id: uuidv4(),
    name: 'Covid19 Stats Tracker',
    desc:
      'Using this app you can get the current covid19 stats build with Node.js & React.js',
    img: Covid19TrackerImg,
  },
  {
    id: uuidv4(),
    name: "Mine Portfolio",
    desc:
      'A portfolio for show casing my work. The portfolio is made using ReactJs and Styled Components.',
    img: PJGImg,
  },
  {
    id: uuidv4(),
    name: 'Dummy',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
    img: ProjectImg,
  },
];

export default projects;
