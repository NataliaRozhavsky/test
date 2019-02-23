import React, {Component} from 'react';
import './counter.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// comment 2
class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.count,
			isRed: true,
			startDate: new Date()
		}
    	this.minus = this.minus.bind(this);
	}
    minus() {
    	this.setState(
    		{
    			count:--this.state.count,
    			isRed: true
    		}
		)
    }

    handleChange = (date) => {
	  this.setState({
	  	startDate: date
	  });
	}

	render() {
		const {count, isRed, startDate} = this.state;
		const colorClass = isRed ? "red" : "green";

		return (
			<div className={colorClass}>
				<span>count: </span>
				{count}
				<button onClick={() => {this.setState({count:++this.state.count, isRed: false})}}>+</button>
				<button onClick={this.minus}>-</button>
				<div className="div1 purple">
					<div id="div2">
						<span>Alex</span>
					</div>
				</div>
				<div className="div1">
					{startDate.toString()}
				</div>
		        <DatePicker
		          selected={startDate}
		          onChange={this.handleChange}
		        />
			</div>
		);
	}
}
export default Counter;