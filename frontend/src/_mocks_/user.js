import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';
import companies from '../utils/companies';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: sample(companies()),
  isVerified: true,
  status: sample(['active']),
  role: sample([
    'Mentor',
  ])
}));

export default users;
