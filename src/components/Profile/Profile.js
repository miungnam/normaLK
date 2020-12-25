import React from 'react'
import Header from "../Header/Header"
import ContactInfo from "../ContactInfo/ContactInfo"
import News from "../News/News"
import Footer from "../Footer/footer"

const Main = () => {
	return (
		<div className="main">
			<Header />
			<br />
			<ContactInfo />
			<News />
			<Footer />
		</div>
	)
}

export default Main
