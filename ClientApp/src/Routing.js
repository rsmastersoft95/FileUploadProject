
import { HomeComponent } from './components/home/Home';
import { AboutComponent } from './components/about/About';

const Router = [
    {
        index: true,
        component: <HomeComponent />
    },
    {
        path: '/about',
        component: <AboutComponent />
    }
];


export { Router };