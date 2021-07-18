import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import checkmarkSquare2Fill from '@iconify/icons-eva/checkmark-square-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: getIcon(homeFill)
  },
  {
    title: 'project board',
    path: '/dashboard/project',
    icon: getIcon(checkmarkSquare2Fill)
  },
  {
    title: 'Mentors on LinkU',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Resources and articles',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'profile',
    path: '/dashboard/profile',
    icon: getIcon(personFill)
  },
];

export default sidebarConfig;
