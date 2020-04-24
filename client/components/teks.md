                <div id="about" className="content-about-container">
               
                  <div>
                    <h1>{section.navaBar[1]}</h1>
                    <p id="main-about">{section.about}</p>
                  </div>

                  <div>
                    <p>{section.aboutStory}</p>
                    {/* <img src={'./img/boatYacht.jpg'}></img> */}
                  </div>
                  {/* <div>
                    <h2>FAVOURITE SOFTWARE</h2>
                    <p>{section.aboutStoryFavouriteApp}</p>
                  </div> */}

                  <div>
                  <h3 id='skills-title'>SKILLS</h3>
            
                    <p className='skills-container'>
                    JavaScript, HTML/CSS, React, Redux, Express, Sequelize, SQL, PostgreSQL, Git, GitHub, BASH
                    </p>
                 
                  </div>
                  <div className='icons-container'>
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/javascript.png"/></a>
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/react-native.png"/></a>
                
               
                
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/html.png"/></a>
                
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/css3.png"/></a>
                

                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/postgreesql.png"/></a>
                
                    </div>

                  <div className="about-backto-homepage">
                    <GoBackHome />
                  </div>
                </div>










                   <div id="blog-item-id" className="col-4 blog-item ">
    <div className='banner-blog'></div>

      <div className="blog-item-content">
        <div className='title-edited-container'>
        <h2 className='post-title'>{post.title}</h2>
        <div className='post-love-comment-views-container'>
          <div className='post-love-comment-views-item'><a>LOVE</a></div>
          <div className='post-love-comment-views-item'><a>LOVE</a></div>
          <div className='post-love-comment-views-item'><a>LOVE</a></div>
        </div>

        </div>
       

      </div>
    </div>


      {/* <h5 >
          Last edited: <span>{post.edited}</span>
        </h5>
        <h4>
          <Link to={readMore} className="display-more">
            Read more
          </Link>
        </h4>
        <div><p>{post.content}</p>
          </div> */}











          <div id="blog-item-id" className="blog-item ">
      <div className="banner-blog">
        <img className="banner-blog-img" src={post.imageUrl}></img>
      </div>

      <div className="blog-item-content">
        <div className="title-edited-container">
          <div className="title-container">
            <div className="title-container-item">
              {' '}
              <h2 className="post-title">
                {post.title}
                <span>
                  <Link to={readMore} className="display-more">
                    Read more
                  </Link>
                </span>
              </h2>
            </div>
          </div>

          <div className="post-love-comment-views-container">
            <div>
              <a>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <a>
                <i className="fa fa-comments" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <a>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>










          <div>
         <div id='banner-blog-main'></div>
       
        <div id="blog" className="content-blog-container container-uni">
        <div>
                  
                  <div id='blog-search'>
                    <input  id='search-input'
                      type="text"
                      name="search"
                      value={this.state.search}
                      onChange={this.handleChange}
                      placeholder="&#xF002;"
                      // placeholder={section.searchByTag}
                      
                    ></input>
                  </div>
                  <div></div>
                </div>
        

          <div className="row-blog">
          {translationVersion
            ? translationVersion.map((section, indx) => {
                return (
                  
                  <div key={indx}>
                     
             
                  </div>
                )
              })
            : null}
            {this.state.search.length === 0
              ? blogPosts
                ? blogPosts.map((post, indx) => {
                    return <Post key={indx} post={post} />
                  })
                : null
              : filtered
              ? filtered.map((post, indx) => {
                  return <Post key={indx} post={post} />
                })
              : null}
              {/* <div className='addpost-item-link'> 
                        <Link
                          to="/blog/addpost"
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                            padding: '5px',
                          }}
                        >
                          <i
                            className="fa fa-plus-circle"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <span>Add Post</span>
                      </div> */}
          </div>
          
          {/* <div>
            <GoBackHome />
          </div> */}
        </div>
      </div>