import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import checkmarkSquare2Fill from '@iconify/icons-eva/checkmark-square-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'project board',
    path: '/dashboard/project',
    icon: getIcon(checkmarkSquare2Fill)
  },
  {
    title: 'group members',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Resources',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  /*{
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },*/
];

export default sidebarConfig;
