// react
import React, { useState, useEffect } from 'react'

// router
import { useParams } from 'react-router-dom';

// components
import TestImg from '../components/utils/test2.png';
import icons from '../components/utils/icons';
import AppButton from '../components/utils/appButton';
import BlogCard from '../components/utils/BlogCard';
import SectionHeading from '../components/utils/sectionHeading';

const codeSnippet = `
from bs4 import BeautifulSoup as bs
import requests
import json
from twilio.rest import Client
import time

weblinks = { 
    'technology' : 'https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWUnlnQVAB',
    'sports' : 'https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWUnlnQVAB',
    'entertainment' : 'https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWUnlnQVAB'
}

def get_news(url):
    # request for html page
    res = requests.get(url)

    # parse to html
    page = bs(res.text, 'html.parser')

    # pick articles
    news = page.select('.xrnccd')

    data = {}
    for idx, story in enumerate(news):
        if idx < 20:
            story_title = story.find('h3', {'class' : 'ipQwMb ekueJc RD0gLb'}).select_one('.DY5T1d').getText()


            story_subtitle = story.select_one("h4.ipQwMb a").getText() if story.select_one("h4.ipQwMb a") else 'Not Found'

            discription = story.find("span", {"class" : "xBbh9"}).text if story.find("span", {"class" : "xBbh9"}) else "Not Found"

            story_img = story.find('img')['src'] if story.find('img') else "Not Found"

            links = "https://news.google.com" + story.find('a', {'class': 'DY5T1d RZIKme'}).get('href', None)[1:]

            story_source = story.find('a', {'class': 'wEwyrc AVN2gc uQIVzc Sksgp'}).getText()

            # store data
            data[idx] = {
                'title' : story_title,
                'subtitle' : story_subtitle,
                'source' : story_source,
                'discription' : str(discription),
                'link' : links,
                'story_img' : story_img
            }
        else:
            break

    # with open('data.json', 'w') as file:
    #     json.dump(data, file, indent=4, sort_keys=True)

    return data

def send_news(news):
    try:    
        account_sid = 'ACe7c7bffe4cfd9e0672f2426a95a8d4bf' 
        auth_token = '999f031d4c22bdf6cf80bd8752338549' 
        client = Client(account_sid, auth_token) 
        
        message = client.messages.create( 
                                    from_='whatsapp:+14155238886',    
                                    media_url = [news['story_img']] if news['story_img'] != 'Not Found' else "",
                                    body=f"*{news['title']}* \n *{news['subtitle']}* \n_{news['discription']}_ \n{news['link']} \n{news['source']}",      
                                    to='whatsapp:+256757375684',
                                ) 
        
        print(message.sid)
    except Exception as err:
        account_sid = 'ACe7c7bffe4cfd9e0672f2426a95a8d4bf' 
        auth_token = '999f031d4c22bdf6cf80bd8752338549' 
        client = Client(account_sid, auth_token) 
        
        message = client.messages.create( 
                                    from_='whatsapp:+14155238886',    
                                    body=f"*{err}*",      
                                    to='whatsapp:+256757375684',
                                ) 
        main()

def main():
    for _, url in weblinks.items():
        news = get_news(url)
        for item in news.values():
            send_news(item)

if __name__ == "__main__":
    while True:
        try:
            main()
            time.sleep(3600)
        except Exception as err:
            account_sid = 'ACe7c7bffe4cfd9e0672f2426a95a8d4bf' 
            auth_token = '999f031d4c22bdf6cf80bd8752338549' 
            client = Client(account_sid, auth_token) 
            
            message = client.messages.create( 
                                        from_='whatsapp:+14155238886',    
                                        body=f"*{err}*",      
                                        to='whatsapp:+256757375684',
                                    ) 
            continue
            `

const codeSnippet2 = `
for idx, story in enumerate(news):
        if idx < 20:
            story_title = story.find('h3', {'class' : 'ipQwMb ekueJc RD0gLb'}).select_one('.DY5T1d').getText()


            story_subtitle = story.select_one("h4.ipQwMb a").getText() if story.select_one("h4.ipQwMb a") else 'Not Found'

            discription = story.find("span", {"class" : "xBbh9"}).text if story.find("span", {"class" : "xBbh9"}) else "Not Found"

            story_img = story.find('img')['src'] if story.find('img') else "Not Found"

            links = "https://news.google.com" + story.find('a', {'class': 'DY5T1d RZIKme'}).get('href', None)[1:]

            story_source = story.find('a', {'class': 'wEwyrc AVN2gc uQIVzc Sksgp'}).getText()

            # store data
            data[idx] = {
                'title' : story_title,
                'subtitle' : story_subtitle,
                'source' : story_source,
                'discription' : str(discription),
                'link' : links,
                'story_img' : story_img
            }
        else:
            break
`

