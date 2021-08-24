import Home from './components/Home'
import Categories from './screens/admin/category/Categories'
import AddCategory from './screens/admin/category/AddCategory'
import EditCategory from './screens/admin/category/EditCategory'
import AddProduct from './screens/admin/product/AddProduct'
import Products from './screens/admin/product/Products'
import EditProduct from './screens/admin/product/EditProduct'
import HomePage from './screens/client/HomePage'

export default {
    mode:'history',
    routes: [
        {
            path:'/',
            component: Home
        },

        {
            path:'/admin/categories',
            component: Categories
        },

        {
            path:'/admin/addCategory',
            component: AddCategory
        },

        {
            path:'/admin/EditCategory',
            component: EditCategory,
            props: true,
            name: 'EditCategory'
        },

        {
            path:'/admin/addProduct',
            component: AddProduct
        },

        {
            path:'/admin/products',
            component: Products
        },

        {
            path:'/admin/EditProduct',
            component: EditProduct,
            props: true,
            name: 'EditProduct'
        },

        {
            path: '/home',
            component: HomePage
        }
    ]
}
