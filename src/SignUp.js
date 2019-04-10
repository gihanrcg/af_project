import React, { Component } from 'react';
import './SignUp.css';
import $ from 'jquery';


class SignUp extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        // Jquery here $(...)...

        $("#defaultOpen").click();
    }


    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }



    render() {
        return (
            <div>
                <div class="tab">
                    <button class="tablinks" id="defaultOpen" onClick={(event)=>this.openCity(event, 'basic')}>Basic Information</button>
                   <button class="tablinks" onClick={(event)=>this.openCity(event, 'Interests')} >Interests</button>
                    <button class="tablinks" onClick={(event)=>this.openCity(event, 'Places')} >Places Visited</button>
                    <button class="tablinks"  onClick={(event)=>this.openCity(event, 'Bucket')} >Bucket List</button>
                    <button class="tablinks" onClick={(event)=>this.openCity(event, 'Gallery')}>Gallery</button>
                    <button class="tablinks" onClick={(event)=>this.openCity(event, 'Friends')} >Friends</button>
                    <button class="tablinks" onClick={(event)=>this.openCity(event, 'Reviews')} >Reviews</button>


                </div>

                <div id="basic" class="tabcontent">
                    <h3>Basic</h3>
                    <div class="container">
                        <form action="/action_page.php">
                            <div class="row">
                                <div class="col-25">
                                    <label for="fname">User Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Username..."/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Email</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="Email..."/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="password">Password</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="password" name="lastname" placeholder="Password..."/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="confpassword">Confirm Password</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="confpassword" name="lastname" placeholder="Confirm Password..."/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="fname">Facebook URL</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Facebook URL..."/>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="fname">BLOG / VLOG</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="BLOG / VLOG..."/>
                                </div>
                            </div>

                            <div class="row">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="Interests" class="tabcontent">

                    <div class="container">
                        <form action="/action_page.php">


                            <div class="row">
                                <div class="col-25">
                                    <label for="subject">Activities</label>
                                </div>
                                <div class="col-75">
                                    <textarea id="subject" name="subject" placeholder="separate from commas" style={{height:"150px"}}></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="subject">Places</label>
                                </div>
                                <div class="col-75">
                                    <textarea id="subject" name="subject" placeholder="separate from commas" style={{height:"150px"}}></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="subject">Time period</label>
                                </div>
                                <div class="col-75">
                                    From :  <input type="date" id="fname" name="firstname" placeholder="BLOG / VLOG..."/>
                                    To :  <input type="date" id="fname" name="firstname" placeholder="BLOG / VLOG..."/>
                                </div>
                            </div>
                            <div class="row">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>

                </div>

                <div id="Places" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>

                <div id="Bucket" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>

                <div id="Gallery" class="tabcontent">






                </div>

                <div id="Friends" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>

                <div id="Reviews" class="tabcontent">
                    <h3>Tokyo</h3>
                    <p>Tokyo is the capital of Japan.</p>
                </div>
            </div>
        );
    }
}


export default SignUp;
