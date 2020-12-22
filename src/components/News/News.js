import { useState } from 'react'
import './news.css'
import products from '../../products'
import Pagination from './Pagination'

const News = () => {
	const [open, setOpen] = useState(false)
	const [itemState, setItemState] = useState()
	const handleClick = (posts) => {
		setOpen(true)
		setItemState(posts)
	}
	const [showPerPage] = useState(2)
	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage
	})

	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end })
	}
	return (
		<div className="news_block">
            <div className="news_block_row">
            {products.slice(pagination.start, pagination.end).map((posts) => (
				<div onClick={() => handleClick(posts)} className="news_card" key={posts.title}>
					<div className="news_img">
						<img src={posts.image} alt={posts.name} />
					</div>
					<h1 className="news_title">{posts.name}</h1>
					<div className="news_btn" onClick={() => handleClick(posts)}>
						Показать всю статью
					</div>
				</div>
			))}
            </div>
			
			{open && (
				<div className="newsItem">
					<div className="newsItem_block">
						<div className="newsItem_wrapper">
							<div className="newsItem_header">
								<div className="newsitem_header_title">{itemState.name}</div>
								<i onClick={() => setOpen(false)} className="fas fa-times"></i>
							</div>
							<div className="newsitem_desc">{itemState.description}</div>
							<div className="newsitem_img">
								<img src={itemState.image} alt={itemState.title} />
							</div>
						</div>
					</div>
				</div>
			)}
			<Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={products.length} />
		</div>
	)
}

export default News
