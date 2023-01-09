import { useEffect} from 'react';
import { connect } from 'react-redux'
import './ArticleList.css';
import Article from '../../user-interface/Article';
import Pagination from '../../user-interface/Pagination/Pagination';
import { getAllArticles } from '../../../redux/store/asyncReducer';
import { Spin, Alert } from 'antd';

const ArticleList = ({getArticlesData, articlesData, currentPage, totalPages, error, isLoad}) => {
    const createArticle = (item) => (
        <Article
          author={item.author}
          description={item.description}
          createdAt={item.createdAt}
          title={item.title}
          tagList={item.tagList}
          favoritesCount={item.favoritesCount}
          slug={item.slug}
          favorited={item.favorited}
          full={false}
          key={item.slug}
        />
    )
    
    let list = articlesData.map((article) => createArticle(article))


    useEffect(() => {
        getArticlesData(currentPage)
    }, [articlesData.length, currentPage, error, getArticlesData]);

    const spinner = <div className="spinner"><Spin /></div> 
    const errorMessage = (
        <div className='error'>
            <Alert 
                message="Упс, что-то пошло не так!"
                showIcon
                description="Пожалуйста, обновите страницу или обратитесь к администратору"
                type="error"/>
        </div>
    )

    return(
        <div className='container'>
            {isLoad ? spinner : list}
            {error.message ? errorMessage : null}
            <Pagination total={totalPages}/>
        </div>
    )   
}






function mapStateToProps(state){
    return{
        articlesData: state.data.articles,
        totalPages: state.data.totalPages,
        currentPage: state.data.currentPage,
        error: state.data.error,
        isLoad: state.data.isLoad
    }
}

function mapDispatchToProps(dispatch){
    return { getArticlesData: (page) => dispatch(getAllArticles(page)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);