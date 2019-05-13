import React, {useState} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import useForm from '../hooks/useForm'
import styles from './mailchimp-subscribe.module.scss'
const MailChimpSubscribe = () => {
	const { values, handleChange, handleSubmit } = useForm(subscribe)
  const [subscribed, setSubscribe] = useState(false)
	function subscribe() {

     addToMailchimp(values.email)
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
      setSubscribe(data)

    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })


   
  }

    return (

     		<form onSubmit={handleSubmit}  className={styles.row} >
            <p>Restez informés de nos activités en vous inscrivant à notre lettre d'information :</p>
		        <span>	
              <input 
              id="email"
			        className={styles.balloon} 
			        type="email" 
			        name="email" 
              placeholder="Email"
			        required 
			        onChange={handleChange} 
			        value={values.email || ''}  />
              <label htmlFor="email">Email</label>  
            </span>
		        <button type='submit' name="">Je m'inscris</button>
            { subscribed && <div className={subscribed.result} 
        dangerouslySetInnerHTML={{
            __html: subscribed.msg
        }}
    ></div>}
            {}

		      </form>
      
    )
  
}

export default MailChimpSubscribe