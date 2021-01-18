import React from 'react';

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <nav className='nav'>
          <div className='page-header'>
            <span className='pull-left'>
              <a id='site-name' href='/'>furoのBlog</a>
            </span>
            <div>
              <div>主页</div>
              <div>归档</div>
              <div>标签</div>
              <div>目录</div>
              <div>规划</div>
              <div>关于我</div>
            </div>
          </div>
        </nav>
        
        {/* <div>文章列表</div>
        <div>底部</div> */}
      </div>
    ) 
  }
}
