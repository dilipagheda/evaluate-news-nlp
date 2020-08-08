
import { handleSubmit, updateUI } from './js/formHandler'

//import scss files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/form.scss'

document.getElementById('user-form').addEventListener('submit', function(event){
    handleSubmit(event)
})
