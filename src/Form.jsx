import { Component } from "react";
import propTypes from 'prop-types'


class Form extends Component {
   static propTypes = null
   render() {
      return (
         <div className="container">
            <form className="formData card-form" action="" onSubmit={this.props.handleSubmit}>
               <div className="input">
                  <input className="input-field" required name="formName" type="text" />
                  <label className="input-label" htmlFor="">Full Name</label>
               </div>

               <div className="input"> 
                  <input className="input-field" required name="formEmail" type="email" />
                  <label className="input-label" htmlFor="">Email</label>
               </div>

               <div className="input">
                  <input className="input-field" required name="formContact" type="number" />
                  <label className="input-label" htmlFor="">Contact</label>
               </div>   

               <div className="action">
                  <button className="action-button" type="submit">Submit</button>
               </div>     
            </form>
         </div>
      )
   }
}

export default Form;
