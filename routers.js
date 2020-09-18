import HelloWorld from './src/components/HelloWorld';
import Todo from './src/components/Todo'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/todo', component: Todo }
]

export default routes;