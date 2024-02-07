import notFoundImage from './../../assets/img/notFound.webp'
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='NotFoundPage'>
            <img src={notFoundImage} alt="" />
        </div>
    )
}

export default NotFoundPage