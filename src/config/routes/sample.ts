import SamplePage from '../../pages/sample';
import SampleA from '../../pages/sample/sample-a';
import SampleB from '../../pages/sample/sample-b';
export const sampleRoutes = {
  path: '/sample',
  //   exact: false,
  title: 'Sample',
  component: SamplePage,
  routes: [
    { path: '/a', title: 'Sample A', exact: true, component: SampleA },
    { path: '/b', title: 'Sample B', exact: true, component: SampleB },
  ],
  // auth: false,
};
