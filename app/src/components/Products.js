import React, { Component } from 'react';
import style from '../App.module.scss';

class Products extends Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [],
			searchKeys: [],
			inputStr: ''
		};

		this.updateKeys = this.updateKeys.bind(this);
	}

	updateKeys(e) {
		let newKeys = e.target.value.split(' ');
		this.setState({
			searchKeys: newKeys,
			inputStr: e.target.value
		}, ()=>{
			console.log(this.state.searchKeys);
		})
	}

	componentDidMount(){
		let self = this;

		fetch('https://jsonplaceholder.typicode.com/photos?_limit=500')
			.then(results => {
				return results.json();
			}).then(data => {
				self.setState({
					products: [...data]
				})
			})
	}

  render() {
		let self = this;

		let productList = this.state.products.filter((item)=>{
			let title = item.title;
			let conditions = self.state.searchKeys;
			let filterResult = self.state.inputStr === '' ? true : filterResult = conditions.some(key => title.includes(key));

			return filterResult
		}).map((item)=>{
			return (
				<div key={item.id} className={style["col-md-4"]}>
					<a href={item.url} target="_blank" className={style.product}>
						<img src={item.url} className={style["img-fluid"]} />
						<h4>{item.title}</h4>
					</a>
				</div>
			)
		});

    return (
      <div className={style.products}>
				<h3>SHOP ({productList.length})</h3>
				<div className={style.container}>
					<div className={style.row}>
						<div className={style["col-md-12"]}>
							<div className={style["form-group"]}>
								<input 
									value={this.state.inputStr} 
									onChange={this.updateKeys}
									className={style["form-control"]} 
									placeholder="Testo da ricercare"
								/>
							</div>
						</div>
						{productList}
					</div>
				</div>
				
      </div>
    );
  }
}

export default Products;