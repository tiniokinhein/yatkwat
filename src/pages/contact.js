import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import axios from 'axios'

const API_PATH = 'http://title.yatkwat.com/api/contact/index.php'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            mailSent: false,
            error: null,
            showPopup: false
        }
        this.baseState = this.state;
    }

    resetForm = () => {
        this.setState(this.baseState)
    }

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
        };

    render() {
        return(
            <Layout>
                <SEO title="ရပ်ကွက်သို့ ဆက်သွယ်ရန်" />
                <div className="viral-news-breadcumb-area section-padding-50 about-us">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <h3>ရပ်ကွက်သို့ ဆက်သွယ်ရန်</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-area section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="container-fluid">
                                <div className="contact-form-area mb-70 col-12 col-lg-8 col-offset">
                                    <form id="contact-form" action="#" onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-12 col-lg-6">
                                                <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} className="form-control" id="name" required name="name" placeholder="နာမည်" />
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="email" required name="email" placeholder="အီးမေးလ်"/>
                                            </div>
                                            <div className="col-12">
                                                <input type="text" value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })} className="form-control" id="subject" name="subject" placeholder="ခေါင်းစဉ်" />
                                            </div>
                                            <div className="col-12">
                                                <textarea value={this.state.message} onChange={e => this.setState({ message: e.target.value })} name="message" className="form-control" id="message" required cols="30" rows="10" placeholder="အကြောင်းအရာ" ></textarea>
                                            </div>
                                            <div className="col-12 col-sm-6 btn-group">
                                                <button className="btn viral-btn mt-30" onClick={e => this.handleFormSubmit(e)} type="submit">ပို့ရန်</button>
                                            </div>
                                            <div className="col-12 col-sm-6 btn-group">
                                                <button onClick={this.resetForm} type="button" className="btn viral-btn mt-30">ပြင်ရေးရန်</button>
                                            </div>
                                        </div>
                                        <div className="mess-wrap"> 
                                            {this.state.mailSent  &&
                                                <div className="pp-wrap">
                                                    <div className="success">
                                                        " ကျေးဇူးတင်ပါသည် "<br /> 
                                                        အကြောင်းအရာများ ပို့ထားပြီးပါပြီ၊<br />
                                                        မကြာမီ ကျွန်တော်တို့ ဆက်သွယ်လာပါမည်။
                                                        <button onClick={this.resetForm} type="button" className="close-contact btn viral-btn mt-30"><i class="fa fa-times" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            }
                                            {this.state.error  &&
                                                <div className="pp-wrap">
                                                    <div className="error">
                                                        နာမည်၊ အီးမေးလ်၊  ခေါင်းစဉ်၊ အကြောင်းအရာများကို ပြည့်စုံစွာ ဖြည့်စွက်ပါ။<br />
                                                        နောက်တစ်ကြိမ် ပြန်ကြိုးစားကြည့်ပါ။
                                                        <button onClick={this.resetForm} type="button" className="close-contact btn viral-btn mt-30"><i class="fa fa-times" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact