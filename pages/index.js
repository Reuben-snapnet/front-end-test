import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import Feeds from '../components/feeds'
import { Toolbar } from '../components/toolbar'

export const Home = ({articles}) => {
    
  const [pageNumber, setPageNumber] = useState(0)

  const articlesPerPage = 2;
  const pagesVisited = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(articles.length / articlesPerPage)

  const displayArticles = articles.slice(pagesVisited, pagesVisited + articlesPerPage).map((article) => {
    return (
      <div  key={article.id} className="p-3 mb-10">
          <Feeds article={article} />
      </div>
    )
  })

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    console.log(pageNumber)

    return(
        <div className="flex text-center flex-col space-y-10 p-10 min-h-screen justify-center items-center">
            <Toolbar />

            <div className="">
                <h1 className="text-xl font-semibold">Current Events</h1>
                {displayArticles}
                <ReactPaginate
                  previousLabel={'Prev'}
                  NextLabel={'Next'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                  >
                </ReactPaginate>
            </div>
        </div>
    )
}



export const getServerSideProps = async pageContext => {
    
    const apiResponse = await fetch(
        `http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`
    );
  
    const articles = await apiResponse.json();
    
  
    return{
        props:{
            articles
        }
    }
  
  
  }


export default Home;