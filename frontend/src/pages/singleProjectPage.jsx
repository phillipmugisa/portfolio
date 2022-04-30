// react
import React from 'react'

// router
import { useParams } from 'react-router-dom';

// components
import TestImg from '../components/utils/test2.png';
import icons from '../components/utils/icons';
import AppButton from '../components/utils/appButton';
import { MinProjectCard } from '../components/utils/projectCards';
import SectionHeading from '../components/utils/sectionHeading';

const SingleProjectPage = () => {

    const { slug, id } = useParams();

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
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                </p>
                <div className="article-stacks-used grid gap-sm">
                    <h4 className="article-stacks-used-heading txt-secondary">Technologies Used.</h4>
                    <div className="article-stacks-used-body flex gap-sm">
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'Django'
                        />
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'React'
                        />
                        <AppButton
                            classes="br-secondary txt-secondary outlined tag roundbr"
                            text = 'Postgres'
                        />
                    </div>
                </div>
                <AppButton
                    classes="bg-primary txt-white visit-site"
                    text = 'Visit Project'
                />
            </section>
            <section className="projects related container grid">
                <SectionHeading headingText={"Related Projects"} classes="txt-secondary"/>
                <div className="section-body grid">                    
                    <MinProjectCard ProjectId={1}/>
                    <MinProjectCard ProjectId={1} />
                    <MinProjectCard ProjectId={1} />
                </div>
            </section>
        </React.Fragment>
    );
}
 
export default SingleProjectPage;