// react
import React, {useState, useEffect, useContext} from 'react'

// router
import { useParams, Link } from 'react-router-dom';

// components
// import TestImg from '../components/utils/test2.png';
import icons from '../components/utils/icons';
import BlogCard from '../components/utils/BlogCard';
import SectionHeading from '../components/utils/sectionHeading';
import ArticlePreloader from '../components/utils/articlePreloader';


// costom hooks
import useFetch from '../hooks/useFetch';
import usePost from '../hooks/usePost';

import { AppContext } from '../hooks/AppContext';

const SingleBlogPage = () => {

    const {appRoutes} = useContext(AppContext);

    const { slug, id } = useParams();
    const fetchState = useFetch(`blogs/${slug}`);
    const likesfetchState = useFetch(`reactions/blogs/${slug}`);
    const commentfetchState = useFetch(`blog_comment/${slug}`);

    const [ snippetOpen, setSnippetOpen ] = useState(false);

    useEffect(() => {
        document.querySelectorAll(".show-mobile-reactions")
            .forEach(btn => btn.addEventListener('click', () => {
                btn.nextSibling.classList.toggle("visible")
            } ))
    }, [])

    return (
        <React.Fragment>
            {
                !fetchState.data
                &&
                <ArticlePreloader />
            }
            {
                fetchState.data
                &&
                <section className="article container grid">
                    <div className="article-start-infor grid">
                        <h4 className="article-heading">{fetchState.data.title}</h4>
                    </div>
                    <div className="divider"></div>
                    <div className="article-img-stats grid">
                        <div className="img-wrapper grid">
                            { fetchState.data.img_url && <img loading="lazy" src={fetchState.data.img_url} alt={fetchState.data.title} /> }
                        </div>
                        <BlogReactor slug={slug} likesfetchState={likesfetchState} commentfetchState={commentfetchState}/>
                    </div>
                    <div className="divider"></div>
                    <div className="article-time-stats flex">
                        <span className="start-date">{fetchState.data.added_on}</span>
                    </div>
                    <div className="article-category-tags flex">
                        {
                            fetchState.data.field.map(obj => {
                                return (
                                    <Link
                                        key={`${obj}-${id}`}
                                        to={`${appRoutes.blogs}/?search=${obj}`}
                                        className="btn br-secondary txt-secondary outlined tag roundbr"
                                    >
                                        {obj}
                                    </Link>
                                )
                            })
                        }
                        {
                            fetchState.data.stack.map(obj => {
                                return (
                                    <Link
                                        key={`${obj}-${id}`}
                                        to={`${appRoutes.blogs}/?search=${obj}`}
                                        className="btn br-secondary txt-secondary outlined tag roundbr"
                                    >
                                        {obj}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <p className="article-discription grid">
                        {fetchState.data.description}
                    </p>
                    {
                        fetchState.data.code_snippet
                        &&
                        <div className="article-code-snippet">
                            <div className="artcle-snippet-pre-detail flex">
                                <div className="left flex gap-sm">
                                    <span className="language txt-secondary">{fetchState.data.code_snippet_language}</span>
                                </div>
                                <div className="right flex">
                                    {/* <button className="showMore" onClick={() => setSnippetOpen(() => true)}>...</button> */}
                                    <button onClick={() => setSnippetOpen(() => true)}>Show</button>
                                    <button onClick={() => setSnippetOpen(() => false)}>Hide</button>
                                </div>
                            </div>
                            <pre className={`artcle-snippet-pre-body ${ snippetOpen ? "open" : ""}`}>
                                {fetchState.data.code_snippet}
                            </pre>
                            
                            <div className="source-code flex">
                                <span className="label">Source: </span>
                                <span className="code-link">
                                    {
                                        fetchState.data.code_url ?
                                        <a
                                            href={fetchState.data.code_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {fetchState.data.code_url}
                                        </a>
                                        :
                                        <a
                                            href="https://www.github.com/phillipmugisa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://www.github.com/phillipmugisa
                                        </a>
                                    }
                                </span>    
                            </div>
                        </div>
                    }
                </section>
            }
            { commentfetchState.data && <Reactions fetchState={commentfetchState} /> }
            { fetchState.data && <RelatedBlog field={fetchState.data.field[0]} /> }
        </React.Fragment>
    );
}

const RelatedBlog = ({field}) => {

    const _fetchState = useFetch(`blogs/?search=${field}`);

    return (
        <section className="projects related container grid">
            <SectionHeading headingText={"Related Blog Posts"} classes="txt-secondary"/>
            { 
                _fetchState.data
                &&
                <div className={`blogs-body horizontal-scroll grid`}>
                    {
                        _fetchState.data.results.slice(0,3).map(obj => {
                        return (
                            <BlogCard key={obj.id} {...obj}/>
                            )
                        })
                    }
                </div>
            } 
        </section>
    )
}

const Reactions = ({fetchState}) => {
    return (
        <>
            { fetchState.data && (fetchState.data.count > 0) &&
                <section className="reactions container">
                    <h4 className="reactions-heading txt-secondary flex">
                        <span>Reactions</span>
                        <span className="reactions-count">({fetchState.data.count}+)</span>
                    </h4>
                    <div className="reaction-body-minimised grid visible">
                        <div className="article-reaction-items flex">
                            {
                                fetchState.data.result.map((obj) => {
                                    return (
                                        <div key={`min-${obj.id}`} className="reaction-item">
                                            <img loading="lazy" src={`https://phillipmugisa03.pythonanywhere.com${obj.user.img_url}`} alt={obj.user.username} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="show-all-reactions" onClick={() => {
                            document.querySelector('.reaction-body-full')
                                .classList.add("visible")
                            document.querySelector('.reaction-body-minimised')
                                .classList.remove("visible")
                        }}>
                            {icons.Options}
                        </button>
                    </div>
                    <div className="reaction-body-full mg-block-2 grid">
                        {
                            fetchState.data.result.map((obj) => {
                                return (
                                    <div key={obj.id} className="reaction-item grid">
                                        <div className="item-header flex">
                                            <div className="user-details flex">                                    
                                                <div className="item-image grid">
                                                    <img loading="lazy" src={`https://phillipmugisa03.pythonanywhere.com${obj.user.img_url}`} alt={obj.user.username} />
                                                </div>
                                                <h4 className="reactor-name txt-secondary">{obj.user.username}</h4>
                                            </div>
                                            {/* <div className="item-reaction-items flex">
                                                <div className="item">
                                                    {icons.Heart}
                                                    <div className="item-count">5</div>
                                                </div>
                                                <div className="item">
                                                    {icons.Share}
                                                </div>
                                                <div className="item">
                                                    {icons.Comment}
                                                </div>
                                            </div>
                                            
                                            <button className="show-mobile-reactions">
                                                {icons.Options}
                                            </button> */}
                                            <div className="item-reaction-items mobile flex">
                                                <div className="item">
                                                    {icons.Heart}
                                                    {/* <div className="item-count">5</div> */}
                                                </div>
                                                <div className="item">
                                                    {icons.Share}
                                                </div>
                                                <div className="item">
                                                    {icons.Comment}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="reaction-item-body grid">
                                            <div className="divider"></div>
                                            <p className="mg-block-sm">
                                                {obj.comment}
                                            </p>
                                            {
                                                obj.code_snippet
                                                &&
                                                <>
                                                    <pre className="reaction-snippet">
                                                        {obj.code_snippet}
                                                    </pre>
                                                    <button className="item-snippet-activator txt-secondary" onClick={(e) => e.target.previousSibling.classList.toggle('visible')}>View code Snippet</button>
                                                </>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            }
        </>
    )
}

const BlogReactor = ({slug, likesfetchState, commentfetchState}) => {
    
    const postLikeHandler = usePost(`reactions/blogs/${slug}`);

    const showCommentModel = (id) => {

        // dim background
        const mainElem = document.querySelector('.main-section');        
        if (!mainElem.classList.contains("fade"))
        {
            mainElem.classList.add("fade")
        }

        // show model on screen
        const model = document.querySelector("#comment-model");
        if (!model.classList.contains("in-view"))
        {
            model.classList.add("in-view");
            const blog_id_input_field = model.querySelector("#blog_id");
            // set model id input to id argumnet
            blog_id_input_field.value = id;
        }
    }

    // useEffect(() => {}, [likesfetchState])
    return (
        <div className="article-reaction-stats flex">
            <div className="item" onClick={() => postLikeHandler()}>
                {icons.Heart}
                { likesfetchState.data && (likesfetchState.data.count > 0) && <div className="item-count">{likesfetchState.data.count}</div> }
            </div>
            {icons.Share}
            <span onClick={() => showCommentModel(slug)}>

            <div className="item">
                {icons.Comment}
                { commentfetchState.data && (commentfetchState.data.count > 0) && <div className="item-count">{commentfetchState.data.count}</div> }
            </div>
            </span>
        </div>
    )
}
 
export default SingleBlogPage;
