import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Whiteboard Templates By Industry Leaders',
  'How should I select where I go to university? Who do I listen to - parents, teachers or friends?',
  'Does your ATAR mean everything? What can I do if I flunk my HSC?',
  "Alternative entry pathways - there's more than one way to your dream career!",
  'I really suck at maths - can I still study business at uni? YES!',
  'Companies and industries you might not already know, based on your interests!',
  'The main differences to expect from high-school to university',
  'A simple guide to social life at an Australian university!',
//   '40 Free Serif Fonts for Digital Designers',
//   'Examining the Evolution of the Typical Web Design Client',
//   'Katie Griffin loves making that homey art',
//   'The American Dream retold through mid-century railroad graphics',
//   'Illustration System Design',
//   'CarZio-Delivery Driver App SignIn/SignUp',
//   'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
//   'Tylko Organise effortlessly -3D & Motion Design',
//   'RAYO ?? A expanded visual arts festival identity',
//   'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
//   'Inside the Mind of Samuel Day',
//   'Portfolio Review: Is This Portfolio Too Creative?',
//   'Akkers van Margraten',
//   'Gradient Ticket icon',
//   'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
//   'How to Animate a SVG with border-image'
];

const posts = [...Array(7)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
