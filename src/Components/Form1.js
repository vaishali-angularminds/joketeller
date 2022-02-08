import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import axios from 'axios';
class Temp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://v2.jokeapi.dev/joke/Any',
            baseUrl1: 'https://v2.jokeapi.dev/joke/Any',
            joke: {},
            count: 1,
            isSubmmit: false,
            idRange: [],
            flag:false,
            singleJike: []

        };
        this.sendReq = this.sendReq.bind(this);
        this.blacks = this.blacks.bind(this);

    }

    sendReq(formik, lag) {
        // console.log(this.state.idRange)

        formik.idRange.to = this.state.idRange[lag][1]
      this.state.flag=true



    }
    blacks(formik) {
        // console.log(formik)
    }
    componentDidMount() {
        this.setState({ baseUrl: 'https://v2.jokeapi.dev/joke/Any' })
        axios.get('https://v2.jokeapi.dev/info')
            .then((response) => {

                this.setState({ idRange: response.data.jokes.idRange })


            })



    }

    render() {

        return (
            <div className="card-body text-white bg-dark mx-auto w-75 mt-5 border  rounded">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <Formik initialValues={{
                            category: 'Any',
                            language: 'en',
                            blacklistFlags: [],
                            type: ['single', 'twopart'],
                            contains: '',
                            idRange: { 'from': 0, 'to': 319 },
                            amount: '1'
                        }}
                     validate ={(values)=>{
                      this.setState({ baseUrl1: 'https://v2.jokeapi.dev/joke/Any' })
                      let s = '?'
                      if (values.language === 'en')
                      this.setState({ baseUrl1: this.state.baseUrl1 })
                  else {


                      //   if(this.state.baseUrl.includes('?'))
                      this.setState({ baseUrl1: this.state.baseUrl1 + `${s}lang=${values.language}` })
                      s = '&';
                  }
                  if (values.blacklistFlags.length) {
                      this.setState({ baseUrl1: this.state.baseUrl1 + (`${s}blacklistFlags=${values.blacklistFlags}`) })
                      s = '&';
                  }

                  if (values.type.length === 1) {
                      this.setState({ baseUrl1: this.state.baseUrl1 + (`${s}type=${values.type}`) })
                      s = '&';
                  }
                  if (values.contains) {
                      this.setState({ baseUrl1: this.state.baseUrl1 + (`${s}contains=${values.contains}`) })
                      s = '&';
                  }
                  if (this.state.flag) {
                      console.log(this.state.idRange)
                      if (values.idRange.to !== this.state.idRange[values.language][1]) {
                          // console.log(this.state.idRange[values.language][1])
                          console.log(this.state.idRange)
                          this.setState({ baseUrl1: this.state.baseUrl1 + (`${s}idRange=${values.idRange.from}-${values.idRange.to}`) })
                          s = '&';
                      }
                  } else
                      console.log('laguage is not selected')


                  if (values.amount != 1) {
                      this.setState({ baseUrl1: this.state.baseUrl + (`${s}amount=${values.amount}`) })
                      s = '&';
                  }

                            if(values.category == 'custom')
                                document.getElementById('category').className = 'border-danger col-6 text-start p-1 border rounded'
                            else
                                document.getElementById('category').className = ' col-6 text-start p-1 border rounded'
                            if(values.type.length<1 ){
                                document.getElementById('joketype').className = 'border-danger col-6 text-start p-1 border rounded'
                            }else
                                document.getElementById('joketype').className = ' col-6 text-start p-1 border rounded'
                            if(values.amount === 0 || values.amount == '' || values.amount>10)
                                document.getElementById('amount').className = 'border-danger col-6 text-start p-1 border rounded'
                            else
                                document.getElementById('amount').className = ' col-6 text-start p-1 border rounded'
                            }

                     }

                            onSubmit={(values) => {
                                this.setState({ baseUrl: 'https://v2.jokeapi.dev/joke/Any' })
                                this.setState({ isSubmmit: true })
                                this.setState({ lag: values.language })
                                console.log(this.state.lag);
                                console.log(this.state.baseUrl);
                                let s = '?'
                                if (values.category === 'Any')
                                    this.setState({ baseUrl: this.state.baseUrl })
                                else {
                                    if (values.category === 'custom') {

                                        document.getElementById('category').className = 'border-danger col-6 text-start p-1 border rounded'

                                    }

                                    else {
                                        this.setState({ baseUrl: 'https://v2.jokeapi.dev/joke' + `/${values.category}` })
                                        document.getElementById('category').className = ' col-6 text-start p-1 border rounded'
                                    }
                                }


                                if (values.language === 'en')
                                    this.setState({ baseUrl: this.state.baseUrl })
                                else {


                                    //   if(this.state.baseUrl.includes('?'))
                                    this.setState({ baseUrl: this.state.baseUrl + `${s}lang=${values.language}` })
                                    s = '&';
                                }
                                if (values.blacklistFlags.length) {
                                    this.setState({ baseUrl: this.state.baseUrl + (`${s}blacklistFlags=${values.blacklistFlags}`) })
                                    s = '&';
                                }

                                if (values.type.length === 1) {
                                    this.setState({ baseUrl: this.state.baseUrl + (`${s}type=${values.type}`) })
                                    s = '&';
                                }
                                if (values.contains) {
                                    this.setState({ baseUrl: this.state.baseUrl + (`${s}contains=${values.contains}`) })
                                    s = '&';
                                }
                                if (this.state.idRange !== []) {
                                    console.log(this.state.idRange)
                                    if (values.idRange.to !== this.state.idRange[values.language][1]) {
                                        // console.log(this.state.idRange[values.language][1])
                                        console.log(this.state.idRange)
                                        this.setState({ baseUrl: this.state.baseUrl + (`${s}idRange=${values.idRange.from}-${values.idRange.to}`) })
                                        s = '&';
                                    }
                                } else
                                    console.log('laguage is not selected')


                                if (values.amount != 1) {
                                    this.setState({ baseUrl: this.state.baseUrl + (`${s}amount=${values.amount}`) })
                                    s = '&';
                                }

                                // console.log(this.state.baseUrl);
                                axios.get(this.state.baseUrl)
                                    .then((response) => {
                                        // console.log(response.data)
                                        if (values.amount != 1)
                                            this.setState({ joke: response.data.jokes })
                                        // console.log(this.state.joke);
                                        else {
                                            this.setState({ joke: response.data })
                                            console.log(response);
                                        }



                                    })
                            }
                            } >




                            {(formik) => (
                                <div>
                                    {/* {console.log(formik)} */}
                                    {/* {console.log(this.setState({count: formik.values.category}))} */}
                                    <div className="row mb-4 ">
                                        <div className=" text-center text-uppercase">
                                            <h1 className="mt-2">Joke Teller</h1>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className='row mb-3'>
                                            <div className='col-4  text-start '>
                                                <label htmlFor="category">Select category/categories</label>
                                            </div>
                                            <div className='col-6 text-start p-1 border rounded ' id='category'>
                                                <input type={'radio'}
                                                    onChange={formik.handleChange}
                                                    id="category"
                                                    value='Any'
                                                    checked={(formik.values.category) === 'Any' && true}
                                                    name='category' />
                                                <label>Any</label>


                                                <div>
                                                    <input type={'radio'} id="category"
                                                        onChange={formik.handleChange}
                                                        value='custom'
                                                        name='category' />
                                                    <label htmlFor="custom">Custom : </label>
                                                    <select
                                                        className='w-45 ms-2'
                                                        id="category"
                                                        name="category"
                                                        type="select"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.category}
                                                        onBlur={formik.handleBlur} 
                                                        disabled={(formik.values.category) === 'Any' && true}
                                                    >
                                                        <option value="Programming">Programming</option>
                                                        <option value="Misc">Misc</option>
                                                        <option value="Dark">Dark</option>
                                                        <option value="Pun">Pun</option>
                                                        <option value="Spooky">Spooky</option>
                                                        <option value="Christamas">Christamas</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* {console.log(formik.values)} */}
                                        <div className='row mb-3' >
                                            <div className='col-4 text-start '>
                                                <label htmlFor="language">Select Language</label>
                                            </div>
                                            <div className='col-6 p-1 text-start border rounded'>
                                                <select className='w-45 text-center'
                                                    id="language"
                                                    name="language"
                                                    type="select"
                                                    onChange={formik.handleChange}
                                                    onClick={() => this.sendReq(formik.values, formik.values.language)}
                                                    value={formik.values.language}
                                                    onBlur={formik.handleBlur}>
                                                    <option value="cs">cs - Czech</option>
                                                    <option value="de">de - German</option>
                                                    <option value="en">en - English</option>
                                                    <option value="es">es - Spanish</option>
                                                    <option value="fr">fr - French</option>
                                                    <option value="pt">pt - Portuguese</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row mb-3 '>
                                            <div className='col-4 text-start '>
                                                <label htmlFor="email">Select  Flags to Blacklist (optional)</label>
                                            </div>
                                            <div className='col-6 text-start border rounded' >
                                                <input id="blacklistFlags"

                                                    name="blacklistFlags"
                                                    onChange={formik.handleChange}
                                                    value='nsfw'
                                                    type="checkbox" />
                                                <label htmlFor="blacklistFlags">nsfw</label>



                                                <input id="blacklistFlags"
                                                    name="blacklistFlags"
                                                    onChange={formik.handleChange}
                                                    value='religious'

                                                    type="checkbox" />
                                                <label htmlFor="religious">religious</label>


                                                <input id="blacklistFlags"
                                                    name="blacklistFlags"
                                                    onChange={formik.handleChange}
                                                    value='political'
                                                    onClick={(FormikProps) => this.blacks(formik.values)}
                                                    type="checkbox" />
                                                <label htmlFor="blf-cb3">political</label>

                                                <input
                                                    id="blacklistFlags"
                                                    name="blacklistFlags"
                                                    onChange={formik.handleChange}
                                                    value="racist"
                                                    type="checkbox" />
                                                <label htmlFor="racist">racist</label>


                                                <input
                                                    id="blacklistFlags"
                                                    name="blacklistFlags"
                                                    onChange={formik.handleChange}
                                                    value='sexist'
                                                    type="checkbox" />
                                                <label htmlFor="sexist">sexist</label>

                                                <input
                                                    id="blacklistFlags"
                                                    name="blacklistFlags"
                                                    onChange={formik.handleChange}
                                                    value='explicit'
                                                    type="checkbox" />
                                                <label htmlFor="blacklistFlags">explicit</label>

                                            </div>
                                        </div>
                                        <div className='row mb-3' >
                                            <div className='col-4 text-start'>
                                                <label htmlFor="twopart">Select jock type</label>
                                            </div>
                                            <div className='col-6 text-start border rounded' id='joketype' style={{ display: 'flex' }}>
                                                <div className=' '>
                                                    <input id="type"
                                                        name="type"
                                                        onChange={formik.handleChange}
                                                        value='single'
                                                        checked={(formik.values.type).includes('single') && true}
                                                        onBlur={formik.handleBlur} type="checkbox" />
                                                    <label htmlFor="blf-cb1">singel</label>
                                                </div>

                                                <div className='  '>
                                                    <input id="type"
                                                        name="type"
                                                        onChange={formik.handleChange}
                                                        checked={(formik.values.type).includes('twopart') && true}
                                                        value='twopart'
                                                        onBlur={formik.handleBlur} type="checkbox" />
                                                    <label htmlFor="blf-cb2">twopart</label>
                                                </div>
                                            </div>
                                        </div >


                                        <div className='row mb-3' >

                                            <div className='col-4 text-start'>
                                                <label htmlFor="email">Search for a joke that contains this search string:</label>

                                            </div>
                                            <div className='col-6 p-1 border rounded'>

                                                <input
                                                    className='w-100 '
                                                    id="contains"
                                                    name="contains"
                                                    type="select"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.contains}
                                                    onBlur={formik.handleBlur} type="text" placeholder='(optional)' />
                                                {formik.errors.contains ? <div style={{ color: 'red' }}>{formik.errors.contains}</div> : null}
                                            </div>

                                        </div>

                                        <div className='row mb-3'>
                                            {/* <div className="multiselect noselect" id="idRangeWrapper" style={{ borderColor: 'initial' }}> */}
                                            <div className='col-4 text-start'>
                                                <label htmlFor="idRange">Search for a joke in this ID range:(optional)</label>

                                            </div>

                                            <div className='col-6 text-start border rounded' style={{ display: 'flex', padding: '10px' }}>

                                                (optional)  From: <input id="idRange"

                                                    style={{ height: '25px', width: '65px' }}
                                                    name="idRange"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.idRange.from}
                                                    onBlur={formik.handleBlur} type="number" id="idRangeInputFrom" min="0" step="1" max="1368" />


                                                To: <input id="idRange"

                                                    style={{ height: '25px', width: '65px' }}
                                                    name="idRange"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.idRange.to}
                                                    onBlur={formik.handleBlur} type="number"  
                                                    min="0" step="1" max= {formik.values.idRange.to} />


                                            </div>
                                        </div>

                                        <div className='row mb-3' >
                                            <div className='col-4 text-start' >
                                                <label htmlFor="email">Amount of jokes:</label>
                                            </div>

                                            <div id='amount' className='col-6 text-start border p-1 rounded'>
                                                <input id="amount"
                                                    style={{ marginTop: '10px', height: '25px', width: '65px' }}
                                                    name="amount"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.amount}
                                                    onBlur={formik.handleBlur} type="number" 
                                                     min="1" step="1" max="10"
                                                    onChange={formik.handleChange} >
                                                </input>
                                            </div>
                                        </div>



                                        <div className='row border mt-2 w-75 me-5 ms-1 text-start rounded'>
                                            <span>URL :
                                                <label className='text-primary'>
                                                    {this.state.baseUrl1}

                                                </label>
                                            </span>
                                            <span className=' mt-2 p-1 ps-2'>
                                                <button className='me-2 rounded' onClick={() => { window.location.reload() }}>Reset Form</button>
                                                <button type="submit" className='rounded'
                                                // onClick={() => this.sendReq(formik.values)}
                                                >
                                                    Send Request {`>`} </button>
                                            </span>
                                        </div>
                                    </Form>


                                    {/* --------------------------------------------------Result------------------------------------------------ */}
                                    <div className='row border ms-1  bg-black rounded mt-1 '>
                                        <div className='result text-start'>
                                            <h5>{`</>`}Result</h5>



                                        </div>
                                        <hr className='border border-primary'></hr>



                                        {/* {console.log(formik.values.amount)} */}
                                        {this.state.isSubmmit == true ?(

                                            this.state.joke.error == true ? (
                                                <div className="row ">
                                                    <label className='col-md-6'>{this.state.joke.message}</label>
                                                    {/* <label>no matching data found</label> */}
                                                    <br />
                                                </div>
                                            ) : 
                                            (
                                            formik.values.amount == 1 ? (
                                                <div className='text-start'>
                                                    {console.log(this.state.joke)}
                                                    {this.state.joke.type === 'single' ?
                                                        (
                                                            <div className="row ">
                                                                <label className='col-md-6'>{this.state.joke.joke}</label>
                                                                <br />
                                                                <label>----------------------------------------------</label>
                                                            </div>

                                                        )
                                                        :
                                                        (
                                                            <>
                                                                <div className="row ">
                                                                    <label className='col-md-6'>{this.state.joke.setup}</label>

                                                                </div>
                                                                <label id={this.state.joke.id} style={{ display: 'none' }}>{this.state.joke.delivery}</label>
                                                                <button id={1} onClick={() => {
                                                                    document.getElementById(this.state.joke.id).style.display = 'block';
                                                                    document.getElementById(1).style.display = 'none'
                                                                }}> show answer</button>

                                                                <br />
                                                                <label>----------------------------------------------</label>
                                                            </>
                                                        )
                                                    }

                                                </div>

                                            ) : (

                                                this.state.joke.length &&
                                                    this.state.joke.map((j, index) => (

                                                        <div key={index} className='text-start'>
                                                            {console.log(j)}
                                                            {j.type === 'single' ?
                                                                (
                                                                    <div className="row ">
                                                                        <label className='col-md-6'>{j.joke}</label>
                                                                        <br />
                                                                        <label>----------------------------------------------</label>
                                                                    </div>

                                                                )
                                                                :
                                                                (
                                                                    <>
                                                                        <div className="row ">
                                                                            <label className='col-md-6'>{j.setup}</label>

                                                                        </div>
                                                                        <label id={j.id} style={{ display: 'none' }}>{j.delivery}</label>
                                                                        <button id={j.id + 1} onClick={() => { document.getElementById(j.id).style.display = 'block'; document.getElementById(j.id + 1).style.display = 'none'; }}> show answer</button>

                                                                        <br />
                                                                        <label>----------------------------------------------</label>
                                                                    </>
                                                                )
                                                            }

                                                        </div>
                                                    )
                                                )

                                            )


                                            )

                                        ):
                                        (
                                            <div>
                                                <label>(Set parameters and click "Send Request" above)</label>
                                            </div>
                                        )
                                        }

                                    </div>

                                    {/*----------------------------------------------End---------------------------------------------------------  */}

                                </div>




                            )}
                        </Formik>
                        {/* ==========================================Result =========================================== */}


                    </div>

                </div>



            </div>


        );
    }
}
export default Temp;