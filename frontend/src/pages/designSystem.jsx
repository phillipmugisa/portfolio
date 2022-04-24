import React from "react";
import AppButton from "../components/utils/appButton";
import Footer from "../components/utils/footer";
import Header from "../components/utils/header";

function DesignSystem() {
    return (
        <React.Fragment>
            <div className="container-fluid design-system grid">
                <div className="container design-system-child grid mg-block-1">
                    <div className="title wrapper grid alpha-100 bg-primary txt-white place-block-center">
                        <h4 className="section-title">Typography</h4>
                    </div>
                    <div className="body wrapper grid type">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <p>Paragraph</p>
                    </div>
                </div>
                <div className="container design-system-child grid mg-block-1">
                    <div className="title wrapper grid alpha-100 bg-primary txt-white place-block-center">
                        <h4 className="section-title">Buttons</h4>
                    </div>
                    <div className="body wrapper grid pd-1">
                        <div className="group grid gap1">
                            <h5 className="sub-title">Filled Buttons</h5>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="bg-primary txt-white"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="bg-secondary txt-white"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="bg-accent txt-white"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="bg-black txt-white"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton> 
                            </div>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="bg-primary txt-white roundbr"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="bg-secondary txt-white roundbr"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="bg-accent txt-white roundbr"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="bg-black txt-white roundbr"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton> 
                            </div>
                        </div>
                        <div className="group grid gap1">
                            <h5 className="sub-title">Outlined Buttons</h5>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="br-primary txt-primary outlined"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="br-secondary txt-secondary outlined"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="br-accent txt-accent outlined"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="br-black txt-black outlined"
                                    onClickUrl=''
                                >
                                    Web Development
                                </AppButton> 
                            </div>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="br-primary txt-primary outlined roundbr"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="br-secondary txt-secondary outlined roundbr"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="br-accent txt-accent outlined roundbr"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="br-black txt-black outlined roundbr"
                                    disabled = {true}
                                    onClickUrl=''
                                >
                                    Web Development
                                </AppButton> 
                            </div>
                        </div>
                        <div className="group grid gap1">
                            <h5 className="sub-title">Tags</h5>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="bg-primary txt-white tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="bg-secondary txt-white tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="bg-accent txt-white tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="bg-black txt-white tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                /> 
                            </div>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="br-primary txt-primary outlined tag"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="br-secondary txt-secondary outlined tag"
                                    text = 'Click Me'
                                    onClickUrl=''
                                >
                                    Click Me
                                </AppButton>
                                <AppButton
                                    classes="br-accent txt-accent outlined tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="br-black txt-black outlined tag"
                                    onClickUrl=''
                                >
                                    Web Development
                                </AppButton> 
                            </div>
                            <div className="flex gap-sm">
                                <AppButton
                                    classes="br-primary txt-primary outlined roundbr tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="br-secondary txt-secondary outlined roundbr tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="br-accent txt-accent outlined roundbr tag"
                                    text = 'Web Development'
                                    onClickUrl=''
                                />
                                <AppButton
                                    classes="br-black txt-black outlined roundbr tag"
                                    onClickUrl=''
                                >
                                    Web Development
                                </AppButton> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container design-system-child grid mg-block-1">
                    <div className="title wrapper grid alpha-100 bg-primary txt-white place-block-center">
                        <h4 className="section-title">Form components</h4>
                    </div>
                    <div className="body wrapper grid mg-block-1">
                        <form action="">
                            <fieldset className='grid'>
                                <legend>Input</legend>
                                <div className="form-group grid">
                                    <label htmlFor="name_field">Name</label>
                                    <input type="text" name="" id="name_field" />
                                </div>
                                <div className="form-group grid">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="" id="password" />
                                </div>
                                <div className="form-group grid">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="" id="email" />
                                </div>
                                <div className="form-group grid">
                                    <label htmlFor="search">Search</label>
                                    <input type="search" name="" id="search" />
                                </div>
                                <div className="form-group grid">
                                    <label htmlFor="date">Date</label>
                                    <input type="date" name="" id="date" />
                                </div>
                                <div className="form-group grid">
                                    <label htmlFor="time">Time</label>
                                    <input type="time" name="" id="time" />
                                </div>
                            </fieldset>
                            
                            <fieldset className="flex">
                                <legend>Checkboxes</legend>
                                <div className="form-group flex">
                                    <input type="checkbox" name="checks" id="" />
                                    <label>value 1</label>
                                </div>
                                <div className="form-group flex">
                                    <input type="checkbox" name="checks" id="" />
                                    <label>value 2</label>
                                </div>
                                <div className="form-group flex">
                                    <input type="checkbox" name="checks" id="" />
                                    <label>value 3</label>
                                </div>
                            </fieldset>

                            <fieldset className="flex">
                                <legend>Radio Buttons</legend>
                                <div className="form-group flex">
                                    <input type="radio" value='value 1' name="value" id="" />
                                    <label>value 1</label>
                                </div>
                                <div className="form-group flex">
                                    <input type="radio" value='value 2' name="value" id="" />
                                    <label>value 2</label>
                                </div>
                                <div className="form-group flex">
                                    <input type="radio" value='value 3' name="value" id="" />
                                    <label>value 3</label>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>                <div className="container design-system-child grid mg-block-1">
                    <div className="title wrapper grid alpha-100 bg-primary txt-white place-block-center">
                        <h4 className="section-title">Header and Footer</h4>
                    </div>
                    <div className="body wrapper grid mg-block-1">
                        <div className="group grid gap1">
                            <h5 className="sub-title">Footer</h5>
                        </div>
                        <div className="group grid gap1">
                            <h5 className="sub-title">Header</h5>
                            <Header />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default DesignSystem;