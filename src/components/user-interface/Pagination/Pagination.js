import React from 'react';
import { Pagination as Pagin } from 'antd';
import './Pagination.css';
import {connect} from 'react-redux';
import {getCurrentPage} from '../../../redux/actions/apiActions'


const Pagination = ({current, total, setPage}) => {

  return (
    <div className="Pagination_wrapper">
      <Pagin 
        current={current} 
        total={total} 
        onChange={(page) => setPage(page)}
        pageSize={50}
      />
    </div>
  )
}



function mapStateToProps(state){
  return {current: state.data.currentPage}
}

function mapDispatchToProps(dispatch){
  return{setPage: (page) => dispatch(getCurrentPage(page))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