const SingleBlogPage = () => {

    const { slug, id } = useParams();

    const [ snippetOpen, setSnippetOpen ] = useState(false);

    useEffect(() => {
        document.querySelectorAll(".show-mobile-reactions")
            .forEach(btn => btn.addEventListener('click', () => {
                btn.nextSibling.classList.toggle("visible")
            } ))
    }, [])

    return (
        <React.Fragment>
            <section className="article container grid">
                <div className="article-start-infor grid">
                    <h3 className="article-heading">ChildsHope Charity Organization Website</h3>
                </div>
                <div className="article-img-stats grid">
                    <div className="img-wrapper grid">
                        <img src={TestImg} alt="test" />
                    </div>
                    <div className="article-reaction-stats flex">
                        {icons.Heart}
                        {icons.Share}
                        {icons.Comment}
                    </div>
                </div>
                <div className="article-time-stats flex">
                    <span className="start-date">August 2019</span>
                    <span> - </span>
                    <span className="end-date">November 2021</span>
                </div>
                <div className="article-category-tags flex">
                    <AppButton
                        classes="br-secondary txt-secondary outlined tag roundbr"
                        text = 'UI/UX Design'
                    />
                    <AppButton
                        classes="br-secondary txt-secondary outlined tag roundbr"
                        text = 'Web Development'
                    />
                    <AppButton
                        classes="br-secondary txt-secondary outlined tag roundbr"
                        text = 'Mobile App Development'
                    />
                </div>
                <p className="article-discription grid">
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                </p>
                <div className="article-code-snippet">
                    <div className="artcle-snippet-pre-detail flex">
                        <div className="left flex gap-sm">
                            <span className="language txt-secondary">Python</span>
                        </div>
                        <div className="right flex">
                            {/* <button className="showMore" onClick={() => setSnippetOpen(() => true)}>...</button> */}
                            <button onClick={() => setSnippetOpen(() => true)}>Show</button>
                            <button onClick={() => setSnippetOpen(() => false)}>Hide</button>
                        </div>
                    </div>
                    <pre className={`artcle-snippet-pre-body ${ snippetOpen ? "open" : ""}`}>
                        {codeSnippet}
                    </pre>
                    
                    <div className="source-code flex">
                        <span className="label">Source: </span>
                        <span className="code-link">www.github.com/phillipmugisa</span>    
                    </div>
                </div>
            </section>
            <section className="reactions container">
                <h4 className="reactions-heading txt-secondary flex">
                    <span>Reactions</span>
                    <span className="reactions-count">(20+)</span>
                </h4>
                <div className="reaction-body-minimised grid visible">
                    <div className="article-reaction-items flex">
                        <div className="reaction-item">
                            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                        </div>
                        <div className="reaction-item">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                        </div>
                        <div className="reaction-item">
                            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                        </div>
                        <div className="reaction-item">
                            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                        </div>
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
                    <div className="reaction-item grid">
                        <div className="item-body grid">
                            <div className="item-header flex">
                                <div className="user-details flex">                                    
                                    <div className="item-image grid">
                                        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                                    </div>
                                    <h4 className="reactor-name txt-secondary">Alex Maxwell</h4>
                                </div>
                                <div className="item-reaction-items flex">
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
                                </button>
                                <div className="item-reaction-items mobile flex">
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
                            </div>
                            <div className="reaction-item-body grid">
                                <div className="divider"></div>
                                <p>
                                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly.  He lay on his armour-like back, and if he lifted his head a little he could see his brown belly
                                </p>
                                <pre className="reaction-snippet">
                                    {codeSnippet2}
                                </pre>
                                <button className="item-snippet-activator txt-secondary" onClick={(e) => e.target.previousSibling.classList.toggle('visible')}>View code Snippet</button>
                            </div>
                        </div>
                    </div>
                    <div className="reaction-item grid">
                        <div className="item-body grid">
                            <div className="item-header flex">
                                <div className="user-details flex">                                    
                                    <div className="item-image grid">
                                        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                                    </div>
                                    <h4 className="reactor-name txt-secondary">Alex Maxwell</h4>
                                </div>
                                <div className="item-reaction-items flex">
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
                                </button>
                                <div className="item-reaction-items mobile flex">
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
                            </div>
                            <div className="reaction-item-body grid">
                                <div className="divider"></div>
                                <p>
                                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly.  He lay on his armour-like back, and if he lifted his head a little he could see his brown belly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects related container grid">
                <SectionHeading headingText={"Related Blog Posts"} classes="txt-secondary"/>
                <div className={`blogs-body horizontal-scroll grid`}>
                    <BlogCard blogId = {1}/>
                    <BlogCard blogId = {1}/>
                    <BlogCard blogId = {1}/>
                    <BlogCard blogId = {1}/>
                </div>
            </section>
        </React.Fragment>
    );
}
 
export default SingleBlogPage;