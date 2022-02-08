import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import axios from 'axios';


class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://v2.jokeapi.dev/joke',
            count: 1,
        };

        this.sendReq = this.sendReq.bind(this);
        this.blacks = this.blacks.bind(this);

    }



    sendReq(formik) {
        console.log(formik);
        axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(response => this.setState({ count: response.data }));
    }

    blacks(formik) {
        this.setState({ count: 2 })

        
        console.log(formik.target.value);
        

    }
    render() {
        
        console.log(this.state.count);

        

        return (
            <div className="card-body text-white bg-dark mx-auto w-75 mt-5 border  rounded">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <Formik initialValues={{
                            category: '',
                            language: '',
                            blacklistFlags: { 'nsfw': false, 'religious': false, 'political': false, 'racist': false, 'sexist': false, 'explicit': false },
                            type: { 'single': true, 'twopart': true },
                            conatains: '',
                            idRange: { 'from': 0, 'to': 1368 },
                            amount: '1'
                        }}
                            onSubmit={(values) => {
                                console.log(values)
                                alert("Form is validated! Submitting the form...")
                            }
                            } >
                            {(formik) => (
                                <div>
                                    {/* {console.log(this.setState({count: formik.values.category}))} */}
                                    <div className="row mb-4 ">
                                        <div className="col-lg-12 text-center text-uppercase">
                                            <h1 className="mt-2">Joke Teller</h1>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className='row mb-3'>
                                            <div className='col-4  text-start '>
                                                <label htmlFor="category">Select category/categories</label>
                                            </div>
                                            <div className='col-4 text-start p-1 border rounded'>
                                                <input type={'radio'} />
                                                <label>Any</label>
                                                <div>
                                                    <input type={'radio'} id='custom' />
                                                    <label htmlFor="custom">Custom : </label>

                                                    <select
                                                        className='w-75 ms-2'
                                                        id="category"
                                                        name="category"
                                                        type="select"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.category}
                                                        onBlur={formik.handleBlur} disabled={false}
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

                                        {console.log(formik.values)}

                                        <div className='row mb-3' >
                                            <div className='col-4 text-start '>
                                                <label htmlFor="language">Select Language</label>
                                            </div>
                                            <div className='col-3 p-1 text-start border rounded'>
                                                <select className='w-100 text-center'
                                                    id="language"
                                                    name="language"
                                                    type="select"
                                                    onChange={formik.handleChange}
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
                                            <div className='col-1 p-1 text-start border border-end-0 rounded'>
                                                <input id="blacklistFlags.nsfw"
                                                    name="blacklistFlags.nsfw"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.blacklistFlags.nsfw}
                                                    checked={formik.values.blacklistFlags.nsfw}
                                                    type="checkbox" />
                                                <label htmlFor="blacklistFlags.nsfw">nsfw</label>

                                            </div>

                                            <div className='col-1 p-1 border p-0 border-start-0 border-end-0 rounded'>
                                                <input id="blacklistFlags.religious"
                                                    name="blacklistFlags.religious"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.blacklistFlags.religious}
                                                    checked={formik.values.blacklistFlags.religious}
                                                    type="checkbox" />
                                                <label htmlFor="religious">religious</label>

                                            </div>
                                            <div className='col-1 p-1  border border-start-0 border-end-0 rounded'>

                                                <input id="blacklistFlags.political"
                                                    name="blacklistFlags.political"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.blacklistFlags.political}
                                                    onClick={(FormikProps) =>this.blacks(FormikProps)}

                                                    checked={formik.values.blacklistFlags.political}
                                                    type="checkbox" />
                                                <label htmlFor="blf-cb3">political</label>
                                            </div>


                                            <div className='col-1 p-1 border border-start-0 border-end-0 rounded'>

                                                <input
                                                    id="blacklistFlags.racist"
                                                    name="blacklistFlags.racist"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.blacklistFlags.racist}
                                                    checked={formik.values.blacklistFlags.racist}
                                                    type="checkbox" />
                                                <label htmlFor="racist">racist</label>
                                            </div>

                                            <div className='col-1 p-1 border border-start-0 border-end-0 rounded'>
                                                <input
                                                    id="blacklistFlags.sexist"
                                                    name="blacklistFlags.sexist"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.blacklistFlags.sexist}
                                                    checked={formik.values.blacklistFlags.sexist}
                                                    type="checkbox" />
                                                <label htmlFor="sexist">sexist</label>
                                            </div>
                                            <div className='col-1 p-1 border border-start-0 rounded'>
                                                <input
                                                    id="blacklistFlags.explicit"
                                                    name="blacklistFlags.explicit"
                                                    onChange={formik.handleChange}
                                                    defaultValue={formik.values.blacklistFlags.explicit}
                                                    checked={formik.values.blacklistFlags.explicit}
                                                    type="checkbox" />
                                                <label htmlFor="blacklistFlags.explicit">explicit</label>
                                            </div>
                                        </div>
                                        <div className='row mb-3' >

                                            <div className='col-4 text-start'>
                                                <label htmlFor="twopart">Select jock type</label>
                                            </div>

                                            <div className='col-1 p-1 text-start border rounded'>
                                                <input id="type.single"
                                                    name="type.single"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.type.single}
                                                    checked={formik.values.type.single}
                                                    onBlur={formik.handleBlur} type="checkbox" id="blf-cb1" /><label htmlFor="blf-cb1">singel</label>
                                            </div>

                                            <div className='col-1 p-1 text-start border rounded'>
                                                <input id="type.twopart"
                                                    name="type.twopart"
                                                    onChange={formik.handleChange}
                                                    checked={formik.values.type.twopart}
                                                    value={formik.values.type.twopart}
                                                    onBlur={formik.handleBlur} type="checkbox" id="blf-cb2" />
                                                <label htmlFor="blf-cb2">twopart</label>
                                            </div>

                                        </div >


                                        <div className='row mb-3' >

                                            <div className='col-4 text-start'>
                                                <label htmlFor="email">Search for a joke that contains this search string:</label>

                                            </div>
                                            <div className='col-6 p-1 border rounded'>

                                                <input
                                                    className='w-100 '
                                                    id="conatains"
                                                    name="conatains"
                                                    type="select"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.conatains}
                                                    onBlur={formik.handleBlur} type="text" placeholder='(optional)' />
                                                {formik.errors.conatains ? <div style={{ color: 'red' }}>{formik.errors.conatains}</div> : null}
                                            </div>

                                        </div>

                                        <div className='row mb-3'>
                                            {/* <div className="multiselect noselect" id="idRangeWrapper" style={{ borderColor: 'initial' }}> */}
                                            <div className='col-4 text-start'>
                                                <label htmlFor="idRange">Search for a joke in this ID range:(optional)</label>

                                            </div>


                                            <div className='col-3 text-start p-1 border border-end-0 rounded'>
                                                (optional) &nbsp;&nbsp; From: <input id="idRange.from"
                                                    className='w-50'
                                                    name="idRange.from"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.idRange.from}
                                                    onBlur={formik.handleBlur} type="number" id="idRangeInputFrom" min="0" step="1" max="1368" />

                                            </div>

                                            <div className='col-2 text-start p-1 border border-start-0 rounded '>
                                                To: <input id="idRange.to"
                                                    className='w-75'
                                                    name="idRange.to"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.idRange.to}
                                                    onBlur={formik.handleBlur} type="number" id="idRangeInputTo" min="0" step="1" max="1368" />

                                            </div>
                                            {/* </div> */}
                                        </div>

                                        <div className='row mb-3' >
                                            <div className='col-4 text-start' >
                                                <label htmlFor="email">Number of jokes:</label>
                                            </div>

                                            <div className='col-1 border p-1 rounded'>
                                                <input id="amount"
                                                    className='w-100'
                                                    name="amount"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.amount}
                                                    onBlur={formik.handleBlur} type="number" id="jokesAmountInput" min="1" step="1"
                                                    onChange={formik.handleChange} max="10">
                                                </input>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mt-1">
                                            Submit</button>
                                    </Form>
                                    <div className='row border mt-2 w-75 me-5 ms-1 text-start rounded'>
                                        <span>URL :
                                            <label className='text-primary'>
                                                {`
                                            ${this.state.baseUrl}${formik.values.category ? '/' + formik.values.category : ''}
                                            ${formik.values.language ? '?lang=' + formik.values.language : ''}
                                            
                                            `}                                                </label>
                                        </span>
                                        <span className=' mt-2 p-1 ps-2'>
                                            <button className='me-2 rounded'>Reset Form</button>
                                            <button className='rounded' onClick={() => this.sendReq(formik.values)}>Send Request {`>`} </button>
                                        </span>
                                    </div>
                                    {console.log(formik.values)}

                                    {/* --------------------------------------------------Result------------------------------------------------ */}
                                    <div className='row border ms-1  bg-black rounded mt-1 '>
                                        <div className='result text-start'>
                                            <h5>{`</>`}Result</h5>



                                        </div>
                                        <hr className='border border-primary'></hr>

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
export default Joke;